// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword
// Identified that a value needs to be returned 
// Pseudo coding to construct code that meets ReadMe requirements

function generatePassword() {

  // 1. Prompt the user for the password criteria:
  // - Password length needs to be at least 8 characters and no more than 128 characters.
  // - Needs to include lower and upper case and special characters.
  // 2. Ensure the input is valid.
  // 3. Display generatePassword on the page.

  // Used an array to define elements in variables of characters 

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
