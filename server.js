const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(fileUpload());

app.post('/upload', async (req, res) => {
  const {name, data} = req.files.pic;
  if (name && data) {
      await sequelize.create({name: name, img: data}).into('img');
      res.sendStatus(200);
  } else {
      res.sendStatus(400);
  }
})

app.get('/img/:id', async (req, res) => {
  const id = req.params.id;
  const img = await sequelize('img').where({id: id}).first();
  if (img) {
      const contentType = await FileType.fromBuffer(img.img); // get the mimetype of the buffer (in this case its gonna be jpg but can be png or w/e)
      res.type(contentType.mime); // not always needed most modern browsers including chrome will understand it is an img without this
      res.end(img.img);
  } else {
      res.end('No Img with that Id!');
  }
})



// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
