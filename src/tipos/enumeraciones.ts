import "../style.css";

enum AudioLevel {
	min = 1,
	medium = 5,
	max = 10,
}

// let audioActual = AudioLevel.max;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>
       Tipos de Datos Enumeraciones
    </h1>

       <div class='grid grid-cols-2 text-xl mt-4'>
            <div class='text-fuchsia-700'>
                <p>${JSON.stringify(AudioLevel)}</p>
            </div>

            <div class='text-blue-700'>
                <p>
                  ${JSON.stringify(`Audio Actual: { ${AudioLevel.max} }`)}
                </p>
            </div>
       </div>
  </div>
`;
