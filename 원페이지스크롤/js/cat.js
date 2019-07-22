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
            console.log(prevIndex)
            if(prevIndex < 2){
                prevIndex = 2
            }else{
                $('#gnb li').removeClass('on');
                $('#gnb li:eq(' + (prevIndex-2) + ')').addClass('on');
            }
        }else if(delta < 0){ // 휠을 내렸을 경우
            var next = $(this).next().position().top
            $('html,body').stop().animate({
                scrollTop : next
            })

            var nextIndex = $(this).index();
            console.log(nextIndex)
            if(nextIndex > 2){
                nextIndex = 2
            }else{
                $('#gnb li').removeClass('on');
                $('#gnb li:eq(' + nextIndex + ')').addClass('on');
            }
        }
    })
})