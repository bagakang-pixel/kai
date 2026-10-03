const { findEpisode } = require('./data');
const torbox = require('./torbox');

const INFO_HASH = '671b08e4ff6d2b2630cd5dd4b894f79e01c5f2ff';

const TRACKERS = [
  'http://nyaa.tracker.wf:7777/announce',
  'udp://open.stealth.si:80/announce',
  'udp://tracker.opentrackr.org:1337/announce',
  'udp://exodus.desync.com:6969/announce',
  'udp://tracker.torrent.eu.org:451/announce'
];

const MAGNET =
  'magnet:?xt=urn:btih:' + INFO_HASH +
  '&dn=Naruto%20Kai%201-72%20%28Complete%29' +
  TRACKERS.map(t => '&tr=' + encodeURIComponent(t)).join('');

// ---- cache ----
const cache = {
  torrentId: null,
  torrentInfo: null,
  lastFetch: 0
};
const TTL = 5 * 60 * 1000;

function basename(p = '') {
  return p.split('/').pop().trim();
}

async function findOrCreateTorrent(apiKey) {
  const list = await torbox.getMyList(apiKey);
  const torrents = (list && list.data) || [];
  const found = torrents.find(
    t => (t.hash || '').toUpperCase() === INFO_HASH.toUpperCase()
  );
  if (found) return found.id;

  try {
    const created = await torbox.createTorrentFromMagnet(MAGNET, apiKey);
    const id =
      created?.data?.torrent_id ||
      created?.data?.id ||
      created?.torrent_id ||
      created?.id;
    if (!id) throw new Error('Tidak dapat torrent_id: ' + JSON.stringify(created));
    return id;
  } catch (err) {
    const list2 = await torbox.getMyList(apiKey);
    const torrents2 = (list2 && list2.data) || [];
    const found2 = torrents2.find(
      t => (t.hash || '').toUpperCase() === INFO_HASH.toUpperCase()
    );
    if (found2) return found2.id;
    throw err;
  }
}

async function getTorrentWithFiles(apiKey) {
  const now = Date.now();
  if (cache.torrentId && cache.torrentInfo && now - cache.lastFetch < TTL) {
    return cache.torrentInfo;
  }

  const torrentId = cache.torrentId || (await findOrCreateTorrent(apiKey));
  cache.torrentId = torrentId;

  const info = await torbox.getMyList(apiKey, torrentId);
  const torrent = info?.data;
  if (!torrent) throw new Error('Torrent info kosong');

  cache.torrentInfo = torrent;
  cache.lastFetch = now;
  return torrent;
}

function findFileId(torrent, filename) {
  if (!torrent || !torrent.files) return null;
  const target = basename(filename).toLowerCase();

  for (const f of torrent.files) {
    const name = basename(f.name || f.path || '').toLowerCase();
    if (name === target) return f.id;
  }
  for (const f of torrent.files) {
    const name = basename(f.name || f.path || '').toLowerCase();
    if (name.includes(target.replace(/\.[^.]+$/, ''))) return f.id;
  }
  return null;
}

async function getStreams(fullId, apiKey) {
  const ep = findEpisode(fullId);
  if (!ep) return [];

  const streams = [];

  if (apiKey) {
    try {
      const torrent = await getTorrentWithFiles(apiKey);
      const fileId = findFileId(torrent, ep.filename);

      if (fileId) {
        const dl = await torbox.requestDownloadLink(cache.torrentId, fileId, apiKey);
        const url = dl?.data;
        if (url) {
          streams.push({
            name: '⚡ TorBox',
            title:
              `▶ ${ep.rawTitle}\n` +
              `📁 ${basename(ep.filename)}\n` +
              `💾 ${ep.size}\n` +
              `🎬 ${ep.seasonLabel}`,
            url,
            behaviorHints: { notWebReady: false, bingeGroup: 'torbox-narutokai' }
          });
        }
      } else {
        streams.push({
          name: '⏳ TorBox',
          title: `File belum siap. Coba lagi beberapa menit.`,
          externalUrl: 'https://torbox.app'
        });
      }
    } catch (err) {
      streams.push({
        name: '⚠ TorBox (error)',
        title: `${err.message}\n\nPastikan API key TorBox valid.`,
        externalUrl: 'https://torbox.app'
      });
    }
  }

  streams.push({
    name: '🧲 Torrent (Naruto Kai)',
    title:
      `▶ ${ep.rawTitle}\n` +
      `📁 ${basename(ep.filename)}\n` +
      `💾 ${ep.size}\n` +
      `🎬 ${ep.seasonLabel}\n` +
      (apiKey ? `(stream via TorBox di atas)` : `(pasang API key TorBox untuk streaming langsung)`),
    infoHash: INFO_HASH,
    sources: TRACKERS.map(t => `tracker:${t}`),
    behaviorHints: { bingeGroup: 'torrent-narutokai' }
  });

  return streams;
}

module.exports = { getStreams, INFO_HASH, MAGNET };
