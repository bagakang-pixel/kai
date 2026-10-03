# 🍥 Naruto Kai — Stremio Addon

Stremio addon untuk **Naruto Kai** — fan-edit yang memadatkan Naruto menjadi **72 episode** tanpa filler.

## ✨ Struktur

| Season | Konten |
|---|---|
| **Season 1** | Main Series (72 episode) |
| **Season 2** | Itachi Shinden (2 part) |
| **Specials** | Movie 7 – The Last, Omake, Scroll of Wind |

## 🚀 Deploy ke Render.com

1. Upload semua file ini ke repo GitHub baru (misal: `naruto-kai-addon`).
2. Buka [render.com](https://render.com) → **New +** → **Blueprint**.
3. Pilih repo → klik **Apply**.
4. Tunggu deploy selesai (~2-5 menit).
5. URL: `https://<project>.onrender.com/manifest.json`

## 📺 Install di Stremio

Via configure page (recommended):
```
https://<project>.onrender.com/configure/
```

Atau manual:
```
https://<project>.onrender.com/manifest.json
```

Dengan TorBox:
```
https://<project>.onrender.com/manifest.json?torbox=API_KEY
```

## 🔑 TorBox API Key

Daftar di [torbox.app](https://torbox.app) → Settings → API → copy key.

Tanpa API key: addon tetap jalan, tapi stream hanya berisi infoHash (butuh torrent engine tambahan).

## 🗂️ File

```
.
├── package.json
├── .env.example
├── render.yaml
├── index.js
├── manifest.js
├── data.js
├── torbox.js
├── streams.js
├── public/index.html
└── README.md
```
