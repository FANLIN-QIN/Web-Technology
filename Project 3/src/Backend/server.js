//server.js
var express = require('express');
const path = require('path');
const cors = require('cors');
var curmovie = require('./routes/curmovie');
var popmovie = require('./routes/popmovie');
var tprmovie = require('./routes/tprmovie');
var trendmovie = require('./routes/trendmovie');
var poptv = require('./routes/poptv');
var tprtv = require('./routes/tprtv');
var trendtv = require('./routes/trendtv');
var mvedio = require('./routes/mvedio');
var mdetail = require('./routes/mdetail');
var mcast = require('./routes/mcast');
var castdetail = require('./routes/castdetail');
var castex = require('./routes/castex');
var mreview = require('./routes/mreview');
var mrecom = require('./routes/mrecom');
var msimilar = require('./routes/msimilar');
var search = require('./routes/search');
var tvvedio = require('./routes/tvvedio');
var tvdetail = require('./routes/tvdetail');
var tvcast = require('./routes/tvcast');
var tvreview = require('./routes/tvreview');
var tvrecom = require('./routes/tvrecom');
var tvsimilar = require('./routes/tvsimilar');

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname,'dist/project1')));



app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})



app.use('/apis/curmovie',curmovie);

app.use('/apis/popmovie',popmovie);

app.use('/apis/tprmovie',tprmovie);

app.use('/apis/trendmovie',trendmovie);

app.use('/apis/poptv',poptv);

app.use('/apis/tprtv',tprtv);

app.use('/apis/trendtv',trendtv);

app.use('/apis/mvedio',mvedio);

app.use('/apis/mdetail',mdetail);

app.use('/apis/mcast',mcast);

app.use('/apis/castdetail',castdetail);

app.use('/apis/castex',castex);

app.use('/apis/mreview',mreview);

app.use('/apis/mrecom',mrecom);

app.use('/apis/msimilar',msimilar);

app.use('/apis/search',search);

app.use('/apis/tvvedio',tvvedio);

app.use('/apis/tvdetail',tvdetail);

app.use('/apis/tvcast',tvcast);

app.use('/apis/tvreview',tvreview);

app.use('/apis/tvrecom',tvrecom);

app.use('/apis/tvsimilar',tvsimilar);

app.use('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/project1/index.html'))
})


var server = app.listen(8080, function() {
    console.log("Backend Application listening at https://localhost:8080")
})

module.exports = app;