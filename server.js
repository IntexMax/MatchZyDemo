const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Crearea directorului uploads dacă nu există
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configurarea stocării fișierelor
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorul unde vor fi stocate fișierele
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Numele fișierului cu timestamp
  }
});

// Inițializarea multer cu configurația de mai sus
const upload = multer({ storage: storage });

// Route pentru încărcarea unui singur fișier
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.send({ message: 'Fișierul a fost încărcat cu succes!', file: req.file });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Eroare la încărcarea fișierului.' });
  }
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
