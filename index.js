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