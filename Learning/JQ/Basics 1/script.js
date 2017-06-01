$("div").css("background", "purple");

$("div.highlight").css("width", "200px");

$("div#third").css("border", "2px solid orange");

$("div:first").css("color", "pink");

$("li").click(function(){
var text = $(this).text();
    console.log("You clicked " + text);
});

$("img").css("width", "250px");

$("input[type=text]").keypress(function(event){
  if(event.which === 13)
  {
    $("input[type=text]").val("");
  }
});
