"use strict";
const productOne = {
    id: 1,
    name: 'audífonos',
    price: 0,
};
//¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes? 
//El tipado estático previene errores ya que asegura que siempre se asignen los tipos exactos que deben tener estas variables o constantes, de forma que no generen ningún conflicto en la aplicación
const isOdd = function (a) {
    if (a % 2 === 0) {
        return true;
    }
    return false;
};
const checkFunction = isOdd(3);
console.log(checkFunction);
