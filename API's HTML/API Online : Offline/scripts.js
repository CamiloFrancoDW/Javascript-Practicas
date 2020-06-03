//todo esto nos dice si nos quedamos sin internet y nos avisa cuando volvio internet.

const alert = document.getElementById('alert')

addEventListener('online', (e) => { //nos dice cuando estamos online
    setAlert(1)
    
})


addEventListener('offline', (e) => { // nos dice cuando estamos offline
    setAlert(0)
})

const setAlert = (status) => {
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')

    status === 0 ?
        setTimeout(() => {
            alert.textContent = "Ups, estás offline"
            alert.classList.add('alert--offline') 
        }, 100) :
        setTimeout(() => {
            alert.textContent = "Ups! estás online de nuevo!"
            alert.classList.add('alert--online')
        }, 100)
} 