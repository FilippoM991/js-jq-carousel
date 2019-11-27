$(document).ready(function(){
    $(".successivo i").click(function(){
        var fotoCorrente = $("img.active");
        var fotoSuccessiva = fotoCorrente.next("img");
        if (fotoSuccessiva.length == 0) {
            fotoSuccessiva = $("img.first");
        }
        fotoCorrente.removeClass("active");
        fotoSuccessiva.addClass("active");
        var pallinoCorrente = $("i.active");
        var pallinoSuccessivo = pallinoCorrente.next("i");
        if (pallinoSuccessivo.length == 0) {
            pallinoSuccessivo = $("i.first");
        }
        pallinoCorrente.removeClass("active");
        pallinoSuccessivo.addClass("active");
    })
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
    })








})
