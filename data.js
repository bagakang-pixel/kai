// =============================================================
//  data.js — Naruto Kai (Split per Arc + Rich Metadata)
// =============================================================

const SERIES_ID     = 'oc.narutokai';
const SERIES_NAME   = 'Naruto Kai';
const SERIES_POSTER = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/x0T5AnzOhR7npUO7dMdoNdKtC4F.jpg';
const SERIES_BG     = 'https://image.tmdb.org/t/p/original/hMhFCfSDlQ3TZl6oYcVh5qicTsW.jpg';
const SERIES_LOGO   = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png';

// =============================================================
//  METADATA EXTRA (cast, trailers, dll.)
// =============================================================
const CAST = [
  'Junko Takeuchi',
  'Maile Flanagan',
  'Kate Higgins',
  'Noriaki Sugiyama',
  'Yuri Lowenthal',
  'Kazuhiko Inoue',
  'Dave Wittenberg',
  'Hideo Ishikawa',
  'Crispin Freeman'
];

const WRITERS  = ['Masashi Kishimoto'];
const DIRECTORS = ['Hayato Date'];

const TRAILERS = [
  { source: 'QDXvO1TAUUs', type: 'Trailer' }
];

// =============================================================
//  SEASON & THUMBNAIL
// =============================================================
const SEASON_NAMES = {
  0:  'Specials',
  1:  'Land of Waves',
  2:  'Chunin Exams',
  3:  'Konoha Crush',
  4:  'Search for Tsunade',
  5:  'Sasuke Retrieval',
  6:  'Kazekage Rescue',
  7:  'Tenchi Bridge Investigation',
  8:  'Akatsuki Suppression',
  9:  "Pain's Assault",
  10: 'Five Kage Summit',
  11: 'Countdown to War',
  12: 'Fourth Shinobi World War'
};

const SEASON_COLORS = {
  0:  '2c3e50',
  1:  '2980b9',
  2:  'e67e22',
  3:  'c0392b',
  4:  '27ae60',
  5:  '8e44ad',
  6:  '16a085',
  7:  'd35400',
  8:  '7f8c8d',
  9:  'b03a2e',
  10: '34495e',
  11: '8e44ad',
  12: '1a1a2e'
};

function makeThumbnail(seasonNum, epNum, shortTitle) {
  const bg = SEASON_COLORS[seasonNum] || '1a1a2e';
  const s  = String(seasonNum).padStart(2, '0');
  const e  = String(epNum).padStart(2, '0');
  const header = seasonNum === 0 ? `SPECIAL ${e}` : `S${s}E${e}`;
  const label = `${header}\\n\\n${shortTitle}\\n\\nNaruto Kai`;
  return `https://placehold.co/500x750/${bg}/ffffff/png?text=${encodeURIComponent(label)}&font=roboto`;
}

// =============================================================
//  RAW DATA
// =============================================================
const RAW = [
  // ================= SEASON 1 — LAND OF WAVES =================
  ['e01', 'Episode 01 - Naruto Uzumaki!',                          'Naruto Kai/Naruto - Episode 01 - Naruto Uzumaki!.mkv',                            '439.0 MiB',  1, 'episode'],
  ['e02', 'Episode 02 - The Worst Client',                         'Naruto Kai/Naruto - Episode 02 - The Worst Client.mkv',                           '754.2 MiB',  1, 'episode'],
  ['e03', 'Episode 03 - For My Dream!',                            'Naruto Kai/Naruto - Episode 03 - For My Dream!.mkv',                              '660.4 MiB',  1, 'episode'],
  ['e04', "Episode 04 - The Hero's Bridge!",                       "Naruto Kai/Naruto - Episode 04 - The Hero's Bridge!.mkv",                         '492.6 MiB',  1, 'episode'],

  // ================= SEASON 2 — CHUNIN EXAMS =================
  ['e05', 'Episode 05 - The Challengers!',                         'Naruto Kai/Naruto - Episode 05 - The Challengers!.mkv',                           '396.4 MiB',  2, 'episode'],
  ['e06', 'Episode 06 - Predator',                                 'Naruto Kai/Naruto - Episode 06 - Predator.mkv',                                   '598.4 MiB',  2, 'episode'],
  ['e07', 'Episode 07 - The Right Path!',                          'Naruto Kai/Naruto - Episode 07 - The Right Path!.mkv',                            '870.3 MiB',  2, 'episode'],
  ['e08', 'Episode 08 - Life-or-Death Battle!',                    'Naruto Kai/Naruto - Episode 08 - Life-or-Death Battle!.mkv',                      '543.2 MiB',  2, 'episode'],
  ['e09', 'Episode 09 - Neji vs Hinata',                          'Naruto Kai/Naruto - Episode 09 - Neji vs Hinata.mkv',                             '649.1 MiB',  2, 'episode'],
  ['e10', 'Episode 10 - A Splendid Ninja!',                        'Naruto Kai/Naruto - Episode 10 - A Splendid Ninja!.mkv',                          '599.7 MiB',  2, 'episode'],
  ['e11', 'Episode 11 - Seeking Apprenticeship!',                  'Naruto Kai/Naruto - Episode 11 - Seeking Apprenticeship!.mkv',                    '702.6 MiB',  2, 'episode'],
  ['e12', 'Episode 12 - The Great Flight!',                        'Naruto Kai/Naruto - Episode 12 - The Great Flight!.mkv',                          '572.1 MiB',  2, 'episode'],
  ['e13', 'Episode 13 - The Chunin Exams, Concluded!',             'Naruto Kai/Naruto - Episode 13 - The Chunin Exams, Concluded!.mkv',               '487.8 MiB',  2, 'episode'],

  // ================= SEASON 3 — KONOHA CRUSH =================
  ['e14', 'Episode 14 - Hokage vs Hokage!',                        'Naruto Kai/Naruto - Episode 14 - Hokage vs Hokage!.mkv',                          '689.6 MiB',  3, 'episode'],
  ['e15', "Episode 15 - Naruto's Ninja Handbook!",                 "Naruto Kai/Naruto - Episode 15 - Naruto's Ninja Handbook!.mkv",                   '556.6 MiB',  3, 'episode'],
  ['e16', 'Episode 16 - Eulogy',                                   'Naruto Kai/Naruto - Episode 16 - Eulogy.mkv',                                     '531.6 MiB',  3, 'episode'],

  // ================= SEASON 4 — SEARCH FOR TSUNADE =================
  ['e17', "Episode 17 - Itachi's Power!",                          "Naruto Kai/Naruto - Episode 17 - Itachi's Power!.mkv",                            '528.7 MiB',  4, 'episode'],
  ['e18', "Episode 18 - Tsunade's Decision!",                      "Naruto Kai/Naruto - Episode 18 - Tsunade's Decision!.mkv",                        '421.9 MiB',  4, 'episode'],
  ['e19', 'Episode 19 - The Successor',                            'Naruto Kai/Naruto - Episode 19 - The Successor.mkv',                              '513.2 MiB',  4, 'episode'],

  // ================= SEASON 5 — SASUKE RETRIEVAL =================
  ['e20', 'Episode 20 - Naruto vs Sasuke!',                        'Naruto Kai/Naruto - Episode 20 - Naruto vs Sasuke!.mkv',                          '406.3 MiB',  5, 'episode'],
  ['e21', 'Episode 21 - Pursuit',                                  'Naruto Kai/Naruto - Episode 21 - Pursuit.mkv',                                    '648.8 MiB',  5, 'episode'],
  ['e22', 'Episode 22 - Comrades',                                 'Naruto Kai/Naruto - Episode 22 - Comrades.mkv',                                   '417.7 MiB',  5, 'episode'],
  ['e23', 'Episode 23 - Predicament',                              'Naruto Kai/Naruto - Episode 23 - Predicament.mkv',                                '478.3 MiB',  5, 'episode'],
  ['e24', 'Episode 24 - Unorthodox',                               'Naruto Kai/Naruto - Episode 24 - Unorthodox.mkv',                                 '622.9 MiB',  5, 'episode'],
  ['e25', 'Episode 25 - Itachi And Sasuke, Brothers',              'Naruto Kai/Naruto - Episode 25 - Itachi And Sasuke, Brothers.mkv',                '390.3 MiB',  5, 'episode'],
  ['e26', 'Episode 26 - Awakening',                                'Naruto Kai/Naruto - Episode 26 - Awakening.mkv',                                  '542.2 MiB',  5, 'episode'],
  ['e27a','Episode 27 A - Day of Departure!',                      'Naruto Kai/Naruto - Episode 27 A - Day of Departure!.mkv',                        '151.3 MiB',  5, 'episode'],
  ['e27b','Episode 27 B - Kakashi Chronicles',                     'Naruto Kai/Naruto - Episode 27 B - Kakashi Chronicles.mkv',                       '484.1 MiB',  5, 'episode'],

  // ================= SEASON 6 — KAZEKAGE RESCUE =================
  ['e28', "Episode 28 - Naruto's Homecoming!",                     "Naruto Kai/Naruto - Episode 28 - Naruto's Homecoming!.mkv",                       '1.2 GiB',    6, 'episode'],
  ['e29', 'Episode 29 - Kakashi vs Itachi!',                       'Naruto Kai/Naruto - Episode 29 - Kakashi vs Itachi!.mkv',                         '847.4 MiB',  6, 'episode'],
  ['e30', 'Episode 30 - Puppet Masters',                           'Naruto Kai/Naruto - Episode 30 - Puppet Masters.mkv',                             '994.9 MiB',  6, 'episode'],
  ['e31', 'Episode 31 - Entrusted Feelings!',                      'Naruto Kai/Naruto - Episode 31 - Entrusted Feelings!.mkv',                        '818.0 MiB',  6, 'episode'],
  ['e32', 'Episode 32 - The Road to Sasuke!',                      'Naruto Kai/Naruto - Episode 32 - The Road to Sasuke!.mkv',                        '648.2 MiB',  6, 'episode'],
  ['e33', 'Episode 33 - Top-Secret Mission!',                      'Naruto Kai/Naruto - Episode 33 - Top-Secret Mission!.mkv',                        '1.5 GiB',    6, 'episode'],

  // ================= SEASON 7 — TENCHI BRIDGE =================
  ['e34', 'Episode 34 - The Reunion!',                             'Naruto Kai/Naruto - Episode 34 - The Reunion!.mkv',                               '777.0 MiB',  7, 'episode'],
  ['e35', 'Episode 35 - The New Duo!',                             'Naruto Kai/Naruto - Episode 35 - The New Duo!.mkv',                               '804.4 MiB',  7, 'episode'],
  ['e36', 'Episode 36 - Team 10',                                  'Naruto Kai/Naruto - Episode 36 - Team 10.mkv',                                    '1.0 GiB',    7, 'episode'],
  ['e37', "Episode 37 - Shikamaru's Battle!",                      "Naruto Kai/Naruto - Episode 37 - Shikamaru's Battle!.mkv",                        '1007.2 MiB', 7, 'episode'],
  ['e38', 'Episode 38 - The Fruits of Training!',                  'Naruto Kai/Naruto - Episode 38 - The Fruits of Training!.mkv',                    '886.9 MiB',  7, 'episode'],

  // ================= SEASON 8 — AKATSUKI SUPPRESSION =================
  ['e39', 'Episode 39 - On the Move',                              'Naruto Kai/Naruto - Episode 39 - On the Move.mkv',                                '672.7 MiB',  8, 'episode'],
  ['e40', 'Episode 40 - The Ultimate Art!',                        'Naruto Kai/Naruto - Episode 40 - The Ultimate Art!.mkv',                          '745.2 MiB',  8, 'episode'],
  ['e41', "Episode 41 - Jiraiya's Choice!",                        "Naruto Kai/Naruto - Episode 41 - Jiraiya's Choice!.mkv",                          '990.9 MiB',  8, 'episode'],
  ['e42', 'Episode 42 - The Secret of the Mangekyo!',              'Naruto Kai/Naruto - Episode 42 - The Secret of the Mangekyo!.mkv',                '659.0 MiB',  8, 'episode'],
  ['e43', 'Episode 43 - The One Who Knows the Truth',              'Naruto Kai/Naruto - Episode 43 - The One Who Knows the Truth.mkv',                '982.6 MiB',  8, 'episode'],
  ['e44', 'Episode 44 - Inheriting Sage Jutsu!',                   'Naruto Kai/Naruto - Episode 44 - Inheriting Sage Jutsu!.mkv',                     '626.7 MiB',  8, 'episode'],
  ['e45', 'Episode 45 - Leaf Battlefield!',                        'Naruto Kai/Naruto - Episode 45 - Leaf Battlefield!.mkv',                          '1020.7 MiB', 8, 'episode'],

  // ================= SEASON 9 — PAIN'S ASSAULT =================
  ['e46', 'Episode 46 - Naruto Returns!',                          'Naruto Kai/Naruto - Episode 46 - Naruto Returns!.mkv',                            '1.2 GiB',    9, 'episode'],
  ['e47', 'Episode 47 - The Broken Seal!',                         'Naruto Kai/Naruto - Episode 47 - The Broken Seal!.mkv',                           '1.1 GiB',    9, 'episode'],
  ['e48', 'Episode 48 - The Cheering Village!',                    'Naruto Kai/Naruto - Episode 48 - The Cheering Village!.mp4',                      '1.1 GiB',    9, 'episode'],

  // ================= SEASON 10 — FIVE KAGE SUMMIT =================
  ['e49', 'Episode 49 - The Five Kage Summit Commences!',          'Naruto Kai/Naruto - Episode 49 - The Five Kage Summit Commences!.mkv',            '964.0 MiB',  10, 'episode'],
  ['e50', 'Episode 50 - Water Prison Death Match',                 'Naruto Kai/Naruto - Episode 50 - Water Prison Death Match.mkv',                   '1.1 GiB',    10, 'episode'],
  ['e51', 'Episode 51 - Sasuke vs Danzo!',                         'Naruto Kai/Naruto - Episode 51 - Sasuke vs Danzo!.mp4',                           '1.1 GiB',    10, 'episode'],
  ['e52', 'Episode 52 - Team 7, Together Again!',                  'Naruto Kai/Naruto - Episode 52 - Team 7, Together Again!.mkv',                    '1000.1 MiB', 10, 'episode'],

  // ================= SEASON 11 — COUNTDOWN TO WAR =================
  ['e53', "Episode 53 - Naruto's Birth",                           "Naruto Kai/Naruto - Episode 53 - Naruto's Birth.mp4",                             '1014.7 MiB', 11, 'episode'],
  ['e54', 'Episode 54 - Bridge To Peace',                          'Naruto Kai/Naruto - Episode 54 - Bridge To Peace.mkv',                            '947.0 MiB',  11, 'episode'],
  ['e55', 'Episode 55 - The Great War Begins',                     'Naruto Kai/Naruto - Episode 55 - The Great War Begins.mkv',                       '1.3 GiB',    11, 'episode'],
  ['e56', "Episode 56 - Team Asuma's Reunion!",                    "Naruto Kai/Naruto - Episode 56 - Team Asuma's Reunion!.mkv",                      '388.7 MiB',  11, 'episode'],

  // ================= SEASON 12 — FOURTH SHINOBI WORLD WAR =================
  ['e57', 'Episode 57 - Naruto Heads to the Battlefield!',         'Naruto Kai/Naruto - Episode 57 - Naruto Heads to the Battlefield!.mkv',           '530.5 MiB',  12, 'episode'],
  ['e58', 'Episode 58 - Naruto vs Itachi!',                        'Naruto Kai/Naruto - Episode 58 - Naruto vs Itachi!.mkv',                          '1.5 GiB',    12, 'episode'],
  ['e59', 'Episode 59 - The Five Kage, Assembled!',                'Naruto Kai/Naruto - Episode 59 - The Five Kage, Assembled!.mkv',                  '1.0 GiB',    12, 'episode'],
  ['e60', 'Episode 60 - Kurama!',                                  'Naruto Kai/Naruto - Episode 60 - Kurama!.mp4',                                    '1021.0 MiB', 12, 'episode'],
  ['e61', 'Episode 61 - Brothers, United!',                        'Naruto Kai/Naruto - Episode 61 - Brothers, United!.mp4',                          '1.2 GiB',    12, 'episode'],
  ['e62', 'Episode 62 - The Crack',                                'Naruto Kai/Naruto - Episode 62 - The Crack.mkv',                                  '1.1 GiB',    12, 'episode'],
  ['e63', 'Episode 63 - World of Dreams',                          'Naruto Kai/Naruto - Episode 63 - World of Dreams.mkv',                            '482.0 MiB',  12, 'episode'],
  ['e64', 'Episode 64 - Ten Tails',                                'Naruto Kai/Naruto - Episode 64 - Ten Tails.mkv',                                  '809.2 MiB',  12, 'episode'],
  ['e65', 'Episode 65 - Hashirama and Madara',                     'Naruto Kai/Naruto - Episode 65 - Hashirama and Madara.mkv',                       '852.2 MiB',  12, 'episode'],
  ['e66', 'Episode 66 - A New Three-Way Deadlock!',                'Naruto Kai/Naruto - Episode 66 - A New Three-Way Deadlock!.mkv',                  '964.8 MiB',  12, 'episode'],
  ['e67', 'Episode 67 - Breakthrough!',                            'Naruto Kai/Naruto - Episode 67 - Breakthrough!.mkv',                              '537.3 MiB',  12, 'episode'],
  ['e68', "Episode 68 - Naruto's Path",                            "Naruto Kai/Naruto - Episode 68 - Naruto's Path.mkv",                              '887.3 MiB',  12, 'episode'],
  ['e69', 'Episode 69 - The Start of a Crimson Spring',            'Naruto Kai/Naruto - Episode 69 - The Start of a Crimson Spring.mkv',              '788.2 MiB',  12, 'episode'],
  ['e70', 'Episode 70 - Naruto and the Sage of Six Paths',         'Naruto Kai/Naruto - Episode 70 - Naruto and the Sage of Six Paths.mkv',           '989.8 MiB',  12, 'episode'],
  ['e71', 'Episode 71 - I Love You',                               'Naruto Kai/Naruto - Episode 71 - I Love You.mkv',                                 '1.1 GiB',    12, 'episode'],
  ['e72', 'Episode 72 - Naruto Uzumaki!',                          'Naruto Kai/Naruto - Episode 72 - Naruto Uzumaki!.mkv',                            '1.2 GiB',    12, 'episode'],

  // ================= SEASON 0 — SPECIALS =================
  ['sp1', 'SPECIAL - Itachi Shinden Part 1 - Book of Bright Light', 'Naruto Kai/Shin den 1 - Itachi Shinden - Book of Light and Darkness/Itachi Shinden Part 1 - Book of Bright Light.mkv', '618.8 MiB', 0, 'special'],
  ['sp2', 'SPECIAL - Itachi Shinden Part 2 - Book of Dark Night',   'Naruto Kai/Shin den 1 - Itachi Shinden - Book of Light and Darkness/Itachi Shinden Part 2 - Book of Dark Night.mkv',   '567.0 MiB', 0, 'special'],
  ['sp3', 'SPECIAL - Movie 7: The Last (2014) [BD 1080p]',          'Naruto Kai/Naruto the Movie 7 - The Last (2014) [BD_1080p Hi10P 5.1 AAC].mkv',                                          '5.0 GiB',   0, 'special'],
  ['sp4', "SPECIAL - Omake: Kakashi Sensei's Real Face!",           "Naruto Kai/Omake - Kakashi Sensei's Real Face!.mp4",                                                                     '24.0 MiB',  0, 'special'],
  ['sp5', 'SPECIAL - Scroll of Wind: The Real True Face...!',       'Naruto Kai/Scroll of Wind - The Real True Face...!.mp4',                                                                 '81.6 MiB',  0, 'special']
];

// =============================================================
//  BUILD EPISODES
// =============================================================
const EPISODES = [];
const seasonCounters = {};

RAW.forEach(([shortId, title, filename, size, seasonNum, kind], idx) => {
  if (!seasonCounters[seasonNum]) seasonCounters[seasonNum] = 0;
  seasonCounters[seasonNum] += 1;
  const epNum = seasonCounters[seasonNum];

  const seasonLabel = SEASON_NAMES[seasonNum] || `Season ${seasonNum}`;
  const shortTitle = (title.split(' - ').slice(1).join(' - ') || title).slice(0, 40);
  const thumbnail = makeThumbnail(seasonNum, epNum, shortTitle);

  EPISODES.push({
    id: `${SERIES_ID}:${seasonNum}:${epNum}`,
    shortId,
    season: seasonNum,
    episode: epNum,
    title,
    rawTitle: title,
    filename,
    size,
    seasonLabel,
    kind,
    order: idx,
    thumbnail,
    description:
      `[${seasonLabel}] ${title}\n\n` +
      `File: ${filename.split('/').pop()}\n` +
      `Size: ${size}\n` +
      `Type: ${kind}`
  });
});

const EPISODES_BY_ID = Object.fromEntries(EPISODES.map(e => [e.id, e]));

function findEpisode(fullId) {
  return EPISODES_BY_ID[fullId] || null;
}

// =============================================================
//  CATALOG — 1 series utama
// =============================================================
function getCatalogItems() {
  return [{
    id: SERIES_ID,
    type: 'series',
    name: SERIES_NAME,
    poster: SERIES_POSTER,
    posterShape: 'poster',
    description:
      'Naruto Kai — fan-edit yang memadatkan Naruto menjadi 72 episode tanpa filler, ' +
      'dibagi per arc.',
    releaseInfo: '2002–2017',
    imdbRating: '8.4',
    genres: ['Animation', 'Action', 'Adventure']
  }];
}

// =============================================================
//  META — rich detail (background, logo, cast, trailer, rating)
// =============================================================
function getMeta(fullId) {
  if (fullId !== SERIES_ID) return null;

  const videos = EPISODES.map(e => ({
    id: e.id,
    title: e.title,
    season: e.season,
    episode: e.episode,
    thumbnail: e.thumbnail,
    overview: e.description,
    released: new Date(Date.UTC(2002, 9, 3)).toISOString(),
    runtime: '25 min'
  }));

  return {
    id: SERIES_ID,
    type: 'series',
    name: SERIES_NAME,
    poster: SERIES_POSTER,
    posterShape: 'poster',
    background: SERIES_BG,
    logo: SERIES_LOGO,
    description:
      'Naruto Kai — Fan-edit Naruto menjadi 72 episode sinematik tanpa filler, ' +
      'dibagi per arc sesuai alur cerita.\n\n' +
      'Naruto Uzumaki, ninja remaja nakal, berjuang mencari pengakuan dan ' +
      'bermimpi menjadi Hokage, pemimpin desa dan ninja terkuat.\n\n' +
      'Season 1–12: Main Series (arc-based)\n' +
      'Specials: Itachi Shinden, Movie 7, Omake, Scroll of Wind',
    releaseInfo: '2002–2017',
    runtime: '25 min',
    imdbRating: '8.4',
    genres: ['Animation', 'Action', 'Adventure'],
    cast: CAST,
    director: DIRECTORS,
    writer: WRITERS,
    trailers: TRAILERS,
    videos
  };
}

module.exports = {
  EPISODES,
  SEASON_NAMES,
  SEASON_COLORS,
  CAST,
  TRAILERS,
  SERIES_POSTER,
  SERIES_BG,
  SERIES_LOGO,
  SERIES_ID,
  findEpisode,
  getCatalogItems,
  getMeta
};
