var block = document.querySelectorAll(".block");
document.querySelectorAll(".block").forEach(function(block)
{
  red = Math.floor((Math.random() * 255) + 0);
  green = Math.floor((Math.random() * 255) + 0);
  blue = Math.floor((Math.random() * 255) + 0);
  color = "RGB("+red+","+green+","+blue+")";
  block.style.backgroundColor = color;
});
var wybor = pickColor();
var wygrana = document.getElementsByClassName("block")[wybor].style.backgroundColor;
var tekst = wygrana.substring(3);
document.querySelector("#kolor").textContent += " "+tekst;

Array.from(block).forEach(block=>
{
  block.addEventListener("click", function()
  {
    if (this.style.backgroundColor === wygrana)
    {
      document.querySelector("#stan").textContent = "Wygrałeś!"
      document.querySelectorAll(".block").forEach(function(block)
      {
        block.style.backgroundColor = wygrana;

      });
      document.querySelector("h1").backgroundColor === wygrana;
    }
    else
    {
      document.querySelector("#stan").textContent = "Źle, próbuj dalej..."
      this.style.backgroundColor = "black";
    }
  });
});

document.querySelector("#easy").addEventListener("click", function()
{

});

function pickColor()
{
  Math.floor((Math.random() * 5) + 0);
}
