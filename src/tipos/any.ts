import "../style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>
       Tipos de Datos Any Tratar de Evitar
    </h1>
  </div>
`;

let avenger: any; // Acepta cualquier tipo de dato any

avenger = "Hola Mundo!!";

console.log(typeof avenger.charAt(0)); // string H
console.log((avenger as string).charAt(5)); // M con el casteo as tengo auto completado

avenger = 140.9193939;

console.log(avenger.toFixed(2)); // 140.92
console.log((<number>avenger).toFixed(1)); // 140.9 con el casteo <> tengo auto completado
