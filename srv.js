const path = require('path');
var express = require('express');
require('./server/db');

var app = express();
// parse application/json
app.use(express.json());

app.use(function (_, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(express.static(__dirname + "/build"));

// router
app.use('/api', require('./server/routes/index'));

app.use('*', (_req, res) => {
    const file = path.resolve(__dirname, 'build', 'index.html')
    res.sendFile(file)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    const status = err.status || 500
    res.status(err.status || 500)
    res.json({
        code: status.toString(),
        message: "Server error"
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});