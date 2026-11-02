const db = require('../config/db');



const tampilkanMenu = async (req, res) => {
    try {
        const kategori = req.query.kategori;

        const limit = 4;
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const offset = (page - 1) * limit;

        let whereSql = '';
        let params = [];

        if (kategori) {
            whereSql = ' WHERE kategori = ?';
            params.push(kategori);
        }

        // Menghitung jumlah seluruh data
        const [jumlahData] = await db.execute(
            'SELECT COUNT(*) AS total FROM menu' + whereSql,
            params
        );

        const total = jumlahData[0].total;
        const totalHalaman = Math.ceil(total / limit);

        // Mengambil data sesuai halaman
        const [hasilMenu] = await db.execute(
            'SELECT * FROM menu' + whereSql +
            ' ORDER BY id ASC LIMIT ? OFFSET ?',
            [...params, limit, offset]
        );

res.render('index', {
    judul: 'Daftar Menu Kedai Senja',
    menu: hasilMenu,
    kategori: kategori,
    halaman: page,
    totalHalaman: totalHalaman
});

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil data menu');
    }
};


const detailMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).send('ID menu tidak valid');
        }

        const [hasil] = await db.execute(
            'SELECT * FROM menu WHERE id = ?',
            [id]
        );

        if (hasil.length === 0) {
            return res.status(404).send('Menu tidak ditemukan');
        }

        res.render('detail', {
            judul: 'Detail Menu',
            menu: hasil[0]
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal mengambil detail menu');
    }
};

const formTambahMenu = (req, res) => {
    res.render('tambah', {
        judul: 'Tambah Menu Kedai Senja'
    });
};

const tambahMenu = async (req, res) => {
    try {
        const { nama, kategori, harga, deskripsi, foto } = req.body;

        if (!nama || !kategori || !harga) {
            return res.status(400).send('Nama, kategori, dan harga wajib diisi');
        }

        if (!['makanan', 'minuman'].includes(kategori)) {
            return res.status(400).send('Kategori tidak valid');
        }

        const hargaMenu = Number(harga);

        if (!Number.isInteger(hargaMenu) || hargaMenu <= 0) {
            return res.status(400).send('Harga harus berupa angka positif');
        }

        await db.execute(
            `INSERT INTO menu (nama, kategori, harga, deskripsi, foto)
            VALUES (?, ?, ?, ?, ?)`,
            [nama, kategori, hargaMenu, deskripsi || null, foto || null]
        );

        res.redirect('/');

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menambahkan menu');
    }
};

const hapusMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).send('ID menu tidak valid');
        }

        const [hasil] = await db.execute(
            'DELETE FROM menu WHERE id = ?',
            [id]
        );

        if (hasil.affectedRows === 0) {
            return res.status(404).send('Menu tidak ditemukan');
        }

        res.redirect('/');

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus menu');
    }
};

const formEditMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).send('ID menu tidak valid');
        }

        const [hasil] = await db.execute(
            'SELECT * FROM menu WHERE id = ?',
            [id]
        );

        if (hasil.length === 0) {
            return res.status(404).send('Menu tidak ditemukan');
        }

        res.render('edit', {
            judul: 'Edit Menu',
            menu: hasil[0]
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal membuka formulir edit');
    }
};

const updateMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama, kategori, harga, deskripsi, foto } = req.body;

        if (isNaN(id)) {
            return res.status(400).send('ID menu tidak valid');
        }

        if (!nama || !kategori || !harga) {
            return res.status(400).send('Nama, kategori, dan harga wajib diisi');
        }

        if (!['makanan', 'minuman'].includes(kategori)) {
            return res.status(400).send('Kategori tidak valid');
        }

        const hargaMenu = Number(harga);

        if (!Number.isInteger(hargaMenu) || hargaMenu <= 0) {
            return res.status(400).send('Harga harus berupa angka positif');
        }

        const [hasil] = await db.execute(
            `UPDATE menu
            SET nama = ?, kategori = ?, harga = ?,
                deskripsi = ?, foto = ?
            WHERE id = ?`,
            [nama, kategori, hargaMenu, deskripsi || null, foto || null, id]
        );

        if (hasil.affectedRows === 0) {
            return res.status(404).send('Menu tidak ditemukan atau tidak ada perubahan');
        }

        res.redirect('/');

    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui menu');
    }
};


module.exports = {
    tampilkanMenu,
    detailMenu,
    formTambahMenu,
    tambahMenu,
    hapusMenu,
    formEditMenu,
    updateMenu
};