$(document).ready(function(){
    // creo variabile che varierà e a cui farò riferimento per la posizione
	var current_img=0;
    $('.pallino').click(function(){
        // si inizia con il primo pallino e la prima immagine con active grazie alle classi omonime assegante, quindi si partirà sempre da current_img = 0 ,si toglie l active al pallino e si mette su quello selezionato..usiamo eq()!!
		$('.pallino').eq(current_img).removeClass('active');
		$(this).addClass("active");
        // si nasconde l' immagine che inizialmente è la prima
		$('img').eq(current_img).removeClass("active");
        // è il momento di far variare current_img, abbiamo dato dei numeri ai pallini grazie a data-num=..current_img prende il nuovo valore dato dal data num selezionato
		current_img=$(this).data('num')-1;
        // di da la classe active all img nella posizione di current img
		$('img').eq(current_img).addClass("active");
	});
    // lavoriamo sulle frecce, prima la destra
    $(".successivo i").click(function(){
        var fotoCorrente = $("img.active");
        var fotoSuccessiva = fotoCorrente.next("img");
        // devo valutare se l img successiva esiste, in caso contrario riparto dalla prima,poi faro l incontrario per il precedente..sfrutto le classi first e last assegnate.. uso .length per valutare l esistenza!!!
        if (fotoSuccessiva.length == 0) {
            fotoSuccessiva = $("img.first");
        }
        fotoCorrente.removeClass("active");
        fotoSuccessiva.addClass("active");
        // faccio la stessa cosa con i pallini
        var pallinoCorrente = $("i.active");
        var pallinoSuccessivo = pallinoCorrente.next("i");
        if (pallinoSuccessivo.length == 0) {
            pallinoSuccessivo = $("i.first");
        }
        pallinoCorrente.removeClass("active");
        pallinoSuccessivo.addClass("active");
        // faccio variare anche qui l avariabile creata sopra per allinere i cambiamenti di frecce e pallini...vorrei tornare indietro nel tempo e dirlo al me stesso di un ora fa!!!
        if(current_img<3)
			current_img++;
		else
			current_img=0;

    })
    // faccio le stesse cose per l altra freccia e pallini precedenti
    $(".precedente i").click(function(){
        var fotoCorrente = $("img.active");
        var fotoPrecedente = fotoCorrente.prev("img");
        if (fotoPrecedente.length == 0) {
            fotoPrecedente = $("img.last");
        }
        fotoCorrente.removeClass("active");
        fotoPrecedente.addClass("active");
        var pallinoCorrente = $("i.active");
        var pallinoPrecedente = pallinoCorrente.prev("i");
        if (pallinoPrecedente.length == 0) {
            pallinoPrecedente = $("i.last");
        }
        pallinoCorrente.removeClass("active");
        pallinoPrecedente.addClass("active");
        if(current_img>0)
			current_img--;
		else
			current_img=3;
    })
})
