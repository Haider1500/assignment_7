"use strict";
//31  Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function getCharCount(str, char) {
    return str.split("").reduce((acc, curr) => {
        if (curr === char) {
            console.log(acc, "acc");
            return (acc += 1);
        }
        return acc;
    }, 0);
}
console.log(getCharCount("ambulance", "a"));
const todoList = [
    { task: "complete the assignment 7", completed: false },
    { task: "practice typescript", completed: true },
    { task: "take a nap", completed: true },
];
function getTasks(tasks) {
    return tasks.filter((task) => !task.completed);
}
console.log(getTasks(todoList));
// Write a function that takes an array of integers and sorts them from smallest to largest.
function getSorted(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(getSorted([100, 15, 12, 29, 47, 2, 4, 90, 34, 7]));
// Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function reverseArr(arr) {
    let newArr = [];
    arr.forEach((item) => newArr.unshift(item));
    console.log(newArr);
}
reverseArr([1, 2, 8, 2, 4, 10]);
//35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function calculator(operator1, operator2, operand) {
    switch (operand) {
        case "+":
            return operator1 + operator2;
        case "-":
            return operator1 - operator2;
        case "*":
            return operator1 * operator2;
        case "/":
            return operator1 / operator2;
        default:
            return "improper inputs given";
    }
}
console.log(calculator(20, 2, "-"));
