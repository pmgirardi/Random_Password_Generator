// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword
// Identified that a value needs to be returned 
// Pseudo coding to construct code that meets ReadMe requirements

function generatePassword() {

  // 1. Prompt the user for the password criteria:
  // - Password length needs to be at least 8 characters and no more than 128 characters.
  // - Needs to include lower and upper case and special characters.✔
  // 2. Ensure the input is valid.
  // 3. Display generatePassword on the page.

  // Used an array to define elements in variables of characters 

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

// Prompt for user to confirm password criteria
var numberCharacter = prompt ("How many characters would you like your password? Choose between 8 and 128?");
var numbers = confirm ("Will this contain numbers?");
var uppercase = confirm ("Will this contain Uppercase letters?");
var lowercase = confirm ("Will this contain Lowercase letters?");
var specialCharacters = confirm ("Will this contain special characters?");
}

// If statements to add conditions of array
if (numbers){
  resultArray = resultArray.concat(uppercase);
  
}
if (uppercases){
  resultArray = resultArray.concat(lowercase);

}
if (lowercases){
  resultArray = resultArray.concat(numbers);

}

if (characters){
  resultArray = resultArray.concat(specialCharacters);
}
console.log(resultArray)

var password = [];

//Added for-loop to run over array

for (var i = 0; i < enter; i++) {
  var userArray = choices[Math.floor(Math.random() * choices.length)];
  password.push(userArray);
}

var ps = password.join("");
UserInput(ps);
return ps;

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
