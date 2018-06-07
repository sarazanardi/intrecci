var image = document.getElementById('pic')
var button = document.getElementById('show');

// how to write an alert
//$(".prev").click(function(){
  //alert("")
//});



$(document).ready(function(){
  $('.next').click(function(){
    var thisImg = $('.active');
    var nextImg = thisImg.next();

    if(nextImg.length){
      thisImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  $('.prev').click(function(){
    var thisImg = $('.active');
    var prevImg = thisImg.prev();

    if(prevImg.length){
      thisImg.removeClass('active');
      //how to style single CSS property:
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});

$(".img9").click( function () {
  $(this).toggleClass("slideshow")
  $(".img10, .img11").toggleClass("noshow")
})

$(".img10").click( function () {
  $(this).toggleClass("slideshow")
  $(".img9, .img11").toggleClass("noshow")
})

$(".img11").click( function () {
  $(this).toggleClass("slideshow")
  $(".img10, .img9").toggleClass("noshow")
})

$(".img17").click( function () {
  $(this).toggleClass("slideshow")
  $(".img18, .img19").toggleClass("noshow")
})

$(".img18").click( function () {
  $(this).toggleClass("slideshow")
  $(".img19, .img17").toggleClass("noshow")
})

$(".img19").click( function () {
  $(this).toggleClass("slideshow")
  $(".img18, .img17").toggleClass("noshow")
})

$(".img15").click( function () {
  $(this).toggleClass("slideshow")
  $(".img13, .img14").toggleClass("noshow")
})

$(".img13").click( function () {
  $(this).toggleClass("slideshow")
  $(".img15, .img14").toggleClass("noshow")
})

$(".img14").click( function () {
  $(this).toggleClass("slideshow")
  $(".img13, .img15").toggleClass("noshow")
})

$(".img21").click( function () {
  $(this).toggleClass("slideshow")
  $(".img22, .img23").toggleClass("noshow")
})

$(".img22").click( function () {
  $(this).toggleClass("slideshow")
  $(".img21, .img23").toggleClass("noshow")
})

$(".img23").click( function () {
  $(this).toggleClass("slideshow")
  $(".img21, .img22").toggleClass("noshow")
})

$(".img29").click( function () {
  $(this).toggleClass("slideshow")
  $(".img30, .img31").toggleClass("noshow")
})

$(".img30").click( function () {
  $(this).toggleClass("slideshow")
  $(".img29, .img31").toggleClass("noshow")
})

$(".img31").click( function () {
  $(this).toggleClass("slideshow")
  $(".img30, .img29").toggleClass("noshow")
})

$(".img25").click( function () {
  $(this).toggleClass("slideshow")
  $(".img26, .img27").toggleClass("noshow")
})

$(".img26").click( function () {
  $(this).toggleClass("slideshow")
  $(".img25, .img27").toggleClass("noshow")
})

$(".img27").click( function () {
  $(this).toggleClass("slideshow")
  $(".img25, .img26").toggleClass("noshow")
})
