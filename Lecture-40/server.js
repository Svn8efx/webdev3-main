const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const port = 3000

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("socket Connected:", socket.id)

    socket.on("message", (msg) => {
        // socket.emit("message", msg) // sent to the same user
        // io.emit("message", msg) // sent to all users
        socket.broadcast.emit("message", msg)
        // io.to("1A1GTOwcOw_nVcCZAAAC").emit("message", msg) // sent to a particular user with their id
    })

    socket.on("disconnect", () => {
        console.log("socket disconnected", socket.id)
    })
})

server.listen(port, () => {
    console.log(`connected to server on port ${port}`)
})
