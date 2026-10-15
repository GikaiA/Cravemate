import express from 'express';
import { query } from './db.js';

const app = express();

app.get('/api/moods/:mood', async (req, res) => {
  const { rows } = await query(
    'select category from mood_categories where mood = $1',
    [req.params.mood]
  );
  res.json(rows.map((r) => r.category));
});

app.listen(3001, () => console.log('API on http://localhost:3001'));
