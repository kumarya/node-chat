const path = require("path")
const express = require("express")
const app =express()

const publicPath = path.join(__dirname, '../public')


app.use(express.static(publicPath))

const port = process.env.PORT

app.listen(port, process.env.IP, ()=>{
    console.log(`Server INITIALED on ${port}`)
})