import "./style.css";
// Tipos de datos
// primitivos: string, number, boolean, symbol
// compuesto: objetos literales, funciones, clases, arhreglo
// Nos permite crear: Crear nuevos tipos, Interfaces, Genericos, Tuplas

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
       Tipos de Datos
    </h1>
  </div>
`;

const a: number = 10;

let b: number = 10;

let c: string;

// c = 3.1416;
// c = {};
// c = [];
// c = true;
c = "Hola Mundo!!!";

console.log({ a, b, c });

const saludo = "Hola soy una contante diseñada para saludar Hola Mundo!!!";

const soyHola = (saludo: string) => {
	console.log(saludo);
	console.log(saludo.includes("Hola Mundo!!!")); // true
};

soyHola(saludo);
