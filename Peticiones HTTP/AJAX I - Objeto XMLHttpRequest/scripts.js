/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */ //Es un protocolo de transferencia de datos.
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

//AXAJ intercepta la petición y nos muestra solo parte de la información, que la almacena en objetos.

const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr // Esta es la variable donde se va a guardar la petición, por convención se llama asi. 
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()  //Creamos el objeto. //El If lo hacemos por si tenemos una versión del navegador vieja. Si es actual da true y se ejecuta XMLHttpRequest() sino no ActiveXObject("Microsoft.XMLHTTP").
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') // La petición open('METODO', 'La url a la que va la petición')

    //Acá le decimos lo que queremos que haga con los datos. 
    xhr.addEventListener('load', (data) => { 
        const dataJSON = JSON.parse(data.target.response) //Convertimos los datos en un Objeto JSON.parse para convertirlo en onbjeto.
    
    //Ahora los imprimimios en pantalla.    
        const list = document.getElementById('list')
        for (const userInfo of dataJSON) { //acá recorremos la información de los usuarios.
            const listItem = document.createElement('LI') //Creamos un elemento <li>
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem) //acá le decimos donde meter el elemtno que estamos creando.
        }
    })

    xhr.send() //Enviamos la petición.
}) 