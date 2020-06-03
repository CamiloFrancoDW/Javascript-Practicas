
// indexedDB es una manera de persistir datos en el navegador. Podemos cargar gran cantidad de datos. La API de indexedDB es asincronica. Usa eventos DOM para notificar cuando los resultados están disponibles. 
// Es una base de datos indexada, NoSql. POdemos guardar objetos que tengan propiedades diferentes. No guardamos elementos en tablas con filas y columnas sino que guardamos objetos.

//https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API/Usando_IndexedDB


//
const indexedDB = window.indexedDB // Si acá no especificamos windows me da error, porque la contaste se llama igual que el objeto

// console.log(indexedDB);

//Creamos la base de datos a través del objeto indexedDB y el metodo open ().
if (indexedDB) {
    let db //En esta variable almacenamos la base de datos.
    const request = indexedDB.open('tasksList', 1) //Acá accedemos a la base de datos.

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }
    // Comprobar si la base de datos existe o tiene que ser creada usando el metodo onupgradeneeded(nos dice si existe la base de datos, si no existe la crea automaticamente)
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks') // El metodo createObjectStore() de indexedBD crea y retorna un nuevo objeto para almacenar e indexar.


    }
    // Escuchamos los eventos de exito y error con los metodos onsucces() y onerror()
    request.onerror = (error) => {
        console.log('Error', error)
    }
}
