

const button = document.getElementById('button')


//  button.addEventListener('click',() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=> res.ok ? Promise.resolve(res) : Promise.reject(res))
//     .then(res => res.json())
//     .then(res => {
//         //Ahora los imprimimios en pantalla.    
//         const list = document.getElementById('list')
//         const fragment = document.createDocumentFragment()
//         for (const userInfo of res) { //acá recorremos la información de los usuarios.
//             const listItem = document.createElement('LI') //Creamos un elemento <li>
//             listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//             fragment.appendChild(listItem) 
//         }
//         list.appendChild(fragment) //acá le decimos donde meter el elemtno que estamos creando.
//     })
//  })

button.addEventListener('click',() => {
   axios({
       method: 'GET',
       url: 'https://jsonplaceholder.typicode.com/users'
   }).then(res => {
    const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res.data) { //acá recorremos la información de los usuarios.
                const listItem = document.createElement('LI') //Creamos un elemento <li>
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem) 
            }
            list.appendChild(fragment)       
   }).catch(err=> console.log(err))
 })

 console.log(button);
 