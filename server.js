import express from 'express';
import multer from 'multer';
import path from 'path';

// Creează aplicația Express
const app = express();

// Configurează Multer pentru upload
const upload = multer({
  dest: 'uploads/', // Folderul unde fișierele vor fi stocate
});

// Servește fișiere statice (de exemplu, index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta pentru upload
app.post('/upload', upload.single('demo'), (req, res) => {
  console.log(req.file); // Afișează fișierul în consolă
  res.send('File uploaded successfully!');
});

// Setează portul
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
