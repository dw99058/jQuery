$(document).ready(function(){

    $('#header a').click(function(){
        $('html,body').animate({
            //scrollTop : $('#content1').position().top - 100
            scrollTop : $('#header').height()
        })
    })

    $(window).scroll(function(){
        if($(window).scrollTop() >= $('#header').height()){
            $('#gnb').css({
                "position" : "fixed"
            }).addClass('effect')
        }else{
            $('#gnb').css({
                "position" : "absolute"
            }).removeClass('effect')
        }
    })

    $('#gnb li').click(function(){
        // var idx = $(this).index()+1;
        // $('html,body').stop().animate({
        //     scrollTop : $('#content'+idx).position().top
        // })

        var idName = $(this).children('a').attr('href');
        var pagePos = $(idName).position().top;
        $('html,body').animate({
            scrollTop : pagePos
        })
        return false;
    })
})