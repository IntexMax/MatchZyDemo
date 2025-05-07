// server.js

import express from 'express'; // Importă Express
import multer from 'multer';   // Importă Multer
import path from 'path';       // Importă Path (pentru gestionarea căilor de fișiere)

// Creează aplicația Express
const app = express();

// Configurare Multer pentru a salva fișierele încărcate
const upload = multer({
  dest: 'uploads/', // Folderul în care fișierele vor fi stocate temporar
});

// Rute de încărcare
app.post('/upload', upload.single('demo'), (req, res) => {
  // Printează fișierul încărcat în consolă
  console.log(req.file);

  // Răspunde cu un mesaj de succes
  res.send('File uploaded successfully!');
});

// Setează portul pe care va asculta serverul
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
