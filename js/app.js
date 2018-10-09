
/* Mostra e oculta a barra */

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop > 1000){
	$('.barra_menu').addClass('ativa');

} else{
 	$('.barra_menu').removeClass('ativa');
};
});


/* Mostra e oculta botão scroll */

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop > 10){
  $('.scroll-btn').addClass('d-none');

} else{
  $('.scroll-btn').removeClass('d-none');
};
});

/* Animação Títulos */

var $target = $('.anime'),
    animatioClass = 'anime-start',
    offset = $(window).height() * 3/4;

function animeScroll() {
  var documentTop = $(document).scrollTop();

  $target.each(function(){
    var itemTop = $(this).position().top;
    if(documentTop > itemTop - offset) {
      $(this).addClass(animatioClass);
      console.log($(this),documentTop,offset);
    } else {
      $(this).addClass(animatioClass);
    }
  })
}

animeScroll();

$(document).scroll(function(){
  animeScroll();
});


/* Menu */

$('.btn_menu').click(function(){
	$('.menu').toggleClass('opened_menu');
	$('.btn_menu').toggleClass('opened_menu');
});


