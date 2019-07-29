$(document).ready(function(){
    $('.snb').hide();

    $('.over').parent().show()


    $('.lnb li').mouseenter(function(){
        $('.over').parent().hide()
        $(this).children('ul').show()
    })
    $('.lnb li').mouseleave(function(){
        $(this).children('ul').hide()
        $('.over').parent().show()
    })





})