import "../style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class='text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
       Tipos de Datos Booleans
    </h1>
  </div>
`;

(() => {
	let isBatman: boolean = true;
	let isGreen: boolean = true;

	isBatman = true && true;
	isBatman = isGreen ? false : true;

	console.log({ isBatman });
	console.log({ isGreen });

	let isSuperman: boolean = true;
	const hero = "Superman";

	const superHero = (hero: string) => {
		if (hero.includes("Superman")) {
			console.log(`${hero.includes("Superman")} el heroes es: ${hero}`);
			return;
		}
		console.log(
			`${hero.includes(
				"Superman",
			)} el heroes no es 'Superman' el heroe es: ${hero}`,
		);
	};

	if (isSuperman) {
		superHero(hero);
	} else {
		console.log("No es un heroe");
	}
})();
