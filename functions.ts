//**Tarea:** Implementa una función que reciba un array de números y retorne el mayor valor.

const numbersList: number[] = [2, 3, 6, 9, 7, 6];

function returnGreatest (numbers: number[]): number {
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

console.log(returnGreatest(numbersList));

//- **Tarea 2:** Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.

function checkType(...args: (String | Number | Boolean)[]) :String{

    if(typeof args[0] !== typeof args[1]) return "Error: Los primeros dos argumentos no son del mismo tipo";
    
    let firstType: string = typeof args[0];
    const otherTypes = args.every(arg => typeof arg === firstType);

    if(otherTypes) return 'Todos los tipos son iguales';

    return 'Los tipos no son iguales';
};

console.log(checkType(1, 6, 3, 4, 5, true));

//**Tarea 3:** Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario.

const myMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotateMatrix(matrix: number[][]): number[][] {
    let newMatrix: number[][] = [];

    for(let i = 0; i < matrix.length; i++){
        newMatrix[i] = [];
        for(let j = 0; j < matrix.length; j++){
            newMatrix[i][j] = matrix[matrix.length - j - 1][i];
        };
    };

    return newMatrix
}

console.log(rotateMatrix(myMatrix)[0] );
console.log(rotateMatrix(myMatrix)[1]);
console.log(rotateMatrix(myMatrix)[2]);

