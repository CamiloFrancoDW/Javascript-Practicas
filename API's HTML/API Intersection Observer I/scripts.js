//Nos dice cuando un elemento está visible o oculto.

const boxes = document.querySelectorAll('.box') // seleccionamos todos los elementos con la class box

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

const options = { // acá especificamos en que valor se intersepta el contenedor
    // root:
    // rootMargin: '-200px'
    threshold: 0.25 // 25% de la caja
}

const observer = new IntersectionObserver(callback, options)
boxes.forEach(element => observer.observe(element)) 