
/* Mostra e oculta a barra na home */



$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop < 75 && $('.barra_menu').hasClass('barra_home')){
  $('.barra_menu').addClass('inativa');

}else if(scrollTop > 75 && scrollTop < 950 && $('.barra_menu').hasClass('barra_home') ){
  $('.barra_menu').addClass('black');
  $('.barra_menu').removeClass('inativa');

}else if(scrollTop > 950 && $('.barra_menu').hasClass('barra_home') ){
  $('.barra_menu').removeClass('black');
  $('.barra_menu').addClass('ativa');

}else if(scrollTop > 75 && $('.barra_menu').hasClass('barra_interna') ){
  $('.barra_menu').removeClass('inativa');
  $('.barra_menu').addClass('ativa');

}else{
  $('.barra_menu').addClass('inativa');
  $('.barra_menu').removeClass('black');
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


/* Menu */

$('.btn_menu').click(function(){
	$('.menu').toggleClass('opened_menu');
	$('.btn_menu').toggleClass('opened_menu');
});


