"use strict";
//Estructuras de Datos y Funciones
//1. Arrays | Listas
//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
const num = [1, 3, 5, 4, 2, 9];
const sum = num.reduce((a, b) => a + b, 0);
console.log(sum);
//Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
const strings = ['Hola', 'mundo'];
const concat = function (stringList) {
    let myString = '';
    for (let i = 0; i < stringList.length; i++) {
        myString += stringList[i];
    }
    return myString;
};
console.log(concat(strings));
const myArray = [{ id: 4, name: 'Dani' }, { id: 5, name: 'Alejo' }];
myArray.forEach(user => console.log(user.name));
//Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.
const greatestNum = num.reduce((accum, value) => accum > value ? accum : value);
console.log(greatestNum);
