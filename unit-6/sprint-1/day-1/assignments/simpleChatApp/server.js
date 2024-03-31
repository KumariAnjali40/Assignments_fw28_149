const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', (username) => {
        socket.username = username;
        io.emit('chat message', { user: 'System', message: `${username} has joined the chat` });
    });

    socket.on('chat message', (message) => {
        io.emit('chat message', { user: socket.username, message });
    });

    socket.on('disconnect', () => {
        io.emit('chat message', { user: 'System', message: `${socket.username} has left the chat` });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
