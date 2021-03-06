const express = require('express');
const path = require('path');

const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.info('Server started on port: ' + port);
});
