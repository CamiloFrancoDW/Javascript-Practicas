
const users = [
    {
        id:1,
        name: 'Camilo'
    },
    {
        id:2,
        name:'Maru'
    },
    {
        id:3,
        name:'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'Camilo@gmail.com'
    },
    {
        id: 2,
        email:'Maru@gmail.com'
    }
]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    const promise = new Promise((resolve, reject)=> {
        if (!user) reject(`No existe el uduario con id ${id}`)
        else resolve(user);
    })
    
    return promise;
}

//Una promesa es un objeto con dos calbacks internos.

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject)=> {
        if (!email) reject(`${user.name} no tiene un email.`)
        else resolve({
            id:user.id,
            name:user.name,
            email:email.email
        });
    })
    
}

getUser(2)
    .then(user => console.log(user))
//el contenido de las promesas está encapsulado y por eso hay metodos para leer el contenido.
    .catch(error => console.log(error))
//para poder ver el error tenemos que poner .catch


getUser(3)
    .then(user => {
        return getEmail(user);
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));

// Como ya sabe lo que va a recibir lo podemos simplificar    
getUser(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)


console.log(getUser(2))