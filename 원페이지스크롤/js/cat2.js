$('#gnb li').on('click',function(e){
    var idName = $(this).children('a').attr('href');
    $('html,body').stop().animate({
        scrollTop : $(idName).position().top
    },1000)
    e.preventDefault();
})

$('section').each(function(){
    var $bg = $(this);
    $(window).on('scroll',function(){
        var yPos = $(window).scrollTop() / $bg.data('speed')
        console.log(yPos);
        
        var bgPos = "50% " + -yPos + "px";
        $bg.css({
           backgroundPosition : bgPos
        })
    })
})