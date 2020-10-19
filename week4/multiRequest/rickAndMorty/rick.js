document.getElementById('rickButton').addEventListener('click', () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const container = document.getElementById('container')
            const mappedCharacters = _.map(response.data.results, character => 
                    `<div>
                        <div class='showCharacters'>
                            <h2>Name: ${character.name}</h1>
                            <h3>Species: ${character.species}</h3>
                            <h4>Gender: ${character.gender}</h3>
                            <img src="${character.image}" alt="">
                        </div>
                    </div>`
                ).join('')
                container.innerHTML = mappedCharacters
        })
        .catch(error => console.error(error))
})