const express = require('express');
const path = require('path');

const app = express();

app.use(express.json()); //to support body data
app.use(express.urlencoded()); //to support forms data
const PORT = process.env.PORT || 3000;
const users = [];

// Раздача статических файлов из директории 'dist'
app.use(express.static(path.join(__dirname, 'client/dist')));

// Фолбек на index.html для SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  const user = users.find(
    (user) => user.login === login && user.password === password,
  );
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'wrong password or login' });
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
