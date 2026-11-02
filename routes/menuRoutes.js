const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');

router.get('/', menuController.tampilkanMenu);

router.get('/menu/tambah', menuController.formTambahMenu);
router.post('/menu/tambah', menuController.tambahMenu);

router.post('/menu/:id/hapus', menuController.hapusMenu);

router.get('/menu/:id/edit', menuController.formEditMenu);
router.post('/menu/:id/edit', menuController.updateMenu);

router.get('/menu/:id', menuController.detailMenu);

module.exports = router;