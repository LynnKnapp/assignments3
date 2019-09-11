const form = document.getElementById("addToDo")

function start(update){
    axios.get("https://api.vschool.io/lynnknapp/todo")
    .then(response => {
        // toDoList.todo[i]
        listToDos(response.data, update)

    })
    .catch(error => {
        return console.log(error);
    })
}
start()

function listToDos(todos, update) {
    if(update){
        document.getElementById("list").innerHTML = ''
    }
    todos.forEach((todo) => {
        let toDoContainer = document.createElement("div")
        
        let title = document.createElement("h1")
        title.innerText = todo.title
        let description = document.createElement("h2")
        description.innerText = "Description: " + todo.description
        let price = document.createElement("p")
        price.innerText = todo.price
        let br = document.createElement("br") //
        let img = document.createElement("img")
        img.setAttribute("backgroundSize" , "cover") 
        img.style.width = "350px"
        img.style.height = "350px"
        img.style.backgroundSize = "cover"
        console.log(todo)
        img.setAttribute("src", todo.imgUrl)
        let checkbox = document.createElement("input")
        checkbox.setAttribute('type', 'checkBox')
        const delBtn = document.createElement("button")
        delBtn.textContent = "delete"
        delBtn.addEventListener("click", function () {
            toDoContainer.style.display = 'none'
            axios.delete("https://api.vschool.io/lynnknapp/todo/" + todo._id)
                .then(response => {
                    getToDos()
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        })

        checkbox.addEventListener("click", function () {
            axios.put("https://api.vschool.io/lynnknapp/todo/" + todo._id, {completed: !todo.completed}).then(response =>{
                start('update')
            })
        })
        
        if (todo.completed) {
            checkbox.checked = true
            title.style.textDecoration = "line-through"
        } else {
            title.style.textDecoration = "none"
        }

        // checkbox.addEventListener("click", function () {
            // checkTodo(todo)
            // axios.get(`https://api.vschool.io/lynnknapp/todo`).then(res => {
            //     toDoList = res.data
            // })
        // })
        // if (todo.completed) {
        //     checkbox.checked = true
        //     title.style.textDecoration = "line-through"
        // } else {
        //     title.style.textDecoration = "none"
        // }
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
    })
}

document.addTodo.addEventListener("submit", function (event) {
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