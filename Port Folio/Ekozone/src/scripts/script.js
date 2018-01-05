
//Smooth Scroll Start
var toTop = $("body");
var toHome = $("#home");
var toOferta = $("#oferta");
var toCennik = $("#cennik");
var toKontakt = $("#kontakt");
var fromTop = $("#fromTop");
var fromHome = $("#fromHome");
var fromOferta = $("#fromOferta");
var fromCennik = $("#fromCennik");
var fromKontakt = $("#fromKontakt");

fromTop.click(function(){
  $('html,body').animate({
      scrollTop: toTop.offset().top
  },1500);
});
fromHome.click(function(){
  $('html,body').animate({
      scrollTop: toHome.offset().top
  },1500);
});
fromOferta.click(function(){
  $('html,body').animate({
      scrollTop: toOferta.offset().top
  },1500);
});
fromCennik.click(function(){
  $('html,body').animate({
      scrollTop: toCennik.offset().top
  },1500);
});
fromKontakt.click(function(){
  $('html,body').animate({
      scrollTop: toKontakt.offset().top
  },1500);
});
//Smooth Scroll End




$(".hero__button").on("click", function(){

    $(".content").toggleClass("active");
    setTimeout(function(){
      $(".content").toggleClass("active"); }, 3000);
});



$(".content__news-more").on("click", function(){
  $(this).parent().children(".content__text-long").slideToggle("fast",function() {
  });
  $(this).parent().toggleClass("height-auto");
});



if ( $(window).width() > 499 ) {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters

    slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
}
else {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters

    slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
}
