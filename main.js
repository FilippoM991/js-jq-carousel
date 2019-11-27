$(document).ready(function(){
    $(".successivo").click(function(){
        var fotoCorrente = $("img.active");
        var fotoSuccessiva = fotoCorrente.next("img");
        if (fotoSuccessiva.length == 0) {
            fotoSuccessiva = $("img.first");
        }
        fotoCorrente.removeClass("active");
        fotoSuccessiva.addClass("active");
    })
    $(".precedente").click(function(){
        var fotoCorrente = $("img.active");
        var fotoPrecedente = fotoCorrente.prev("img");
        if (fotoPrecedente.length == 0) {
            fotoPrecedente = $("img.last");
        }
        fotoCorrente.removeClass("active");
        fotoPrecedente.addClass("active");
    })








})
