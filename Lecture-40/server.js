const express = require("express")
const WebSocket = require("socket.io")
const http = require("http")
const { Socket } = require("net")
const app = express()
const port = 3000

const server = http.createServer(app)

const io = new WebSocket.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection",(Socket)=>{
    console.log("socket Connected:",Socket.id)

    socket.on("message",(msg)=>{
        //console.log(msg)
        //io.emit("message",msg)
        socket.broadcast.emit("message",msg)
    })

    Socket.on("disconnect",()=>{
        console.log("socket disconnected",Socket.id)
    })

})

server.listen(port, () => {
    console.log("connected to server")
})