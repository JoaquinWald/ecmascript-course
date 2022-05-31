//Operador de reposo
const obj = {
  name: "Oscar",
  age: 32,
  country: "MX",
};

let { name, ...all } = obj;
console.log(name, all);

//Si quiero name y age solamente:
const obj = {
  name: "Oscar",
  age: 32,
  country: "MX",
};

let { country, ...all } = obj;
console.log(all);

//Propiedades de propagación:------------------------
const obj = {
  name: "Oscar",
  age: 32,
};

const obj1 = {
  ...obj,
  country: "MX",
};

console.log(obj1);

//.finally():------------------------------------------
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

//Ahora con un setTimeout:
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World 2"), 2000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

//Regex:------------------------------
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-05-14");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, day);
