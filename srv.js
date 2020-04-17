const fs = require('fs');
const path = require('path');
var express = require('express');
var app = express();
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const SocketApi = require('./server/db/api/socket');

require('./server/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

let upload = path.join('./build', 'upload');
if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
}

require('./server/auth/passport');

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

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});

// SocketApi
io.on('connection', (socket) => {
    const socketId = socket.id
    socket.on('users:connect', function (data) {
        SocketApi.usersConnect(socket, data, socketId)
    })
    socket.on('message:add', function (data) {
        SocketApi.messageAdd(socket, data);
    })
    socket.on('message:history', function (data) {
        SocketApi.messageHistory(socket, data);
    })
    socket.on('disconnect', function (data) {
        SocketApi.usersDisconnect(socket, socketId);
    })
})