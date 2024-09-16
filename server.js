const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const secret = 'ningutrgritnrth';

const app = express(); //initialise server

app.use(express.json()); //to support body data
app.use(express.urlencoded()); //to support forms data
app.use(cors());
const PORT = process.env.PORT || 3001; //port number
const users = []; //in-memory db
const messages = ['hello', 'how are you'];

const server = http.createServer(app);

const io = socketIo(server, {
  // withCredentials: true,
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    // credentials: true,
  },
});

io.on('connection', (socket) => {
  socket.on('messages', (arg) => {
    console.log(arg);
    messages.push(arg);
    io.emit('messages', arg);
  });
  // setInterval(() => {
  //   let message = 'hello';
  //   messages.push(message);
  //   socket.emit('messages', message);
  // }, 1000);
});

// Раздача статических файлов из директории 'dist'
app.use(express.static(path.join(__dirname, 'client/dist')));

// Фолбек на index.html для SPA
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.get('/api/messages', (req, res) => {
  res.status(200).json(messages);
});

app.post('/api/me', (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, secret);
    res.status(200).json(user);
  } catch (e) {
    res.status(413).json(e);
  }
});
app.post('/api/login', (req, res) => {
  //server handle POST rewuest for logging in user
  const { login, password } = req.body;
  const user = users.find(
    //try to find user match comparing login and password with existing ones
    (user) => user.login === login && user.password === password,
  );
  if (user) {
    const token = jwt.sign(
      {
        data: user,
        exp: 1000,
      },
      secret,
    );
    res.status(200).json(token); // if user exist returns his data
  } else {
    //if not we return 401 error with message explanation
    res.status(401).json({ message: 'wrong password or login' });
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
  }
});
app.post('/api/register', (req, res) => {
  const { first_name, second_name, login, email, password, phone } = req.body;
  const newUser = {
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
  };
  if (first_name && second_name && login && email && password && phone) {
    const newId = users.push(newUser);
    newUser.id = newId;
    const token = jwt.sign(newUser, secret, { expiresIn: 1000 });
    res.status(201).json(token);
  } else {
    res.status(401).json({
      message: `payload should be as first_name,
    second_name,
    login,
    email,
    password,
    phone`,
    });
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
