let nombre: string = "Hola Mundo!!!";

console.log("nombre: ", nombre);

const heroes = {
	names: "Peter Parker",
	edad: 51,
};

let { edad, names } = heroes;

edad = edad + 1;

names = `${names} conocido como: Spiderman`;

console.log(heroes);

console.log({ names, edad });
