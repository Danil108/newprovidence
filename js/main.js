$(document).ready(function(){
  
$('.moko').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: false,
	  responsive: [
	    {
	      breakpoint: 800,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1,
	        centerMode: true
	        
	      }
	    }
	  ]
});

/*=====переключатель=====*/

$('.test').on('click', function() {
  $(this).toggleClass('clicked');
});


$('.menu').click(function () {
    $('.dropdown').hide();
    $(this).next().show();
    return false;
});
$('body, .dropdown a').click(function () {
    $('.dropdown').hide();
});
$('.dropdown a').click(function () {
    // TODO: Что-то сделать
});
});

