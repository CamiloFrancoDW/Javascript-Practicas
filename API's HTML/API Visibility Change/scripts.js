/* Vídeo: https://www.pexels.com/es-es/video/2869107/ */
const video = document.getElementById('video')

// addEventListener('visibilitychange', (e) => {
//     if (document.visibilityState === 'visible') { //cuando estamos en el documento se puede visualizar el video
//         console.log('PLAY')
//         video.play()
//     } else if (document.visibilityState === 'hidden') { // cuando salimos del documento se pausa el video.
//         console.log('PAUSE')
//         video.pause()
//     }
// })

// Cuando cambiamos de pesataña se detiene la reproducción. Si el docuemtno esta visible se reproduce, sino se pausa.

console.log(document.visibilityState);

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause()) //Esto es lo mismo que arriba pero con un if ternario. 