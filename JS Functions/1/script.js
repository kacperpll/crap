function isEven()
{
  var firstNumber = document.getElementById("firstNumber").value;
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

function factorial()
{
  var x = 1;
  var y = document.getElementById("secondNumber").value;
  if (y != 0)
  {
    for (i = 1; i <= y; i++)
    {
      x = i * x;
    }
    alert(x);
    return x;
  }
  else
  {

    alert("1");
    return "1";
  }
}
