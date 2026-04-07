import express from 'express';

const app = express();
app.use(express.json());

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

let users = [];

app.post('/send', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
  }

  const newUser = new User(username, password);

  users.push([newUser]);

  res.json(users);
});

app.get('/recive', (req, res) => {
  res.json(users);
});

app.listen(15000, () => {
  console.log('Server running on port 15000');
});