// Assignment code here
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function passwordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to have?"));

  if (isNaN(passwordLength) === true) {
    alert("password length must be a number!")
    return
  }

  if (passwordLength < 8) {
    alert("password length must be between 8-128 characters")
    return
  }

  if (passwordLength > 128) {
    alert("password length must be between 8-128 characters")
    return
  }

  var hasSpecial = confirm("Click ok to confirm special characters.");
  var hasNumbers = confirm("Click ok to confirm numbers.");
  var hasLowercase = confirm("Click ok to confirm lowercase letters.");
  var hasUppercase = confirm("Click ok to confirm uppercase letters.");

  if (hasSpecial === false &&
    hasNumbers === false &&
    hasLowercase === false &&
    hasUppercase === false) {
    alert("Please choose at least one character set.")
    return
  }


  var optionsPick = {
    passwordLength: passwordLength,
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase
  }

  return optionsPick;
}

function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomEl = arr[randomIndex];

  return randomEl;
}

function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (options.hasSpecial) {
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteedChar.push(random(specialCharacters));
  }
  if (options.hasNumbers) {
    possibleChar = possibleChar.concat(numericCharacters);
    guaranteedChar.push(random(numericCharacters));
  }
  if (options.hasLowercase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    guaranteedChar.push(random(lowerCasedCharacters));
  }
  if (options.hasUppercase) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
    guaranteedChar.push(random(upperCasedCharacters));
  }
  for (var i = 0; i < options.passwordLength; i++) {
    var possibleChar = random(possibleChar);
    result.push(possibleChar);
  }
  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  }
  return result.join('');

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
