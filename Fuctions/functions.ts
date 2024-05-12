// Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(numbers: number[]): number {
  return numbers.reduce((acc, curr) => {
    return (acc *= curr);
  }, 1);
}

console.log(calculateProduct([1, 2, 3, 4]));

// -------------------------------------------------------------------------------------------------------------

// Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.

function filterByLength(arr: string[], n: number): string[] {
  return arr.filter((word) => word.length === n);
}

console.log(filterByLength(["sum", "subtract", "add"], 3));

// -------------------------------------------------------------------------------------------------------------

// Create a function findDuplicates that finds and logs all duplicates in an array.

function findDuplicates(array: number[]): number[] {
  const duplicates = array.filter((item, index) => {
    return array.indexOf(item) !== index;
  });

  console.log(duplicates);
  return duplicates;
}
const values = [1, 2, 3, 4, 2, 1, 2];
findDuplicates(values);

// -------------------------------------------------------------------------------------------------------------

// Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(integers: number[]): number[] {
  return integers.map((i) => {
    return (i += 1);
  });
}
console.log(incrementAll([5, 2, 3, 1]));

// -------------------------------------------------------------------------------------------------------------

// Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr: number[], element: number): number {
  return arr.reduce((acc, curr) => {
    if (curr === element) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(countOccurrences([1, 4, 2, 3, 1, 2], 2));

// -------------------------------------------------------------------------------------------------------------

// Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log(isSorted([6, 3, 2, 71, 5, 1, 8, 4]));

// -------------------------------------------------------------------------------------------------------------

// Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".

function formatString(arr: string[]) {
  const commaSeperated = arr.slice(0, arr.length - 2).join(", ");
  const andSeparated = arr.slice(arr.length - 2).join(" and ");
  console.log(commaSeperated + "," + andSeparated);
}

formatString(["hi", "hello", "javascript", "java", "laptop", "lahore"]);

// -------------------------------------------------------------------------------------------------------------

// Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function convertTemp(arr: number[]): number[] {
  return arr.map((item) => {
    return ((item - 32) * 5) / 9;
  });
}

console.log(convertTemp([120, 102, 96, 48]));

// -------------------------------------------------------------------------------------------------------------

// Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
interface obj {
  minimum: number;
  maximum: number;
  average: number;
}
function minMaxAverage(arr: number[]): obj {
  return {
    minimum: Math.min(...arr),
    maximum: Math.max(...arr),
    average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
  };
}
console.log(minMaxAverage([2, 4, 1, 5, 2]));

// -------------------------------------------------------------------------------------------------------------

// 30 Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr: number[], idx1: number, idx2: number): number[] {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

console.log(swapElements([2, 4, 6, 3, 7, 4, 28, 3], 2, 4));
