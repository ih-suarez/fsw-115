
// fetch('https://rickandmortyapi.com/api/character')
//     .then(resolve => resolve.json())
//     .then(resolve => console.log(resolve.results))
//     .catch(error => console.log(error))


// https://api.vschool.io/hector/todo

// GET ALL

// style={{text-decoration: ${toDo.completed} ? 'line-through' : 'none'}}

// if(toDo.completed){
//     const container = document.getElementById('toDoContainer')
//     container.style.textDecoration = 'line-through'
// // }

// ${toDo.completed === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}

// style={{text-decoration: ${toDo.completed} ? "line-through" : "none"}}

axios.get('https://api.vschool.io/hector/todo')
    .then(response => {
        const container = document.getElementById('container')
        const mappedToDo = response.data.map(toDo => {
            return `
                <div id="toDoContainer" class="toDoContainer">
                    <h1 style={{text-decoration: ${toDo.completed} ? 'line-through' : 'none'}}>${toDo.title}</h1>
                    <img class="image" src="${toDo.imgUrl}" alt="">
                </div>`
                
            }).join('')
            container.innerHTML = mappedToDo
    })
    .catch(error => console.error(error))

// GET ONE

// axios.get('https://api.vschool.io/hector/todo/5f83b60ba269067180b0f2c2')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error))