
//Smooth Scroll Start
var toTop = $("body");
var fromTop = $("#fromTop");

fromTop.click(function(){
  $('html,body').animate({
      scrollTop: toTop.offset().top
  },1500);
});
//Smooth Scroll End
$(".hero__button").on("click", function(){

    $(".content").toggleClass("active");
    setTimeout(function(){
      $(".content").toggleClass("active"); }, 3000);
});
    // $("[data-text-to-replace]").each(function () {
    //   var toReplace = $(this).data("text-to-replace");
    //   var currentElement = $(this);
    //   console.log("Current" + currentElement);
    //   if (true) {
    //
    //   }
    //   currentElement.html(currentElement.html().);
    // });
    // console.log($(".content").find('*'));
    // var all = $(".content").find('*');
    // $(all).each(function(){
    //   $(this).text($(this).text().replace("ipsum","kurwa"));
    // console.log($(this).html());
    //
    //   for (var i = 0; i < $(this).html().length; i++) {
    //     return $(this).html().replace("ipsum", "<span style='background-color:red;'>ipsum</span>");
    //   }
    //   var one = $(this).text();
    //
    // } else {
    //   return $(this).html().replace("<span style='background-color:red;'>ipsum</span>", "ipsum");
    //
    // }
    // console.log($(this).text());
// });


$(".content__news-more").on("click", function(){
  $(this).parent().children(".content__text-long").slideToggle("fast",function() {
  });
  $(this).parent().toggleClass("height-auto");
});


function showFormData(){
  var text = "";
  $(".contact__form-left").children("input").each(function(){
    var name = $(this).attr("name");
    var val = $(this).val();
    text = text+name+": "+val+"\n";
  });
  $(".contact__form-right").children("textarea").each(function(){
    var name = $(this).attr("name");
    var val = $(this).val();
    text = text+name+": "+val+"\n";
  });
  alert("Dziękujemy za wysłanie formularza z następującymi danymi:"+"\n"+text);
}
