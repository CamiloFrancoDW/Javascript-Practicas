/**
 * Blob: Binary Long Object
 * 
 */

const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

buttonImg.addEventListener('click', ()=> {
  fetch('img.jpg')
        .then(res => res.blob())
        .then(img => {
          document.getElementById('img').src = URL.createObjectURL(img);
        })
})