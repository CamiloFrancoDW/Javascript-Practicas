/***
 * Switch 
 * Se utilizan para elejir un camino de varios preestablecidos.
 * 
 * Hay dos tipos principales:
 * 
 * Sintaxis simple:
 * switch (evaluación) {
    case 1 value:
        //código  
         break;

    case 2 value:
        //código  
         break;
 
    default:
        //código
 }

 Sintaxis multiple:
    switch (evaluación) {
    case 1:
    case 2:
    case 3:
        //código    
         break;
 
    default:
         break;
 }
 
 */


 let num = 3;

 switch (num) {
    case 1:
         console.log('Num tiene el valor 1.')
         break;
    case 2:
        console.log('Num tiene el valor 2.')
        break;    
 
     default:
        console.log('Num no es ni 1 ni 2.')
         break;
 }


 switch (num) {
     case 1:
     case 3:
     case 5:    
         console.log(`${num} es impar`); 
         break;
     case 2:
     case 4:
        console.log(`${num} es par`); 
     default:
         
         break;
 }

/** Sintaxis multiple encadenada ???? */

 