const numberArray = [1, 2, 3, 4, 5];
let sum = 0;
let number = 10;

for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}

console.log(`The number is ${number}`);

//forEach
console.log(sum); //15
