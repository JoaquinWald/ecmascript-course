//replaceAll()
const string =
  "JavaScript is beautiful. With JavaScript I can created the future of the web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//Métodos privados:
class Message {
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show("Hola mundi");

//Promise.any()
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => reject("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

//WeakRef
class AnyClass {
  constructor(element){
    this.ref = new WeakRef(element)
  }
  {...}
}

//Nuevos operadores lógicos:
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);