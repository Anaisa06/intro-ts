//Conceptos de Programación en TypeScript

//1. Variables y constantes: Tipos, Tipos personalizados

type Product = {
  id: number;
  name: string;
  price: number;
};

const productOne: Product = {
    id: 1,
    name: 'audífonos',
    price: 0,
};


// 2. Operadores (aritméticos, booleanos)

const isOdd = function (a: number): boolean {
    if (a % 2 === 0) {
        return true;
    }
    return false;
};

const checkFunction: boolean = isOdd(3);
console.log(checkFunction);


//3. Estructuras de decisión 

const checkNumber = function (a: number): void {
    switch (a) {
        case 0:
            console.log('El número es 0');
            return;
        default:
            if(a < 0){
                console.log('El número es negativo');
            } else if (a > 0) {
                console.log('El número es positivo');
            }   
    }
}

checkNumber(-9);


//4. Estructuras de iteración (while, for, foreach, map)

const names: string[] = ['Ana', 'Isabel', 'Juan', 'Manuel', 'Sofía'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}