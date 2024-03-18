function promediar(a,b,c){    //Funcion que hace el promedio de 3 notas
 return parseFloat((parseInt(a)+parseInt(b)+parseInt(c))/3);   
}


let seguir=""; //inicializo variable 
alert ("El siguiente programa es para hacer un promedio de las notas de un alumno");

do{
let nombre = prompt("Ingrese el nombre del alumno"); 

let mat = prompt("Ingrese la nota de Matematica"); //Ingreso notas
let len = prompt("Ingrese la nota de Lengua");
let soc = prompt("Ingrese la nota de Sociales");

let promedio=promediar(mat,len,soc);
if (promedio>=7){
    alert("El promedio de "+nombre+" es: "+promedio+". El alumno aprobó"); //Imprimo mensaje APROBADO en pantalla
} else {
alert("El promedio de "+nombre+" es: "+promedio+". El alumno desaprobó");  //Imprimo mensaje DESAPROBADO en pantalla
}
seguir = prompt("Desea ingresar las notas de otro alumno? (Si/No)"); //Actualizo variable seguir para continuar o no el bucle

console.log(seguir); //verifico el valor de la variable por consola
} while (seguir.toLowerCase()=="si");  

alert("Hasta Luego!");