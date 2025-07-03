console.log('Hello from node!');

//destructuring
const arr = [1, 2, 3];
// const prima = arr[0];
// const aDoua = arr[1];
const [prima, , aDoua] = arr;

console.log({prima, aDoua});

let fName = 'Negoescu';
let lName = 'Paul';

[fName, lName] = [lName, fName];

console.log({fName, lName});

function test([num1, num2 = 0]) {
  return num1 + num2;
}

console.log('rezultat', test(arr));

const person = {
  fName: 'Paul',
  lName: 'Negoescu',
  age: 40,
  phones: ['070000000', '0368000000'],
  height: 1.54
};

const { 
  fName: firstName, 
  age, 
  phones: [, alDoileaNumarDeTelefon],
  height = 1.85
} = person;

console.log({firstName, age, alDoileaNumarDeTelefon, height});


// Array iterator methods
const fruit = ['Apples', 'Oranges', 'Pears', 'Melons'];

{
  let i = 0;
  while(i < fruit.length) {
    const myFruit = fruit[i];
    console.log(myFruit);
    i++;
  }
}

for(let i = 0; i < fruit.length; i++) {
  const myFruit = fruit[i];
  console.log(myFruit);
}

for(const myFruit of fruit) {
  console.log(myFruit);
}

const numbersAsStrings = ['1', '2', '3.1415', '4', '6'];
let numbers = [];
for(const str of numbersAsStrings) {
  numbers.push(Number(str));
}
console.log(numbers);

// const numbers2 = numbersAsStrings.map((str) => Number(str));
const numbers2 = numbersAsStrings.map(Number);
console.log(numbers2);

let even = [];
for(const str of numbersAsStrings) {
  if(Number(str) % 2 === 0) {
    even.push(str);
  } 
}

console.log(even);

const even2 = numbersAsStrings.filter((str) => Number(str) % 2 === 0);
console.log(even2);

const magic = numbersAsStrings
                .map(Number)
                .filter(num => !(num % 2))
                .reduce((sum, evenNum) => sum + evenNum, 0)
                // .find((num) => num > 3)
                // .forEach((num) => console.log(num));
  console.log(magic);
                

// Comment back ->> by colegu'




