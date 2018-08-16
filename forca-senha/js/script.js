$(function(){
    $("#senha").bind('keyup', function(){

        let txt = $(this).val();
        let forca = 0;

        //letras, numeros, caracteres especiais, min. de caracteres
        if(txt.length > 6){
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if(reg.test(txt)) {
            forca +=25;
        }

        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)) {
            forca +=25;
        }

        var reg = new RegExp(/[^a-z0-9]/i);
        if(reg.test(txt)) {
            forca +=25;
        }

        if(forca >= 75){
            var aceita = 'Aceita';
        } else {
            var aceita = 'Não aceita';
        }

        $("#forca").html('Força: ' + forca + ' ( '+txt+' ) - ' + aceita);
    });
});