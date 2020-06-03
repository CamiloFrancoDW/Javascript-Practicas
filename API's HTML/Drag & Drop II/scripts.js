
const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer);
    
    e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active') //con classList.add cambiamos la plase
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active') // con esto le quitamos la clase active para que vuelva al color original   
})

//OBLIGATORIO, SI NO, NO FUNCIONA para que el navegador sepa que estamos en la sona para soltar el elemento.- la zona donde vamos a soltar el elemneto.
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element)) //Acá lo sacamos de tareas pendientes y lo agregamos a tareas terminadas
})



// efecto inverso 
finishedTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer);
    
    e.dataTransfer.setData('text/plain', e.target.id)
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active') //con classList.add cambiamos la plase
})

finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active') // con esto le quitamos la clase active para que vuelva al color original   
})

//OBLIGATORIO, SI NO, NO FUNCIONA para que el navegador sepa que estamos en la sona para soltar el elemento.- la zona donde vamos a soltar el elemneto.
pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    pendingTasks.appendChild(finishedTasks.removeChild(element)) //Acá lo sacamos de tareas pendientes y lo agregamos a tareas terminadas
})