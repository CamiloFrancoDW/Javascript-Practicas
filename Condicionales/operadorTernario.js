



/***
 * Operador ternario
 * 
 * Se utiliza cuando una condición será true o false.
 * Puede tener una o varias sentencias, van separadas por comas y entre parentesis. 
 * 
 * (condición) ? true : false;
 * 
 * (condición) ?
 *          (primera sentencia,
 *          segunda sentencia)
 *          :
 *          (primera sentencia,
 *          segunda sentencia);
 * 
 * 
 */


let num = 5;

if (num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`);


(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

