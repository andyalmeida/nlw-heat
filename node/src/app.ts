import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.listen(4000, () => {
  console.log('🚀 Server is running at http://localhost:4000');
});