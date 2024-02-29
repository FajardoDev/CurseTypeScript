// const number: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
// number.push(true)

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros = number.map((numero: number) => ({
	numero,
}));

const heroes: string[] = [
	"Green",
	"Mujer Maravilla",
	"Batman",
	"Super Man",
	"Spiderman",
	"Super Girl",
	"Cyclope",
	"Worverine",
	"Teacher X",
	"Deepool",
];

const heros = heroes.map((hero: string) => ({
	hero,
}));

import "../style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
      <div>
        <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold mb-3'>
           Tipos de Datos Array
        </h1>

        <div class='grid grid-cols-5 mx-auto text-xl'>
          <code>${JSON.stringify(numeros)}</code>
          <code>${JSON.stringify(heros)}</code>
        </div>

        
      </div>
    `;

//     The target object to copy to.

// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
