const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const storesRouter = require('./routes/stores');

const app = express();
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/stores', storesRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
