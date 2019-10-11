const express = require('express')
const app = express()

app.use(express.json())

app.use('/todos', require('./todoRouter.js'))


app.listen(6001, () => {
    console.log('server is running on Port 6001')
})