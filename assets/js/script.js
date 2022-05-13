// Assignment Code
var generateBtn = document.querySelector("#generate");

// initialize my variables
var passLength;
var passLower;
var passUpper;
var passNumeric;
var passSpecial;

// Write password to the #password input
function writePassword() {
  // Write Promts for user to specify Length
  passLength = prompt("Enter length of password (8-128 characters)");
  // Re-prompts user if the value entered is not in the specified range or isn't an integer
  while (passLength < 8 || passLength > 128 || passLength % 1 > 0) {
    passLength = prompt("Not a valid length.  Enter length of password (8-128 characters)");
  }
  // Make passLength into float
  passLength = parseFloat(passLength);
  // Confirms for user to specify addition of lowercase, uppercase, numeric, and/or special characters
  passLower = confirm("Include lowercase characters?");
  passUpper = confirm("Include uppercase characters?");
  passNumeric = confirm("Include numeric characters?");
  passSpecial = confirm("Include special characters?");

  // Calls function to generate random password
  var password = generatePassword();
  // writes password to textarea value
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function generates random password based on user criteria
function generatePassword() {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = lower.toUpperCase();
  lower = lower.split('');
  upper = upper.split('');
  // ask ta about the \ character
  let special = "!" + '"' + "#$%&'()*+,-./:;<=>?@[" + "\\" + "[]^_`{|}~";
  special = special.split('');
  let numeric = "0123456789";
  numeric = numeric.split('');

  // console check variables
  //   console.log(upper);
  //   console.log(lower);
  //   console.log(special);
    console.log(passLength);
  //   console.log(isNaN(passLength));
  //   console.log(passLower);
  //   console.log(passUpper);
  //   console.log(passSpecial);
  //   console.log(passNumeric);
  // }

  // code to generate character array depending on user criteria
  let myArray = [];
  if (passLower) {
    myArray = lower;
  }
  if (passUpper) {
    myArray = myArray.concat(upper);
  }
  if (passNumeric) {
    myArray = myArray.concat(numeric);
  }
  if (passSpecial) {
    myArray = myArray.concat(special);
  }

  console.log(myArray);
  let myPass = [];
  // for loop to generate password
  for (i=0; i<passLength; i++) {
    // Random float between 0 and 1
    let rand = Math.random();
    myIndex = Math.round(rand * myArray.length);
    myPass[i] = myArray[myIndex];
  }
  // Change myPass from array to string
  myPass = myPass.join('');
  console.log(myPass);
  return(myPass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
