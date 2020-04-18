const express = require('express')
const app = express()
const setUpDb = require('./config/database')
const route = require('./config/routes')
const path = require('path') 
const port = process.env.PORT || 3030
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/',route)

setUpDb()

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})

app.listen(port,()=>{
    console.log('listening on port ',port)
})



