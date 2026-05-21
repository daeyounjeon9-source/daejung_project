
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    ai: true,
    server: 'running'
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
