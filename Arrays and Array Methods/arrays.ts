// 11 Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function convertArr(words: string[]) {
  return words.filter((word: string) => word[0] === "a");
}

const words: string[] = ["australia", "book", "laptop", "ambulance", "shape"];
console.log(convertArr(words));

// ------------------------------------------------------------------------------------------------------------------------------------------

// Create a script that logs the second to last element of an array named fruits.
const fruits: string[] = [
  "banana",
  "strawberry",
  "apple",
  "water melon",
  "orange",
];
// const secondLastElem = fruits[fruits.length - 2]; //using the length function
const [, secondtLasElement] = fruits.reverse(); //using the destructuring here

// ------------------------------------------------------------------------------------------------------------------------------------------

// Develop a function that takes an array of numbers and returns a new array with each number squared.
const numbers: number[] = [2, 4, 1, 6, 9, 5];
function getSquare(numbers: number[]) {
  return numbers.map((num) => num * num);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function getReversedArr(arr: any[]) {
  let reversedArr: any[] = [];
  arr.forEach((item) => {
    reversedArr.unshift(item);
  });
  return reversedArr;
}
getReversedArr(numbers);

// ------------------------------------------------------------------------------------------------------------------------------------------

// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of
//  times the score exceeded the maximum score and the number of times it fell below the minimum score.
function getScore(scores: number[]) {
  const maxScore = 20;
  const minScore = 5;
  let minCount = 0;
  let maxCount = 0;
  scores.forEach((s) => {
    if (s > maxScore) {
      maxCount += 1;
    } else if (s < minScore) {
      minCount += 1;
    }
  });
  console.log(
    `the number of times score fell below the minimum score: ${minCount}`
  );
  console.log(
    `the number of times score went above the maximam score: ${maxCount}`
  );
}
getScore([10, 5, 20, 20, 4, 5, 2, 25, 1]);

// ------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
function removeFalsyValues(arr: any[]) {
  return arr.filter((a) => a);
}

console.log(
  removeFalsyValues([
    23,
    0,
    "gfg",
    false,
    true,
    NaN,
    12,
    "hi",
    undefined,
    [],
    "",
  ])
);
// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; //using the spread operator
console.log(arr3);
// ------------------------------------------------------------------------------------------------------------------------------------------

// Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr: number[], type: string) {
  return arr.reduce((acc, curr) => {
    if (
      (type === "even" && curr % 2 === 0) ||
      (type === "odd" && curr % 2 !== 0)
    ) {
      acc += curr;
    }
    return acc;
  }, 0);
}
console.log(sumOfElements([2, 3, 42, 25, 7, 4, 3, 2, 5, 3, 4], "odd"));

// ------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findElementIndex(arr: any[], element: any) {
  return arr.indexOf(element); //it returns -1 if element is not found otherwise returns the element
}
console.log(findElementIndex([1, 2, 4, 6, 4, 89, 3], 4));

// ------------------------------------------------------------------------------------------------------------------------------------------

// 20 Write a function to find and return the smallest number in an array of integers.
function getSmallestNum(arr: number[]) {
  return Math.min(...arr);
}

console.log(getSmallestNum([12, 6, 9, 2]));
