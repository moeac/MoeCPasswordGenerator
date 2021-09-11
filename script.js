// assign global variables
var generateBtn = document.querySelector("#generate");
var nums = "00112233445566778899";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specs = "~!@#$%^&*()_+-={}[]<>?";
var blankPassword = "";
var password = "";

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// gets pass length and loops if incorrect info entered
function passLength() {
  pLength = Number(prompt("How many characters would you like your password to have?", "Type a number between 8 and 128"));
  if (8 < pLength && pLength < 128) {
        alert("Awesome, your password will be " + pLength + " characters long");
        lowerChar();
        upperChar();
        numChar();
        specChar();
  } else if  (pLength == false) {
// if cancel is clicked, closes prompt and returns to page
    } else {
      alert("Sorry please input a number between 8 and 128");
      passLength();
      }
}

// asks for lower characters and appends them if yes
function lowerChar() {
  lChar = confirm("Would you like your password to contain lower case letters?");
  if (lChar) {
    alert("Your password WILL contain lower case letters!");
    blankPassword += lowers;
  } else {
    alert("Your password WILL NOT contain lower case letters!");
  }
}

// asks for upper characters and appends them if yes
function upperChar() {
  uChar = confirm("Would you like your password to contain UPPER case letters?");
  if (uChar) {
    alert("Your password WILL contain upper case letters!");
    blankPassword += uppers;
  } else {
    alert("Your password WILL NOT contain upper case letters!");
  }
}

// asks for number characters and appends them if yes
function numChar() {
  nChar = confirm("Would you like your password to contain NUMBERS?");
  if (nChar) {
    alert("Your password WILL contain numbers!");
    blankPassword += nums;
  } else {
    alert("Your password WILL NOT contain numbers!");
  }
}

// asks for special characters and appends them if yes
function specChar() {
  sChar = confirm("Would you like your password to contain SPECIAL characters?");
  if (sChar) {
    alert("Your password WILL contain special characters!");
    blankPassword += specs;
  } else {
    alert("Your password WILL NOT contain special characters!");
  }
}

// resets blankPassword to blank after user generates a password in case they wish to change criteria
// sets password to blank so newly generated passwords dont stack on top of one another
function generatePassword() {
  blankPassword = "";
  password = "";
  passLength();

  // selects a random character from the blankPassword variable for number of characters selected and returns password generated
  for (i = 0; i < pLength; i++) {
    password += blankPassword.charAt(Math.floor((Math.random() * blankPassword.length)));
  }
  return password;
}


// on clicking of the generate button, runs function writePassword
generateBtn.addEventListener("click", writePassword);

