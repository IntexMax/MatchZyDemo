const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

app.post('/upload', (req, res) => {
  const filename = req.headers['matchzy-filename'] || 'demo.zip';
  const filepath = path.join(UPLOADS_DIR, filename);

  const writeStream = fs.createWriteStream(filepath);
  req.pipe(writeStream);

  req.on('end', () => {
    console.log(`✅ Demo primit: ${filename}`);
    res.status(200).send('Demo upload reușit!');
  });

  req.on('error', err => {
    console.error('❌ Eroare upload:', err);
    res.status(500).send('Upload eșuat');
  });
});

app.get('/', (req, res) => {
  res.send('Serverul de upload funcționează ✅');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔌 Server pornit pe portul ${PORT}`));
