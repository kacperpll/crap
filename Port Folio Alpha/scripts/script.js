var toAbout = $("#toAbout");
var fromAbout = $("#fromAbout");

fromAbout.click(function(){
  $('html,body').animate({

      scrollTop: toAbout.offset().top
  },1500);
})
var toContact = $("#toContact");
var fromContact = $("#fromContact");

fromContact.click(function(){
  $('html,body').animate({

      scrollTop: toContact.offset().top
  },1500);
})

var firstScreen = $("#firstScreen");
var fromHome = $("#fromHome");

fromHome.click(function(){
  $('html,body').animate({

      scrollTop: firstScreen.offset().top
  },1500);
})
