
// significa que la funcion va a comenzar a procesarce cuando cargue
// todo el documento

$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); aparece brusco es muy facil
        // hay q sacar el left -100% del css en header nav

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

