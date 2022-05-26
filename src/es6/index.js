function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

newFunction();

//es6 --------------------
function newFunction2(name = "Oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Rik", 24, "CO");

//Template Literals -------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//----------------------------------------
//class 3 multilinea
let lorem = "primera linea \n" + "otra linea.";

let lorem2 = `otra frase epizardasxexe
drewrwerqewr.
er
`;

console.log(lorem);
console.log(lorem2);

//Desestructuración de elementos
let person = {
  name: "Oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age); //antigua forma

let { name, age, country } = person; //nueva forma
console.log(name, age, country);

//Spread Operator/Operador de propagación
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Vale", "Jairo", "Ruso"];

let education = ["David", ...team1, ...team2];

console.log(education);

//Let
{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//const
const a = "b";
a = "a";
console.log(a);

//class 4
//objects:
let name = "Oscar";
let age = 32;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };

console.log(obj2);

//Arrow functions/funciones de tipo flecha
//es5
const names = [
  { name: "Oscar", age: 32 },
  { name: "Jessi", age: 27 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//es6
let names = [
  { name: "Oscar", age: 32 },
  { name: "Jessi", age: 27 },
];

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //codigo...
};

const listOfNames4 = (name) => {
  //cod...
};

const square = (num) => num * num;

//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Bien");
    } else {
      reject("Mal");
    }
  });
};
//ejecutamos:
helloPromise()
  .then((response) => console.log(response))
  //se pueden poner más .then acá
  .then(() => console.log("wepa!"))
  .catch((error) => console.log(error));

//Bien

//Clase 5
//Class
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));
