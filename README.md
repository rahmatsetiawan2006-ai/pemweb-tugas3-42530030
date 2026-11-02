# Kedai Senja

Website Kedai Senja merupakan aplikasi web sederhana bertema kedai kopi yang dibuat untuk memenuhi tugas mata kuliah Pemrograman Web.

Aplikasi ini dikembangkan menggunakan Node.js, Express.js, EJS, dan MySQL. Website ini menyediakan fitur pengelolaan data menu makanan dan minuman menggunakan operasi CRUD (Create, Read, Update, Delete).

## Fitur Aplikasi

- Read: Menampilkan daftar menu dan detail menu.
- Create: Menambahkan menu baru.
- Update: Mengubah informasi menu.
- Delete: Menghapus menu.
- Filter Kategori: Memfilter menu berdasarkan kategori makanan atau minuman.

## Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- MySQL
- mysql2
- dotenv
- HTML
- CSS
- JavaScript

## Instalasi dan Menjalankan Aplikasi

1. Clone repository:

*terminal*
git clone https://github.com/rahmatsetiawan2006-ai/pemweb-tugas3-42530030.git


2. Masuk ke folder proyek:

*terminal*
cd kedai-senja

3. Instal dependencies:

*terminal*
npm install
```

4. Buat database MySQL menggunakan file `database.sql`.

5. Salin file `.env.example` menjadi `.env`, kemudian sesuaikan konfigurasi database:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=kedai_senja
PORT=3000
```

6. Jalankan aplikasi:

node app run

7. Buka browser:

http://localhost:3000

## Database

Aplikasi menggunakan database MySQL dengan nama `kedai_senja` dan tabel `menu` untuk menyimpan data makanan dan minuman.

## Keamanan dan Pengolahan Data

- Koneksi database menggunakan MySQL Connection Pool dari `mysql2/promise`.
- Query SQL menggunakan prepared statements dengan parameter `?`.
- Konfigurasi database disimpan dalam file `.env`.
- Operasi tambah, edit, dan hapus menggunakan metode POST dan redirect setelah proses berhasil.

## Identitas

- Nama: Rahmat Zaki Setiawan
- NIM: 42530030
- Mata Kuliah: Pemrograman Web
- Proyek: Kedai Senja

## Video Demonstrasi

Link YouTube: [Masukkan URL Video YouTube]

## Repository

Link GitHub: (https://github.com/rahmatsetiawan2006-ai/pemweb-tugas3-42530030.git)
"# pemweb-tugas3-42530030" 
