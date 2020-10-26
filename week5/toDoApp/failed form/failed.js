
// fetch('https://rickandmortyapi.com/api/character')
//     .then(resolve => resolve.json())
//     .then(resolve => console.log(resolve.results))
//     .catch(error => console.log(error))


// https://api.vschool.io/hector/todo

// GET ALL

// axios.get('https://api.vschool.io/hector/todo')
//     .then(response => {
//         const container = document.getElementById('container')
//         const mappedToDo = _.map(response.data, toDo => 
//                 `<div id="toDoContainer" class="toDoContainer">
//                     <h1 class=${toDo.completed ? 'complete' : 'notComplete'}>${toDo.title}</h1>
//                     <img class="image" src="${toDo.imgUrl}" alt="">
//                 </div>`
//             ).join('')
//             container.innerHTML = mappedToDo
//     })
//     .catch(error => console.error(error))

getToDos = () => {
    axios.get('https://api.vschool.io/hector/todo')
        .then(response => displayToDo(response.data))
        .catch(error => console.error(error))
}

getToDos()


displayToDo = (data) => {
    let toDoContainer = document.getElementById('formOutput')

    const eachToDo = _.map(data, todo => 
            `<div id="toDo">
                <h3>${todo.title}</h3> 
                <h5>${todo.description}</h5>
                <h2>${todo.price}</h2>
                <button onclick="${onclick= deleteTodo}" id=${todo._id} class="delete" >Delete To Do</button> 
                
            </div>`).join('')
            toDoContainer.innerHTML = eachToDo
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
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
}

const form = document.getElementById('form')
form.addEventListener('submit', postToDo)

deleteTodo = (e) => {
    console.log(e.target)
    axios.delete(`https://api.vschool.io/hector/todo/${e.target.id}`)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
}   

updateTodo = (e) => {
    isCompleted = null
    e.target.value === 'true' ? isCompleted = true : isCompleted = false
    let updateTodo = { completed: !isCompleted }
    
    axios.put(`https://api.vschool.io/hector/todo/${e.target.id}`, updateTodo)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
}

