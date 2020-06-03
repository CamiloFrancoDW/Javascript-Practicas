

const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

// fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e) => {
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
//     })

//     fileReader.addEventListener('loadend', () => {
//         progress.style.width = '100%'
//     })
// })

const root = document.documentElement //para llamar a las variables de css 

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file) //https://developer.mozilla.org/es/docs/Web/API/FileReader/readAsDataURL

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%') //Total es el tamaño total del archivo // loaded nos dice cuanto lleva cargado el archivo
    })

    fileReader.addEventListener('loadend', () => { //Este evento se ejecuta cuando termina de cargar
        root.style.setProperty('--bar-width', '100%') // Para que se termine de rellenar la barra de progreso
    })
})