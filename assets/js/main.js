$(document).ready(function(){

    $('.left').mouseenter(function(){
        $('.container').addClass('left-is-hoverd');
    });
    $('.left').mouseleave(function(){
        $('.container').removeClass('left-is-hoverd');
    });
    

    $('.right').mouseenter(function(){
        $('.container').addClass('right-is-hoverd');
    });
    $('.right').mouseleave(function(){
        $('.container').removeClass('right-is-hoverd');
    });

});