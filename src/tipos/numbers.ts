import "../style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>
       Tipos de Datos Numbers
    </h1>
  </div>
`;

(() => {
	let avengers: number = 10;
	console.log({ avengers });

	const villanos: number = 20;

	if (avengers < villanos) {
		console.log("Estamos en problemas");
	} else {
		console.log("Nos Salvamos");
	}
})();
