module.exports = {
  id: 'org.oceancut.narutokai',
  version: '1.0.0',
  name: 'Naruto Kai',
  description:
    'Naruto Kai — fan-edit Naruto yang memadatkan seluruh cerita menjadi 72 episode tanpa filler. ' +
    'Termasuk Itachi Shinden, Movie 7 (The Last), dan special. Powered by TorBox.',
  logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg',
  background: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg',
  resources: ['catalog', 'meta', 'stream'],
  types: ['series'],
  catalogs: [
    {
      type: 'series',
      id: 'naruto-kai',
      name: 'Naruto Kai'
    }
  ],
  idPrefixes: ['oc.narutokai'],
  behaviorHints: {
    configurable: true,
    configurationRequired: false
  }
};
