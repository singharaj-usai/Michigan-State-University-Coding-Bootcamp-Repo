//var passwordBtnEl = $('.password-btn');
var passwordBtnEl = $('#password-btn'); // Correct one <-, use # instead of .
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

//passwordBtnEl.on('dblclick', function () {
passwordBtnEl.on('click', function () {  // <- change dblclick to click to single click
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
