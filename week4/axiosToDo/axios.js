
// fetch('https://rickandmortyapi.com/api/character')
//     .then(resolve => resolve.json())
//     .then(resolve => console.log(resolve.results))
//     .catch(error => console.log(error))


// https://api.vschool.io/hector/todo

// GET ALL

axios.get('https://api.vschool.io/hector/todo')
    .then(response => {
        const container = document.getElementById('container')
        const mappedToDo = _.map(response.data, toDo => 
                `<div id="toDoContainer" class="toDoContainer">
                    <h1 class=${toDo.completed ? 'complete' : 'notComplete'}>${toDo.title}</h1>
                    <img class="image" src="${toDo.imgUrl}" alt="">
                </div>`
            ).join('')
            container.innerHTML = mappedToDo
    })
    .catch(error => console.error(error))

// GET ONE

// axios.get('https://api.vschool.io/hector/todo/5f83b60ba269067180b0f2c2')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error))

