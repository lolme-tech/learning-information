//var $main=$('#main');
//$('#main').css("font-size","30px");
//$main.css("color","blue");
$(function(){
    $('.profile').hover(function(){
        $(this).html("工事中").css("color","red");
    },function(){
        $(this).html('自己紹介').css('color','#808080');
    });
});