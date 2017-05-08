 var p1 = document.querySelector(".special");
 var p2 = document.getElementById("first");
 var p3 = document.getElementsByClassName("special")[0];
 var p4 = document.querySelectorAll("#first");
 var p5 = document.getElementsByTagName("p")[0];
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
  if (h1.style.background == "orange") {
    h1.style.background = "blue";
  }
  else {
    h1.style.background = "orange";
  }
})
document.querySelector("ul").addEventListener("click",function(){
//  alert("clicked");
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    if(this.style.color == "purple")
    {
      this.style.color = "blue";
    }
    else {
      this.style.color = "purple";
    }
  })
}
var but = document.querySelector("button");
var body = document.querySelector("body");

//1 zielony,czerwony
but.addEventListener("click", function(){
  if (body.style.background == "green") {
    body.style.background = "red";
  }
  else {
    body.style.background = "green";
  }
})

//2 zielony,czerwony
// var isGreen = false;
// but.addEventListener("click", function(){
//   if (isGreen) {
//     body.style.background = "red";
//   }
//   else {
//     body.style.background = "green";
//   }
//   isGreen = !isGreen;
// })

//3 zielony,biały
// but.addEventListener("click", function(){
//     body.classList.toggle("green");
//   })
