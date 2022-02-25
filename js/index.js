// Iteration 1: Names and Input
let hacker1 = "Vedrana";
console.log("The driver's name is " + hacker1);

let hacker2 = "Maja";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has" +
      hacker1.length +
      "characters."
  );
} else {
  console.log("ow, you both have equally long names");
}

// Iteration 3: Loops
//loop for - Crear un bucle que imprima en la consola todos los números del 1 al 10
for (let i = 0; i < 11; i++) {
  console.log(i);
}

//Crear un bucle que imprima los números del 20 al 10, hacia atrás
for (let i = 20; i > 9; i--) {
  console.log(i);
}

//Crear un bucle que imprima los múltiplos de 3 entre el 0 y el 10
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
