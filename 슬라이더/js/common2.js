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





    var opacity = 0;
    $("#btnNum a:eq(0)").on('click', function (e) {
        if ($("#sliderList .slider1").hasClass("on")) {
            opacity = 1;
        } else {
            opacity = 0;
            $("#sliderList .slider1:not(:animated)").addClass('on')
                .css({
                    opacity: opacity
                })
                .animate({
                    opacity: 1
                }, 300, function () {
                    $("#sliderList li").not($(this)).removeClass('on');
                    $("#sliderList").append($("#sliderList .slider2"))
                        .append($("#sliderList .slider3"))
                })
        }
        e.preventDefault();
    })

    $("#btnNum a:eq(1)").on('click', function (e) {
        if ($("#sliderList .slider2").hasClass("on")) {
            opacity = 1;
        } else {
            opacity = 0;
            $("#sliderList .slider2:not(:animated)").addClass('on')
                .css({
                    opacity: 0
                })
                .animate({
                    opacity: 1
                }, 300, function () {
                    $("#sliderList li").not($(this)).removeClass('on');
                    $("#sliderList").append($("#sliderList .slider3"))
                        .append($("#sliderList .slider1"))
                })
        }
        e.preventDefault();
    })

    $("#btnNum a:eq(2)").on('click', function (e) {

        if ($("#sliderList .slider3").hasClass("on")) {
            opacity = 1;
        } else {
            opacity = 0;
            $("#sliderList .slider3:not(:animated)").addClass('on')
                .css({
                    opacity: 0
                })
                .animate({
                    opacity: 1
                }, 300, function () {
                    $("#sliderList li").not($(this)).removeClass('on');
                    $("#sliderList").append($("#sliderList .slider1"))
                        .append($("#sliderList .slider2"))
                })
        }
        e.preventDefault();
    })






















})



