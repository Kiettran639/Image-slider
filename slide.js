$(document).ready(function(){
    var num = 0;
    var startImg = $("img.slide:first").attr('num');
    var endImg = $("img.slide:last").attr('num');
    $("img.slide").each(function(){
        if($(this).is(':visible'))
            num = $(this).attr("num");
    });

    $("#next").click(function(){
        if(num == endImg){
            num = -1;
        }
        next = ++num;
        $("img.slide").hide();
        $("img.slide").eq(next).show();
    });

    $("#prev").click(function(){
        if(num == 0){
            num = endImg;
        }
        prev = --num;
        $("img.slide").hide();
        $("img.slide").eq(prev).show();
    });
})