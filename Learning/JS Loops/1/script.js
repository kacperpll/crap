//1.Print all numbers between -10 and 19

console.log("ZADANIE 1!");
var number = -10;

while(number<=19)
{
  console.log(number);
  number++;
}

console.log("ZADANIE 2!");
var number = 10;
while(number <= 40)
{
  if (number%2 === 0)
  {
      console.log(number);
  }
  number++;
}

console.log("ZADANIE 3!");
var number = 300;
while(number<=333)
{
  if (number%2 !== 0)
  {
      console.log(number);
  }
  number++;
}

console.log("ZADANIE 4!");
var number = 5;
while (number<=50)
{
    if (number%5 === 0 && number%3 === 0)
    {
      console.log(number);
    }
    number++;
}
