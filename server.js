import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const f = fileURLToPath(import.meta.url);
const d = path.dirname(f);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(d, 'public')));

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('PlayMate Social Hub on ' + PORT);
});
