function isEven(firstNumber)
{
  console.log(firstNumber);
  if (firstNumber%2 === 0)
  {
    alert("true");
    return "true";
  }
  else {
    alert("false");
    return "false";
  }
}

function factorial(secondNumber)
{
  var y = 1;
  // if (secondNumber != 0)
  // {
  //   for (var i = 1; i <= secondNumber; i++)
  //   {
  //     y = i * y;
  //   }
  //   console.log("przed y");
  //   alert(y+"cos ze srodka");
  //   return y+"cos ze srodka";
  //   console.log("po forze");
  // }
  // else
  // {
  //
  //   alert("chyba 1");
  //   return "chyba 1";
  // }
  for (var i = 2; i <= secondNumber; i++)
  {
    y = y*i;
  }
  alert(y);
  return y;
}
