
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(form)
})

// Esta función es para enviar datos.
const sendData = (data) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    //abrimos la concexion
    xhr.open('POST', 'marvel.php')
    const formData = new FormData(data)

    //Enviamos los datos
    xhr.send(formData)
}