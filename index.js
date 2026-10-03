require('dotenv').config();
const express = require('express');
const path = require('path');

const manifest = require('./manifest');
const { getCatalogItems, getMeta } = require('./data');
const { getStreams } = require('./streams');

const app = express();
const PORT = process.env.PORT || 7000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

function getTorboxKey(req) {
  return (req.query && req.query.torbox) || process.env.TORBOX_API_KEY || '';
}

function parseExtra(extraStr = '') {
  const out = {};
  if (!extraStr) return out;
  extraStr.split('&').forEach(pair => {
    const [k, v = ''] = pair.split('=');
    if (k) out[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
  });
  return out;
}

// MANIFEST
app.get('/manifest.json', (req, res) => res.json(manifest));

// CATALOG
function handleCatalog(req, res) {
  const { type, id } = req.params;
  if (type !== 'series' || id !== 'naruto-kai') {
    return res.json({ metas: [] });
  }
  res.json({ metas: getCatalogItems() });
}
app.get('/catalog/:type/:id.json', handleCatalog);
app.get('/catalog/:type/:id/:extra.json', handleCatalog);

// META
app.get('/meta/:type/:id.json', (req, res) => {
  const meta = getMeta(req.params.id);
  if (!meta) return res.status(404).json({ err: 'not found' });
  res.json({ meta });
});

// STREAM
app.get('/stream/:type/:id.json', async (req, res) => {
  const torboxKey = getTorboxKey(req);
  try {
    const streams = await getStreams(req.params.id, torboxKey);
    res.json({ streams });
  } catch (err) {
    console.error('Stream error:', err);
    res.json({ streams: [] });
  }
});

// CONFIGURE PAGE
app.use('/configure', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.redirect('/configure/'));

app.use((req, res) => res.status(404).json({ err: 'not found' }));

app.listen(PORT, () => {
  console.log(`\n🍥 Naruto Kai addon running!`);
  console.log(`   Manifest : http://127.0.0.1:${PORT}/manifest.json`);
  console.log(`   Configure: http://127.0.0.1:${PORT}/configure/\n`);
});
