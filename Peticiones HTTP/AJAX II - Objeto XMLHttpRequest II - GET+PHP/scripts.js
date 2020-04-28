
const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')


// Tenemos que decirle que pasa cuando se envía el formulario.
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)
})

const getData = (id) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined) { //si xhr no está definido significa que estamos cargando la página por primera vez.
        xhr.open('GET', 'marvel.php')

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

        const fragment = document.createDocumentFragment()

        for (const heroes of dataJSON) {
            const option = document.createElement('OPTION')
            option.setAttribute('value', heroes.ID)
            option.textContent = heroes.Name
            fragment.appendChild(option)
        }

            characters.appendChild(fragment)
        })
    } else {
        xhr.open('GET', `marvel.php?id=${id}`) // ``template string

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroe of dataJSON) {
                const row = document.createElement('TR') // row fila, Creamos las filas donde va a ir la información de cada superheroe. 
                const dataName = document.createElement('TD') //Creamos las etiquetas
                const dataAlignment = document.createElement('TD')
                const dataHometown = document.createElement('TD')
                const dataGender = document.createElement('TD')
                const dataFighting = document.createElement('TD')
                dataName.textContent = heroe.Name // Acá agregamos el texto a cada uno de los contenedores que creamos en el paso anterior
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                row.append(dataName) 
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)

                fragment.append(row) //Acá metemos los datos en la tabla después de hacer click
            }

            // acá borramos el dato anterior que consultamos anteriormente.
            if (table.children[1]) {
                table.removeChild(table.children[1])
            }
            table.append(fragment)
        })
    }

    xhr.send()
}

getData() 