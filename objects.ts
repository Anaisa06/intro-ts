// Objetos
    // - **Tarea:** Define un objeto `Car` con propiedades `marca`, `modelo` y `año`. Crea una instancia de `Car` e imprime sus propiedades en consola.

interface ICar {
    marca: string;
    modelo: string;
    año: number;
}

const newCar: ICar = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 1612
};

console.log(`Marca: ${newCar.marca}, Modelo: ${newCar.modelo}, Año: ${newCar.año}`);

    //- **Tarea 2:** Con base en el objeto `Car`, crea una clase que posea un metodo estatico que reciba un objeto `Car` y retorne un string con la información del carro.

class carClass {
    marca: string;
    modelo: string;
    año: number;

    constructor({marca, modelo, año}: ICar){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    static carInfo (car : ICar): string {
        return `Marca: ${car.marca}, Modelo: ${newCar.modelo}, Año: ${newCar.año}`
    }
}

console.log(carClass.carInfo(newCar));

    // - **Tarea 3:** Implementa una función que reciba un objeto `Car` y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

 const myFuction = (car: ICar): ICar => {
    const newCar: ICar = {
        ...car,
        año: car.año + 1
    };
    return  newCar;
 }   