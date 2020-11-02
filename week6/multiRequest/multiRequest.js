async function getData() {
    const charactersData = await axios.get('https://rickandmortyapi.com/api/character')
    const locationsData = await axios.get('https://rickandmortyapi.com/api/location')
    const episodesData = await axios.get('https://rickandmortyapi.com/api/episode')
    displayContent(charactersData, locationsData, episodesData)
}

getData()

const rickAndMortyContainer = document.getElementById('rickContainer')
const locationsContainer = document.getElementById('locations')
const episodeContainer = document.getElementById('episodes')

const displayContent = (characters, locations, episodes) => {
    _.map(characters.data.results, character => {
        const names = document.createElement('h2')
        names.id = 'names'
        names.textContent = `Character Name: ${character.name}`
        rickAndMortyContainer.appendChild(names)
        
        const isAlive = document.createElement('h3')
        isAlive.id = 'isAlive'
        isAlive.style.color = character.status === 'Alive' ? 'green' : 'tomato'
        isAlive.textContent = `Is Character Alive? ${character.status}`
        rickAndMortyContainer.appendChild(isAlive)
    })

    _.map(locations.data.results, location => {
        const locationName = document.createElement('h2')
        locationName.id = 'names'
        locationName.textContent = `Location Name: ${location.name}`
        locationsContainer.appendChild(locationName)

        const locationDimension = document.createElement('h3')
        locationDimension.id = 'dimension'
        locationDimension.style.color = location.dimension === 'unknown' ? 'orange' : 'blue'
        locationDimension.textContent = `Dimension: ${location.dimension}`
        locationsContainer.appendChild(locationDimension)
    })
    
    _.map(episodes.data.results, episode => {
        const episodeName = document.createElement('h3')
        episodeName.id = 'names'
        episodeName.textContent = `Episode Name: ${episode.name}`
        episodeContainer.appendChild(episodeName)
    })
}