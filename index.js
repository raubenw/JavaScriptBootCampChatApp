const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000;

server.listen(port, ()=> {
    console.log(`Server is listening on Port : ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/javascript', (req, res) => {
    res.sendFile(__dirname + '/public/javascript.html');
});

app.get('/swift', (req, res) => {
    res.sendFile(__dirname + '/public/swift.html');
});

app.get('/python', (req, res) => {
    res.sendFile(__dirname + '/public/python.html');
});

const tech = io.of('/tech');

tech.on('connection', (socket) => {

    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `New User Joinded ${data.room} room!`);
    });
    
    socket.on('message', (data) => {
        tech.in(data.room).emit('message', data.msg);
    });

    io.on('discconect', () => {
        console.log('User Disconnected')
        tech.emit('message', 'Users Disconnected');
    });

});