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
  //asking client to input desired character length
  let passLength = prompt('Please indicate a password length between 8 and 128.')
  // defines length requirements
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength)
  }
  // If password doesnt meet specifications it will return to
  // beginning state and require user to start again. Password
  // length criteria must be met before user can pick character content
  else {
    alert('Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.')
    return '';
  }
  // Determines if user wants lower case letters in password
  let qryLowerCase = confirm('Do you want to use lower case (a-z) letters in your password?')
  // Determines if user wants upper case letters in password
  let qryUpperCase = confirm('Do you want to use upper case (A-Z) letters in your password?')
  // Determines if user wants numbers in password
  let qryNumbers = confirm('Do you want to use numbers (0-9) in your password?')
  // Determines if user wants special characters in password
  let qrySpecialChar = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')
  // Validates a criteria was selected
  // Executes random character selection for password length
  // Selecting lowercase letters will randomly select a letters from the lowerCase array.
  if (qryLowerCase) {
    avalChars += lowerCase
  }
  // Selecting upper case letters will randomly select letters from the upperCase array.
  if (qryUpperCase) {
    avalChars += upperCase
  }
  // Selecting numbers will randomly select numbers from the numbers array.
  if (qryNumbers) {
    avalChars += numbers
  }
  // Selecting special characters will randomly select characters from the specialChar array.
  if (qrySpecialChar) {
    avalChars += specialChar
  }
   //if none of the character types are selected, alerts the user to choose at least one
   if (
    !qryLowerCase && !qryUpperCase && !qryNumbers && !qrySpecialChar
  ) {
    return alert('Please select at least one criteria!');
  }
  for (let i = 0; i < passLength; i++) {
  // Uses characters at random that were pulled into avalChars. Loops through
  // the characters selecting them at random until theres enough characters to
  // fill the password length
    password += avalChars[Math.floor(Math.random() * avalChars.length)];
  }
  return password;
}

 
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
