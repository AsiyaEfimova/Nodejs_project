var express = require('express');

var app = express();

app.use(express.static(__dirname + "/build"));

// router
app.use('/', require('./server/routes/index'));

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