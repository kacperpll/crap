$("div").css("background", "purple");

$("div.highlight").css("width", "200px");

$("div#third").css("border", "2px solid orange");

$("div:first").css("color", "pink");

$("li").click(function(){
var text = $(this).text();
    console.log("You clicked " + text);
});

$("img").css("width", "250px");

$("input[type=text].first").keypress(function(event){
  if(event.which === 13)
  {
    $("input[type=text]").val("");
  }
});
$("h1").on("click", function()
{
  $(this).css("color", "purple");
});
$("input.second").on("keypress", function()
{
  console.log("pressed");
});

$("button").on("mouseenter", function()
{
  $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function()
{
  $(this).css("font-weight", "normal");
});
