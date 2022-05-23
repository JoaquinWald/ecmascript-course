function newFunction(name, age, country){
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
};

newFunction();

//es6
function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
  console.log(name, age,country);
};

newFunction2();
newFunction2('Rik', 24, 'CO');

//Template Literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);