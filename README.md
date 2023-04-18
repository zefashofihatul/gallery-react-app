# Gallery Form React App

Project ini merupakan pengimplementasian react project sederhana dengan menggunakan template `create react app` dan best practice dalam fetching data dari open API `https://unsplash.com`.

<br />

## Daftar API yang digunakan (Consume)

### Unsplash

#### `GET /photos/random`

Untuk mendapatkan gambar random. Dokumentasi lengkap [Doc Unsplash](https://unsplash.com/documentation#list-photos)

<br />

## Available Scripts

Terdapat beberapa cara dalam menjalankan aplikasi ini, yang pertama dijalankan dengan melakukan instalasi terlebih dahulu dan kedua dijalankan melalui static folder. Keterangan lebih lanjut dapat dilihat di keterangan berikut ini :

<br />

### Menjalankan project dengan instalasi

### `npm install`

Pertama, install terlebih dahulu depedency project yang dibutuhkan dengan `npm install`. Depedency utamanya adalah React JS.

### `npm run start`

Selanjutnya anda dapat langsung menjalankan project ini dengan menggunakan perintah `npm run start`

<br />

### Menjalankan project pada folder build dengan static server

### `npm install -g serve`

Install terlebih dahulu package pendukung pada local system anda,

### `serve -s build`

Pastikan pointer folder anda terdapat pada main folder. Dan jalankan perintah `serve -s build` untuk menjalankan server static anda.
