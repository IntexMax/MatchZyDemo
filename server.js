import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulează __dirname pentru ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inițializare aplicație
const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișiere statice dintr-un director public (dacă ai front-end)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de bază
app.get('/', (req, res) => {
  res.send('Serverul funcționează perfect pe Render! 🚀');
});

// Pornire server
app.listen(PORT, () => {
  console.log(`✅ Serverul rulează pe http://localhost:${PORT}`);
});
