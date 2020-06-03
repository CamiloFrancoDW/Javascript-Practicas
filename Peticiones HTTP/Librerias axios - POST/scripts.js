

const button = document.getElementById('button')

// button.addEventListener('click',() => {
//    const newPost = {
//        title: 'Nuevo post',
//        body: 'Este es el texto del nuevo post',
//        id: 1
//    }

//    fetch('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//        body: JSON.stringify(newPost),
//        headers: {
//            "Content-type": "application/json"
//        }
//    }).then(res=>res.json())
//    .then(data => console.log(data))

//    // console.log(newPost);
//    // console.log(JSON.stringify(newPost));
   
   
// })

button.addEventListener('click',() => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'Nuevo post',
            body: 'Este es el texto del nuevo post',
            id: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})