const express = require('express'),
      app     = express(),
      cookieParser = require('cookie-parser'),
      session = require('express-session');

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.use(cookieParser());
app.use(session({secret: '1234567890QWERTY'}));

app.get('/', (req, res) => {

  var title = 'This is the main page!',
      body = 'Werewolf sweaters are amazing things, and there are '+
    'many trends that you should be aware of. For instance ' +
    'norwegian werevoles are really hot right now, while ' +
    'swedish are rather passè';

 if(!req.xhr) {
    return res.render('index', 
      { 
        title: title,
        body: body
      });
  }

  res.json({ title: title, body: body });
});

app.get('/faq', (req, res) => {
  var title = 'FAQ',
      body = "I'm sure you have many questions, but right now I "+
    "haven't really gotten any yet. Don't be afraid to email me!"

  if(!req.xhr) {

    return res.render('index', 
      { 
        title: title,
        body: body
      });
  }

  res.json({title: title, body: body });
});

app.get('/about', (req, res) => {
  var title = 'About',
      body = "Well, this is me. I'm the handsome devil you see "+
    "in the picture below. If you are into werewolf-themed "+
    "sweaters and look like Jessica Alba, please contact me "+
    "ASAP. Or, if you're any girl really. Please, I'm so "+
    "lonely.",
      image = 'http://static1.squarespace.com/static/5075b8a6e4b01e64d21509a8/5075d3b484aeb5b6dbfe831c/5075d5c6c4aa988a6fd04338/1349899718837/popped-collar-2.jpg';

  if(!req.xhr) {
    return res.render('index', 
      { 
        title: title,
        body: body,
        image: image
      });
  }
  res.json({ title: title, body: body, image: image });
});



app.listen(3000);

