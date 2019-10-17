const express =require('express')
const app = express()
const morgan = require('morgan')
const mongoose =require("mongoose")
const PORT = process.env.PORT || 6003


app.use(express.json())//req body on Post and Put requests
app.use(morgan("dev"))//helpful console logs in the server on every http request


//connect to the local DB
mongoose.connect('mongodb://localhost: 27017/bountyhunterdb',
{
    useNewUrlParser: true, //params and queries
    useFindAndModify: true, //Put
    useCreateIndex: false, //Post
    useUnifiedTopology: true
}, () => console.log('connected to db'))

//Routes
app.use('/bounties', require('./routes/bountyRouter.js'))

//Global Error Handler
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})




app.listen(PORT, () => {
    console.log('server is running on Port 6003')
})
