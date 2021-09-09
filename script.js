// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function passLength() {
  pLength = prompt("How many characters would you like your password to have?", "Type a number between 8 and 128");
  if (8 < pLength && pLength < 128 ) {
        alert("Awesome, your password will be " + pLength + " characters long");
    
  } else {
    alert("WRONG ANSWER, try again and get it right");
    passLength();
  }
}

function lowerChar() {
  lChar = confirm("Would you like your password to contain lower case letters?");
  if (lChar) {
    alert("Your password WILL contain lower case letters!");
  } else {
    alert("Your password WILL NOT contain lower case letters!");
  }
}

function upperChar() {
  uChar = confirm("Would you like your password to contain UPPER case letters?");
  if (uChar) {
    alert("Your password WILL contain upper case letters!");
  } else {
    alert("Your password WILL NOT contain upper case letters!");
  }
}

function numChar() {
  nChar = confirm("Would you like your password to contain NUMBERS?");
  if (nChar) {
    alert("Your password WILL contain numbers!");
  } else {
    alert("Your password WILL NOT contain numbers!");
  }
}

function specChar() {
  sChar = confirm("Would you like your password to contain SPECIAL characters?");
  if (sChar) {
    alert("Your password WILL contain special characters!");
  } else {
    alert("Your password WILL NOT contain special characters!");
  }
}

function generatePassword() {
  passLength();
  lowerChar();
  upperChar();
  numChar();
  specChar();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

