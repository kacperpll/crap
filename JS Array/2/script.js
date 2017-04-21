// var table = ["a", "b", "c", "d"];
// console.log(table.length);
// var dlugosc = table.length-1;


function printReverse(arr)
{
  for (var i = arr.length-1; i >= 0; i--)
  {
    console.log(arr[i]);
  }
}

function isUniform(arr)
{
  var sprawdz = 1;
  for (var i = 0; i <= arr.length-2; i++)
  {
    if (arr[i]===arr[i+1])
    {
      sprawdz = 1;
    }
    else
    {
      sprawdz = 0;
    }
  }
  if (sprawdz === 1)
  {
    console.log("true");
  }
  else
  {
    console.log("false");
  }
}
function sumArray(arr)
{
  var wynik = 0;
  for (var i = 0; i <= arr.length-1; i++)
  {
    wynik = wynik + arr[i];
  }
  console.log(wynik);
}

function max(arr)
{
  var win = arr[0];
  for (var i = 0; i <= arr.length-2; i++)
  {
    if (win<arr[i+1])
    {
      win = arr[i+1];
    }
  }
  console.log(win);
}
