// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getOptions() {
  var length = prompt("how long would you like it to be? 8-128");

  var hasUpper = confirm("would you like uppercase letters?");

  var hasLower = confirm("would you like lowercase letters?");

  var hasSpecChar = confirm("would you like pecial characters?");

  var hasNums = confirm("would you like numbers?");

  if (isNaN(length) === true) {
    alert("must be a number");
    return;
  }

  if (length < 8) {
    alert("too short");
    return;
  }

  if (length > 128) {
    alert("too long");
    return;
  }

  if (
    hasUpper === false &&
    hasLower === false &&
    hasSpecChar === false &&
    hasNums === false
  ) {
    alert("must confirm atleast 1");
    return;
  }

  var passwordOptions = {
    length: length,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasSpecChar: hasSpecChar,
    hasNums: hasNums,
  };

  return passwordOptions;
}

function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getOptions();

  var result = [];

  var possibleChars = [];

  var guarenteedChars = [];

  if (options.hasUpper) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guarenteedChars.push(getRandom(upperCasedCharacters));
  }

  if (options.hasLower) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guarenteedChars.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasSpecChar) {
    possibleChars = possibleChars.concat(specialCharacters);
    guarenteedChars.push(getRandom(specialCharacters));
  }

  if (options.hasNums) {
    possibleChars = possibleChars.concat(numericCharacters);
    guarenteedChars.push(getRandom(numericCharacters));
  }

  for (var i = 0; i < guarenteedChars.length; i++) {
    result[i] = guarenteedChars[i];
  }

  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
