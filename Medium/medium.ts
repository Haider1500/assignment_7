import readline from "node:readline";

//6 Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: number) {
  const pi = 3.14;
  return (pi * radius) ^ 2;
}
console.log(calculateArea(20));

// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".

for (let i = 1; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else console.log(i);
}

// Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperatures = [12, 46, 38, 52, 18, 4];
let maxTemp = temperatures[0];
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > maxTemp) {
    maxTemp = temperatures[i];
  }
}
console.log(maxTemp);

// Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
// const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your age?`, (age) => {
  const ageInNum = parseInt(age);
  if (ageInNum > 0) {
    if (ageInNum < 18) {
      console.log("you are minor!");
    } else console.log("you are adult!");
  }

  rl.close();
});

// 10 Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function positiveCount(arr: number[]): number {
  const count = arr.reduce((acc, curr) => {
    if (curr <= 0) {
      acc++;
    }
    return acc;
  }, 0);
  return count;
}

const finalCount = positiveCount([-1, 2, 4, 2]);
console.log(finalCount, "finalcount");
