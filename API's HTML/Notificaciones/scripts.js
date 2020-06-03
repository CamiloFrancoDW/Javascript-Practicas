/* 
https://developer.mozilla.org/es/docs/Web/API/notification 

La interfaz Notification de la Notifications API se usa para configurar y mostrar notificaciones de escritorio al usuario. La apariencia y las funcionalidad especificas de esta notificacion varia a traves de las distintas plataformas, pero generalmente esta plataformas proveen un camino para proveer informacion al usuario de manera asincronica.


icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    const options = {
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        icon: 'world.png',
        data: 'Extra data',
        tag: 'notification demo'
    }
    const notification = new Notification('Hello World', options)

    notification.addEventListener('close', () => console.log('CLOSE'))
    notification.addEventListener('show', () => console.log('SHOW'))

    console.log(notification)
} 