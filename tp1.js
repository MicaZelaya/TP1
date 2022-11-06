//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje"
//alert("Un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// document.write("Hello World")

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//document.write(3+5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// let nombre = prompt(`Ingrese nombre:`);
// document.write("Hola " + nombre);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// var num1 = prompt (`Ingrese un numero:`);
// var num2 = prompt (`Ingrese otro numero:`);
// document.write(parseInt(num1) + parseInt(num2))

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// var num1 = prompt (`Ingrese un numero:`);
// var num2 = prompt (`Ingrese otro numero:`);
// if (num1 > num2){
//     document.write(num1);
// }else{
//     document.write(num2)
// }

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// var num1 = prompt (`Ingrese un numero:`);
// var num2 = prompt (`Ingrese otro numero:`);
// var num3 = prompt (`Ingrese otro numero:`);
// if (num1 > num2 && num3){
//     document.write(num1);
// }else if (num2 > num3){
//     document.write(num2)
// }else{
//     document.write(num3)
// }

//8.- Escribe un programa que pida un número y diga si es divisible por 2
// var num = prompt (`Ingrese un numero:`);
// if (num % 2 === 0){
//     document.write("Es divisible por 2")
// }else{
//     document.write("No es divisible por 2")
// }

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// var frase = prompt(`Ingrese frase:`);
// var nuevafrase = frase.length;
// for (var i = 0; i <= nuevafrase; i++) {
//     if(frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o'  || frase[i] === 'u'){
//             document.write(frase[i]);
            
//         }
// }

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// var num = prompt (`Ingrese un numero:`)
// if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
//     document.write("Es divisible por 2, 3, 5 o 7");
//     } else {
//     document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
//     }

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
var num = prompt (`Ingrese un numero:`)
document.write("El numero " + num + " es divisible" );
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    if (num % 2 === 0){
        document.write(" por 2 ");
    }if (num % 3 === 0){
        document.write(" por 3 ");
    }if(num % 5 === 0){
        document.write(" por 5 ");
    }if(num % 7 === 0){
        document.write(" por 7 ");
    }    
}




