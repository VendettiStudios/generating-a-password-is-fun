// Assignment Code
// dont change
let generateBtn = document.querySelector('#generate');

// defining function variables to generate a random password
function generatePassword() {
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numbers = '1234567890';
  let specialChar = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let avalChars = '';

 

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);