var toAbout = $("#toAbout");
var fromAbout = $("#fromAbout");

fromAbout.click(function(){
  $('html,body').animate({

      scrollTop: toAbout.offset().top-120
  },1500);
})
var toContact = $("#toContact");
var fromContact = $("#fromContact");

fromContact.click(function(){
  $('html,body').animate({

      scrollTop: toContact.offset().top-150
  },1500);
})

var toHome = $("#toHome");
var fromHome = $("#fromHome");

fromHome.click(function(){
  $('html,body').animate({

      scrollTop: toHome.offset().top
  },1500);
})
