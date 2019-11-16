const express = require('express')
const app = express()
// Server Route to handle to a Get Request to a specific endpoint
app.get('/', (req, res)=> {
    res.send('Hello World')
})
//when making new request we need params and body
app.post('/',(req,res)=>{
    const newTodo = req.body
})




    //Port Number and callback
app.listen(6000,() => {
console.log('server is running on port 6000')
})