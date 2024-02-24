// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


let generateBtn = document.querySelector("#generate");

function generateRandomPassword(length) {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
  let password = "";
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  // Validate the length input
  if (length === null || isNaN(length) || length === "" || length < 8 || length > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return;
  }
  
  var includeLowercase = confirm("Confirm if you used lowercase characters:");
  var includeUppercase = confirm("Confirm if you used uppercase characters:");
  var includeNumeric = confirm("Confirm if you used numerical characters:");
  var includeSpecial = confirm("Confirm if you used special characters:");
  
  // Validates that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected.");
    return;
  }
  
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecial) charset += "!@#$%^&*()_+{}[]|;:,.<>?";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function writePassword() {
  let password = generateRandomPassword(length);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

