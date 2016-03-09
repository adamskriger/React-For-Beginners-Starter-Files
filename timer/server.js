const express = require('express');
const logger = require('morgan');
const app = express();
/* app setting */
var port = process.env.PORT || 3000;
var server = app.listen(port);

var sportline = require('sportline');
var timer = new sportline.Stopwatch();

app.use(express.static('./public/'));
// log
app.use(logger('dev'));
/*Views*/
app.set('views', './views');
app.set('view engine', 'ejs');

/*Routes*/
app.get('/', (req, res)=>{
  res.render('pages/index')
})
