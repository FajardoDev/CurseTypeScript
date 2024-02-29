import "../style.css";

// Si quiero que el primer dato siempre sea un string y el 2do un número
const hero: [string, number, boolean] = ["Dr Strange", 100, true];

hero[0] = "Arrow";
hero[1] = 200;
hero[2] = false;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>
       Tipos de Datos Tuplas
    </h1>

    <div class='grid grid-cols-5 mx-auto text-xl mt-4'>
          <pre>${JSON.stringify(hero)}</pre>
        </div>
  </div>
`;
