var pOne = document.querySelector("#cos1");
var pTwo = document.querySelector("#cos2");
var scoreOne = 0;
var scoreTwo = 0;
var game = 5;
var wynik = 0;

pOne.addEventListener("click", function(){
  if (game>scoreOne&&game>scoreTwo) {
    scoreOne++;
    document.querySelector("#first").textContent = scoreOne;
    if (scoreOne == game) {
    document.querySelector("#first").style.color = "green";
    }
  }
})

// function addPlayerOne() {
//   if (game>scoreOne&&game>scoreTwo) {
//     scoreOne += 1;
//     document.querySelector("#first").textContent = scoreOne;
//     if (scoreOne == game) {
//     document.querySelector("#first").style.color = "green";
//     }
//   }
// }

function addPlayerTwo() {
  if (game>scoreOne&&game>scoreTwo) {
    scoreTwo += 1;
    document.querySelector("#second").textContent = scoreTwo;
    if (scoreTwo == game) {
      document.querySelector("#second").style.color = "green";
    }
  }
}
function reset(){
  scoreOne = scoreTwo = 0;
  // scoreTwo = 0;

  document.querySelector("#first").textContent = scoreOne;
  document.querySelector("#second").textContent = scoreTwo;
  document.querySelector("#in").value = null;
  document.querySelector("h3").textContent = "Playing to: 5";
  document.querySelector("#first").style.color = "black";
  document.querySelector("#second").style.color = "black";

}
function points()
{
  wynik = document.querySelector("#in").value;
  game = wynik;
  document.querySelector("h3").textContent = "Playing to: "+game;
}
