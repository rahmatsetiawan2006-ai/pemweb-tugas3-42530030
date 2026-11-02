menuCREATE DATABASE IF NOT EXISTS kedai_senja;
USE kedai_senja;

DROP TABLE IF EXISTS menu;
CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  kategori ENUM('makanan','minuman') NOT NULL,
  harga INT NOT NULL,
  deskripsi TEXT,
  foto VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO menu (nama, kategori, harga, deskripsi, foto) VALUES
('Kopi Susu Senja', 'minuman', 18000, 'Kopi susu dengan perpaduan espresso, susu segar, dan gula aren.', 'https://placehold.co/400x250?text=Kopi+Susu'),
('Es Cokelat', 'minuman', 20000, 'Minuman cokelat dingin dengan rasa manis dan creamy.', 'https://placehold.co/400x250?text=Es+Cokelat'),
('Nasi Goreng Spesial', 'makanan', 25000, 'Nasi goreng dengan telur, ayam, dan sayuran.', 'https://placehold.co/400x250?text=Nasi+Goreng'),
('Kentang Goreng', 'makanan', 15000, 'Kentang goreng renyah yang disajikan dengan saus.', 'https://placehold.co/400x250?text=Kentang+Goreng');