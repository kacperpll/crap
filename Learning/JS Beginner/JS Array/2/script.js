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
  var first = arr[0];
  for (var i = 0; i <= arr.length-2; i++)
  {
    if (first===arr[i+1])
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
    return true;
  }
  else
  {
    return false;
  }
}

// SOLUTION FROM COURSE
// function isUniform(arr)
// {
//   var first = arr[0];
//   for (var i = 0; i <arr.length; i++) {
//     if (arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }
//Second solution
// function isUniform(arr)
// {
//   var first = arr[0];
//   arr.forEach(function(element){
//     if(element !== first){
//       return false
//     }
//   });
//   return true;
// }


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
