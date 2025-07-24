const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Backend de CarbonNet funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
