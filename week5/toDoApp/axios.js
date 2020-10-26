
getToDos = () => {
    axios.get('https://api.vschool.io/hector/todo')
        .then(response => displayToDo(response.data))
        .catch(error => console.error(error))
}

getToDos()


displayToDo = (data) => {
    let toDoContainer = document.getElementById('formOutput')

    const eachToDo = _.forEach(data, todo => {
        let todoCard = document.createElement('div')
            todoCard.className = 'todoCard'
        
        let title = document.createElement('h2')
            title.textContent = `Title Of To Do: ${todo.title}`
            title.className = 'title'
            todoCard.appendChild(title)

        let description = document.createElement('p')
            description.textContent = `Description Of To Do: ${todo.description}`
            description.className = 'description'
            todoCard.appendChild(description)

        let price = document.createElement('p')
            price.textContent = `Price of To Do: $${todo.price}.00`
            price.className = 'price'
            todoCard.appendChild(price)
            
        let deleteButton = document.createElement('button')
            deleteButton.id = todo._id
            deleteButton.innerText = 'Delete'
            deleteButton.className = 'deleteButton'
            deleteButton.addEventListener('click', deleteTodo)
            todoCard.appendChild(deleteButton)

        let completedButton = document.createElement('button')
        let completedButtonText = ''
            todo.completed ? completedButtonText = 'Mark Incomplete' : completedButtonText = 'Mark Complete'
            completedButton.innerText = completedButtonText
            completedButton.className = 'completedButton'
            completedButton.id = todo._id
            completedButton.value = todo.completed
            completedButton.addEventListener('click', updateTodo)
            todoCard.appendChild(completedButton)
        
        toDoContainer.appendChild(todoCard)
        
    })
}

postToDo = (e) => {
    e.preventDefault()

    const toDoTitle = document.getElementById('toDoTitle')
    const toDoDescription = document.getElementById('toDoDescription')
    const toDoPrice = document.getElementById('toDoPrice')
    const toDoCompleted = document.getElementById('toDoCompleted')

    let newToDo = {
        title: toDoTitle.value,
        description: toDoDescription.value,
        price: toDoPrice.value,
        completed: toDoCompleted.checked
    }
    
    axios.post('https://api.vschool.io/hector/todo', newToDo)
        .then(() => location.reload())
        .catch(error => console.log(error))
}

const form = document.getElementById('form')
form.addEventListener('submit', postToDo)

deleteTodo = (e) => {
    console.log(e.target)
    axios.delete(`https://api.vschool.io/hector/todo/${e.target.id}`)
        .then(() => location.reload())
        .catch(error => console.log(error))
}  

updateTodo = (e) => {
    isCompleted = null
    e.target.value === 'true' ? isCompleted = true : isCompleted = false
    let updatedTodo = { completed: !isCompleted }
    
    axios.put(`https://api.vschool.io/hector/todo/${e.target.id}`, updatedTodo)
        .then(() => location.reload())
        .catch(error => console.log(error))
}

