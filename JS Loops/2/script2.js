var question = prompt("Are we there yet?");
var finish = 0;
while(finish === 0)
{
  console.log("przed ifem");
  if(question.indexOf("yes") === -1)
  {
    console.log("w ifie");
    var question = String(prompt("Are we there yet?"));
  }
  else
  {
    console.log("w else");
    alert("Yay, we finally made it!");
    finish++;
  }
  console.log("po ifie");
}
console.log("wyszlismy");
// var answer = prompt("Are we there yet?");
//
// while (answer.indexOf("yes") === -1) {
//   var answer = prompt("Are we there yet?");
// }
//
// aler("Yay, we finally made it!");
