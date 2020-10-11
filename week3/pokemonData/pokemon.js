const xhr = new XMLHttpRequest()

xhr.open("GET", " https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        pokemonName(data.objects[0].pokemon)
    } 
}

const pokemonName = (arr) => {
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = `Pokemon name: ${arr[i].name}. JSON endpoint: ${arr[i].resource_uri}`
        document.body.appendChild(h1)
    }
}