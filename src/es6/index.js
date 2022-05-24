function newFunction(name, age, country){
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
};

newFunction();

//es6 --------------------
function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
  console.log(name, age,country);
};

newFunction2();
newFunction2('Rik', 24, 'CO');

//Template Literals -------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//----------------------------------------
//class 3 multilinea
let lorem = "primera linea \n"
+ "otra linea."

let lorem2 = `otra frase epizardasxexe
drewrwerqewr.
er
`;

console.log(lorem);
console.log(lorem2);

//Desestructuración de elementos
let person = {
  'name': 'Oscar',
  'age': 32,
  'country': 'MX'
};

console.log(person.name, person.age);//antigua forma

let { name, age, country } = person;//nueva forma
console.log(name, age, country);

//Spread Operator/Operador de propagación
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Vale', 'Jairo', 'Ruso'];

let education = ['David', ...team1, ...team2];

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
const a = 'b';
a = 'a';
console.log(a);