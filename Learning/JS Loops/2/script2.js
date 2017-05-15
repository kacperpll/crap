var question = prompt("Are we there yet?");
var finish = 0;
while(finish === 0)
{

  if(question.indexOf("yes") === -1)
  {

    var question = String(prompt("Are we there yet?"));
  }
  else
  {

    alert("Yay, we finally made it!");
    finish++;
  }

}
console.log("wyszlismy");
// var answer = prompt("Are we there yet?");
//
// while (answer.indexOf("yes") === -1) {
//   var answer = prompt("Are we there yet?");
// }
//
// aler("Yay, we finally made it!");
