//.flat()
let array = [1, 2, 3, [1, 5, 3, [1, 2, 3]]];

console.log(array.flat());

//.flatMap()
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value * 2]));

//.trimStart()
let hello = "         hello world";

console.log(hello);
console.log(hello.trimStart());

//.trimEnd()
let hello = "hello world      ";

console.log(hello);
console.log(hello.trimEnd());

//Optional catch binding:
try {
  taca;
} catch {
  error;
}

//Object.fromEntries()
let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

//Symbol.prototype.description
let mySymbol = `My symbol baby`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
