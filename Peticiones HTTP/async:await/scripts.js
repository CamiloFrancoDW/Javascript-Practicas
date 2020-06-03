// const getName = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Camilo')
//     })
// }

// const getName = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve(prompt('Ingresá un nombre'))
//         }, 1500) 
//     })
// }

// const sayHello = async () => {
//     const name = await getName() // await solo funciona dentro de una función async. Le decimos que espere a la función getName.
//     return `Hola ${name}`
// }

// console.log(sayHello());

// sayHello().then(res=>console.log(res))

// getName().then(name => console.log(name))



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

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if(!user) 
        throw new Error(`No existe el uduario con id ${id}`)
        else return user
}

//Una promesa es un objeto con dos calbacks internos.

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    
        if (!email) throw new Error(`${user.name} no tiene un email.`)
        else return ({
            id:user.id,
            name:user.name,
            email:email.email
        })
}

const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} tiene el email ${res.email}`
    } catch (error) { //Si algo no sale bien va a al catch
        console.log(error);
        
    }
} 

getInfo(prompt('Ingresá 1, 2, 3 o 4.')).then(res => console.log(res))
