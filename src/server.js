const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к БД:', err);
    return;
  }
  console.log('Подключено к MySQL');
});

// Пример маршрута
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка запроса' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
