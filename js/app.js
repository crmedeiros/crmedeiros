
/* Mostra e oculta a barra */

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop > 50){
	$('.barra_menu').addClass('ativa');

} else{
 	$('.barra_menu').removeClass('ativa');
};
});

/* Animação Títulos */

var $target = $('.anime'),
    animatioClass = 'anime-start',
    offset = $(window).height() * 3/4;

function animeScroll() {
  var documentTop = $(document).scrollTop();

  $target.each(function(){
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - offset) {
      $(this).addClass(animatioClass);
    } else {
      $(this).addClass(removeClass);
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


