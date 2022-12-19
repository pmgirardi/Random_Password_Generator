// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword
// Identified that a value needs to be returned 
// Pseudo coding to construct code that meets ReadMe requirements

function generatePassword() {

  // 1. Prompt the user for the password criteria:
  // - Password length needs to be at least 8 characters and no more than 128 characters.
  // 2. 



  return "password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
