const path = require("path")
const express = require("express")
const app =express()
const socketIO = require("socket.io")
const http = require("http")

var server = http.createServer(app)
var io = socketIO(server)

const publicPath = path.join(__dirname, '../public')

io.on('connection', (socket)=>{
    console.log('new user connected')
    
    socket.on('disconnect', ()=>{
                    console.log("Disconnected from USER")
                })
    
})


app.use(express.static(publicPath))

const port = process.env.PORT

server.listen(port, process.env.IP, ()=>{
    console.log(`Server INITIALED on ${port}`)
})