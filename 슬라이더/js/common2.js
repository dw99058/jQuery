$(document).ready(function(){

    $('.rightBtn').click(function(){
        $('#sliderList li:eq(1)').addClass('on').css({
            opacity : 0
        }).animate({
            opacity : 1
        },600,function(){
            $('#sliderList').append($('#sliderList li:first'));
            $('#sliderList li:last').removeClass('on');
        })
    })

    $('.leftBtn').click(function(){
        $('#sliderList li:last').addClass('on').css({
            opacity : 0
        }).animate({
            opacity : 1
        },600,function(){
            $("#sliderList").prepend($("#sliderList li:last"));
            $("#sliderList li:eq(1)").removeClass('on');
        })
    })

    // $('.rightBtn').click(function(){
    //     $('#sliderList li:first').fadeOut(600,function(){
    //         $('#sliderList').append($(this));
    //         $('#sliderList li:last').css({
    //             display : 'block',
    //             zIndex : 0
    //         });
    //     })
    // })
})