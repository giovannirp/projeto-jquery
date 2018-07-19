$(function(){
    $('.icone').hover(function(){
        $(this).animate({
            "width":100,
            "heigth":100,
            "margin-top":-30
        }, 200);
    }, function(){
        $(this).animate({
            "width":70,
            "heigth":70,
            "margin-top":0
        }, 500);
    });
});