var mainNumber = 7;
var userNumber = prompt("Guess a number!");
var number = Number(userNumber);

if(mainNumber === number)
{
  alert("Thats right!!");
}
else if (mainNumber > number)
{
    alert("Bad answer! This number is too low!");
}
else
{
    alert("Bad answer! This number is too big!");
}
