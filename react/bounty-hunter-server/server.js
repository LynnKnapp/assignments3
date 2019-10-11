const express =require('express')
const app = express()
const morgan = require('morgan')
const mongoose =require("mongoose")


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost: 27017/bountyhunterdb',
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, () => console.log('connected to db'))

app.use('/bounties', require('./routes/bountyRouter'))


app.listen(6003, () => {
    console.log('server is running on Port 6003')
})
