let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
let numbers = [1, 2, 3, 4, 5];

let strings = ["hello", "world", "javascript", "node"];

/*
Exercise 1: Multiply All Numbers in an Array

Create an endpoint /numbers/multiply that accepts a number from the request parameters.

Define the variable name for the number as multiplier.

Write a function multiplyNumber to multiply all elements in an array by the given number.

Respond with the updated array*/
function multiplyNumber(numbers, multiplier) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * multiplier);
  }
  return result;
}
app.get("/numbers/multiply", (req, res) => {
  let multiplier = parseInt(req.query.multiplier);
  let updatedNumbers = multiplyNumber(numbers, multiplier);
  res.json({ result: updatedNumbers });
});

/*
Exercise 2: Concatenate Strings

Create an endpoint /strings/concat that accepts a string from the request parameters.

Define the variable name for the string as suffix.

Write a function concatStrings to concatenate the given string to all elements in an array.

Respond with the updated array.
*/
function concatStrings(strings, suffix) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(strings[i] + suffix);
  }
  return result;
}
app.get("/strings/concat", (req, res) => {
  let suffix = req.query.suffix;
  let updatedStrings = concatStrings(strings, suffix);
  res.json({ result: updatedStrings });
});

/*
Exercise 3: Remove All Odd Numbers from an Array

Create an endpoint /numbers/remove-odds that removes all odd numbers from the array.

Define the function removeOddNumbers to filter out odd numbers.

Respond with the updated array.
*/
function removeOddNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // push only even numbers
      result.push(numbers[i]);
    }
  }
  return result;
}

app.get("/numbers/remove-odds", (req, res) => {
  let updatedNumbers = removeOddNumbers(numbers);
  res.json({ result: updatedNumbers });
});

/*
Exercise 4: Join All Strings in an Array

Create an endpoint /strings/join that join all strings in the array.

Define the function joinStrings to join each string in the array.

Respond with the updated array.
*/
function joinStrings(strings) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result = result + " " + strings[i];
  }
  return result;
}
app.get("/strings/join", (req, res) => {
  let updatedStrings = joinStrings(strings);
  res.json({ result: updatedStrings });
});

/*
Exercise 5: Double All Numbers in an Array

Create an endpoint /numbers/double that doubles all numbers in the array.

Define the function doubleNumbers to double each number in the array.

Respond with the updated array.
*/
function doubleNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
app.get("/numbers/double", (req, res) => {
  let updatedNumbers = doubleNumbers(numbers);
  res.json({ result: updatedNumbers });
});
