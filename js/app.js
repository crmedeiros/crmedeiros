
/* Mostra e oculta a barra */

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop > 50){
	$('.barra_menu').addClass('ativa');

} else{
 	$('.barra_menu').removeClass('ativa');
};
});



/* Menu */

$('.btn_menu').click(function(){
	$('.menu').toggleClass('opened_menu');
	$('.btn_menu').toggleClass('opened_menu');
});

/* Animação */

      AOS.init({
        easing: 'ease-in-out-sine'
      });

      setInterval(addItem, 300);

      var itemsCounter = 1;
      var container = document.getElementById('aos-demo');

      function addItem () {
        if (itemsCounter > 42) return;
        var item = document.createElement('div');
        item.classList.add('aos-item');
        item.setAttribute('data-aos', 'fade-up');
        item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
        container.appendChild(item);
        itemsCounter++;
      }

