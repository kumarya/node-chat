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
    
    socket.emit('newEmail', {
        from:'hira@gmail.com',
        text:"how r u",
        createdAt:23/22/1980
    })
    socket.emit('newMessage', {
        from:'df@gmail.com',
        text:'see u',
        createdAt:233
    })
    socket.on('createEmail', function(newEmail){
        console.log('createEmail', newEmail)
        
    })
    socket.on('newMessage', function(newMessage){
        console.log('newMessage', newMessage)
    })
    
    socket.on('disconnect', ()=>{
                    console.log("Disconnected from USER")
                })
    
})


app.use(express.static(publicPath))

const port = process.env.PORT

server.listen(port, process.env.IP, ()=>{
    console.log(`Server INITIALED on ${port}`)
})