import "../style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>
       Tipos de Datos String
    </h1>
  </div>
`;

const batman: string = "Caballero de la Noche";
const green: string = "Green Arrow";
const spiderman: string = `Hombre Araña`;

// console.log(typeof batman.length); number

// console.log(green.charAt(0)); G

// console.log(green.toUpperCase()); GREEN ARROW

// console.log(spiderman.concat(` & ${green} son super hero`)); Hombre Araña & Green Arrow son super hero

console.log(batman[30]?.toUpperCase() || "No está presente");

console.log({ batman, green, spiderman });
