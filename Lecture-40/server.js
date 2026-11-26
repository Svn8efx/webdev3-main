
const express = require("express");
const WebSocket = require("socket.io");
const http = require("http");

const app = express();
const port = 3000;

const server = http.createServer(app);

const io = new WebSocket.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("message", (msg) => {
        console.log("Message received:", msg);

        // Send message to all other connected clients
        socket.broadcast.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected:", socket.id);
    });
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
