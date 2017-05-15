var question = String(prompt("Are we there yet?"));
var finish = 0;
while(finish === 0)
{
  if(question === "yes" || question === "yeach")
  {
    alert("Yay, we finally made it!")
    finish++;
  }
  else
  {
    var question = String(prompt("Are we there yet?"));
  }
}
