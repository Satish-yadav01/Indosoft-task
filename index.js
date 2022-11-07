const express = require('express')
const app = express();

const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const connection = require('./config/database');
const cookieParser = require('cookie-parser')

dotenv.config({path : './config/config.env'})
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost'

// setting up database connection
connection();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set Cookie Parser
app.use(cookieParser())

// setting up router
app.use('/api/v1',require('./routes/users'))

app.get('*',(req,res)=>{
    res.status(404).json({
        status : false,
        message : 'Page not Found'
    })
})
app.listen(port,()=>console.log(`server running at http://${host}:${port}`))