var userFirstname = prompt("Whats your first name?");
var userLastname = prompt("Whats your last name?");
var userAge = prompt("How old are you " + userFirstname + "?");

console.log("Nice to meet you, " + userFirstname + " " + userLastname + ".");
console.log(userFirstname + " " + userLastname + " your age is " + userAge + ".");
var userAge = userAge*365.25;
console.log(userFirstname + " " + userLastname + " you are living on this world for about " + userAge + " days.");
