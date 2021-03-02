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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

function generatePassword() {
  var passwordArr = [];
  var possibleChars = [];
  var pLength = parseInt(prompt("how long?"));

  if (isNaN(pLength) === true) {
    alert("Password length must be provided as a number");
  } else if (pLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (pLength > 128) {
    alert("Password length must less than 129 characters");
  } else {
    var lower = confirm("lower?");

    var upper = confirm("upper?");

    var symbols = confirm("symbols?");

    var nums = confirm("numbers?");
  }

  // if (lower) {
  //   //for (i = 0; i < lowerCasedCharacters.length; i++) {
  //   var passwordArr = getRandom(lowerCasedCharacters(pLength));
  //   var passwordArr = confirmed.concat(passwordArr);
  //   //}
  // }

  if (lower) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
  }

  if (upper) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
  }

  if (symbols) {
    possibleChars = possibleChars.concat(specialCharacters);
  }

  if (nums) {
    possibleChars = possibleChars.concat(numbers);
  }
  // if (upper === true) {
  //   // for (i = 0; i < upperCasedCharacters.pLength; i++) {
  //   var passwordArr = passwordArr.concat(upperCasedCharacters);
  //   // }
  // }
  // if (symbols === true) {
  //   // for (i = 0; i < specialCharacters.pLength; i++) {
  //   var passwordArr = passwordArr.concat(specialCharacters);
  //   // }
  // }
  // if (nums === true) {
  //   // for (i = 0; i < numbers.pLength; i++) {
  //   var passwordArr = passwordArr.concat(numbers);
  //   // }
  // }

  for (i = 0; i < pLength; i++) {
    passwordArr.push(getRandom(possibleChars, pLength));
  }

  // console.log(pLength);
  // console.log(possibleChars);

  return passwordArr.join("");
}

function getRandom(arr, pLength) {
  var randIndex = Math.floor(Math.random() * pLength);
  console.log(arr.pLength);
  var randElement = arr[randIndex];

  return randElement;
}

// for (var i = 0; i < getPasswordOptions.length; i++) {
//   var possibleChars = getRandom(passwordOptions);

//   result.push(possibleChars);
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // var password = passwordOptions.join();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
