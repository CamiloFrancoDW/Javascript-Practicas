//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()// hay que lleer la base de datos despues de tener la base de datos abierta.
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData() // para que se muestre el dato nuevo despues de agregar la tarea
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly') // readonly => tenemos que especificar que la funcion es para solo lectura.
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor() //Recorre cada uno de los objetos y nos devuelve los valores. Lee los registros y nos devuelve información.
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => { // con esta función le decimos que lea todos los registros, sino lee uno solo
            const cursor = e.target.result
            if (cursor) {
                const taskTitle = document.createElement('P') // metemos el contenido en una etiqueta p
                taskTitle.textContent = cursor.value.taskTitle // le desimos que tome el titulo de la tarea que muestra el cursos
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)
                cursor.continue() // Este metodo dice que siga leyendo mientras existan registros.
            } else {
                tasks.textContent = '' // para que no se vuelvan a agregar las tareas cada vez que agregamos un dato.
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })
} 
