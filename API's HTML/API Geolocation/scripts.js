
// Documentacion https://developer.mozilla.org/es/docs/Web/API/Geolocation


const button = document.getElementById('button')

//console.log(button);


button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = { // https://developer.mozilla.org/es/docs/Web/API/PositionOptions
    enableHightAccurancy: true,
    timeout: 5000,
    maximunAge: 0 //esto nos dice cuanto tiempo vamos a tener la información en cache
}

const getPosition = (position) => {
    console.log(position);
    
}

const error = (error) => console.log(error);
