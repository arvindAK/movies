const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
require('dotenv').config();
app.use(express.static('public'));

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.get('/list', (req, res) => {
  res.render('list');
});
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`))
