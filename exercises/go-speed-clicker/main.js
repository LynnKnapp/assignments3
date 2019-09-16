const counter = document.getElementById('submit')
const button =document.createElement('button')

let clicks = 0
let result =document.createElement('h1') 
result.textContent = clicks

document.body.appendChild(result)
console.log(clicks)

counter.addEventListener('click', function (){
    clicks ++
    console.log(clicks)
    result.textContent =clicks

    localStorage.setItem('counter', clicks)
})
