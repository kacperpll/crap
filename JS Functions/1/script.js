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

function kebabToSnake()
{
  var x = document.getElementById("string").value;
  if(x.indexOf("-") === -1 || x.length < 3 || x[0] === "-" || x[x.length-1] === "-")
  {
    alert("Kebab-cased string has to have at least 2 letters and - in middle!");
  }
  else
  {
    for (i = 0; i < x.length; i++)
    {
      if(x[i] === "-")
      {
        var a = x.slice(0, i);
        var b = x.slice(i+1);
        x = a+"_"+b;
        alert(x);
        i = x.lenght;
      }
    }
  }
}
