// Un Callback es una funcion que se ejecuta a través de otra función. 
// No son asincronos

// const getUser = (id, cb) => {
//     const user = {
//         name: 'Camilo',
//         id:id 
//     }

//     // console.log(user);
//     if (id==2) {
//         console.log('User not exist');
//     } else {
//         cb(null, user);
//     }
    
// }

// getUser(1, (err, user) => {
//     if (err) {return console.log(err)
//     }else{
//     console.log(`User name is ${name.user}`);
//         }
// })


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
        name: 'Camilo@gmail.com'
    },
    {
        id: 2,
        name:'Maru@gmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    if (!user) cb(`No existe el uduario con id ${id}`)
    else cb(null, user);
    
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) cb(`${user.name} no tiene un email.`)
    else cb(null, {
        id:user.id,
        name:user.name,
        email:email.email
    });
    
}

getUser(2, (err, user) => {
    if (err) return console.log(err)
    getEmail(user, (err, res) => {
        if (err) return console.log(err)
        else console.log(res)
    })

})

console.log(getEmail)