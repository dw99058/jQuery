$(document).ready(function(){
    $('#gnb li').click(function(){
        var secName = $(this).children('a').attr('href');
        $('html,body').stop().animate({
            scrollTop : $(secName).position().top
        })
        $('#gnb li').removeClass('on');
        $(this).addClass('on');
    })

    $('section').on('mousewheel',function(event,delta){
        if(delta > 0){ //휠을 올렸을 경우
            var prev = $(this).prev().position().top
            $('html,body').stop().animate({
                scrollTop : prev
            })

            var prevIndex = $(this).index();
            if(prevIndex < 0){
                prevIndex = 0
            }
        }else if(delta < 0){ // 휠을 내렸을 경우
            var next = $(this).next().position().top
            $('html,body').stop().animate({
                scrollTop : next
            })

            var nextIndex = $(this).index();
            if(nextIndex > 2){
                nextIndex = 2
            }
        }
    })
})