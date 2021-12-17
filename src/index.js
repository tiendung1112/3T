const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const methodOverride = require('method-Override');
const path = require('path');
const route = require ('./routes');
const db = require('./config/db');  

//Connect to db
db.connect();

const app = express();
app.use(methodOverride('_method'));
const port = process.env.PORT ||4000;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

// HTTP loger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// route init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


