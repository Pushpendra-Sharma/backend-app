



app.get('/user', authVerify, (req, res) => {
  res.json({ name: 'Tanay', age: 31, pincode: '560102' });
});

app.post('/login', (req, res) => {
  // read username/password from the body
  // check in array/db if the username password pair is correct
  // if yes, then send them a token { token: "abcdefghi"}
  // if not, then send them a 401 response
});
