/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS


*/

// console.log(innerWidh);

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'red'
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize', () => applyMatchMedia(mql)) // acá le decimos que con el cambio de tamaño se aplique el MatchMedia
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql)) // acá le decimos que lo aplqie apenas ingresamos ala página.