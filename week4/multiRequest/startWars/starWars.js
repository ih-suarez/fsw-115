document.getElementById('starWarsButton').addEventListener('click', () => {
    axios.get('https://swapi.py4e.com/api/people')
        .then(response => {
            const container = document.getElementById('container')
            const mappedCharacters = _.map(response.data.results, character => 
                    `<div>
                        <div class='showCharacters'>
                            <h2>Name: ${character.name}</h1>
                            <h4>Gender: ${character.gender}</h3>
                            <h4>Skin Color: ${character.skin_color}</h4>
                            <a href=${character.homeworld}>Home World Data</a>
                        </div>
                    </div>`
                ).join('')
                container.innerHTML = mappedCharacters
        })
        .catch(error => console.error(error))
    })