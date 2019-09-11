const todoList = document.getElementById('addTodo') 

function getToDos(){
    axios.get('https://api.vschool.io/lynnknapp/todo/')
    .then (response => {
        listTodos(response.data, update)
    })
    .catch(error => {
        return console.log(error)
    })
}

getToDos()

function listTodos(todos, update){
    if(update){
        document.getElementById('list').innerHTML = ''
    }
    for(let i = 0; i < todos.length; i++){
        let toDoContainer = document.createElement('div')
        let title = document.createElement('h2')
        title.innerText = todo.title
        let description = document.createElement('h4')
        description.innerText = "Description" + todo.description 
        let price =document.createElement('h4')
        price.innerText = todo.price
        let br =document.createElement('br')
        let img =document.createElement('img')
        img.setAttribute('background-size', 'cover')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.backgroundSize = 'cover'
        img.setAttribute('src', todo.imgUrl)
        let checkbox = document.createElement('imput')
        checkbox.setAttribute('type', 'checkbox')
        const delBtn = document.createElement('button')
        delBtn.textContent = 'delete'
        delBtn.addEventListener('click', function (){
            toDoContainer.style.display = 'none'
            axios.delete("https://api.vschool.io/lynnknapp/todo/" + todo._id)
                .then(response =>{
                    getToDos()
                    console.log(response.data)
                }) 
                .catch(error => console.log(error))   
            
        })
        checkbox.addEventListener('click', function(){
            axios.put("https://api.vschool.io/lynnknapp/todo/", + todo._id, {completed: !completed})
                .then(response => {
                    start('update')
                })
        })
        if(todo.completed){
            checkbox.checked = true
            title.style.textDecoration = 'line-through'
        }else{
            title.style.textDecoration = 'none'
        }
        toDoContainer.setAttribute("id", "toDoContainer")
        img.setAttribute('width', '60px')
        toDoContainer.appendChild(title)
        toDoContainer.appendChild(description)
        toDoContainer.appendChild(price)
        toDoContainer.appendChild(br) //
        toDoContainer.appendChild(img)
        toDoContainer.appendChild(delBtn)
        toDoContainer.appendChild(checkbox)
        document.getElementById("list").appendChild(toDoContainer)
    } 

}
document.addToDo.addEventListener('submit', function (event){
    event.preventDefault()
    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = document.addTodo.imgUrl.value
    let completed = form.completed.checked
    console.log(completed)
    let newTodo = {
        title,
        description,
        price,
        imgUrl,
        completed
        }
    postToDo(newTodo)
})
const postToDo = (newTodo) => {
    axios.post("https://api.vschool.io/lynnknapp/todo/", newTodo)
    .then((response) => {
        listToDos([response.data])
    })
}
 