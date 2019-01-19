const express = require('express')
const nunjucks = require('nunjucks');

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');

// Configure the assets folder:
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index.njk');
})

app.listen(3000, () => {
  console.log('Listening on port 3000.')
})

