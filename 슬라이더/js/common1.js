$(document).ready(function(){

    // 좌우 버튼 클릭시 한방향으로 슬라이딩
    $('.rightBtn').click(function(){
        $('#sliderList').animate({
            'margin-left' : '-100%'
        },function(){
            $(this).append($('>li:first',this)).css({marginLeft:0})
        })
    })

    $('.leftBtn').click(function(){
        $('#sliderList').prepend($('#sliderList li:last')).css({
            marginLeft : '-100%'
        }).animate({
            'margin-left' : 0
        });
    })

    var timing = setInterval(function(){
        $('.rightBtn').click();
    },2000)
    // 자동 슬라이더
    $('#btn a, #btnNum a').hover(function(){
        clearInterval(timing)
    },function(){
        timing = setInterval(function(){
            $('.rightBtn').click();
        },2000)
    })
    
    var secondNum,thirdNum;
    $('#btnNum a').click(function(){
        var num = $(this).text();
        var pos = $('#sliderList .slider' + num).position().left;
        if(num == 1){
            secondNum = 2;
            thirdNum = 3;
        }
        if(num == 2){
            secondNum = 3;
            thirdNum = 1;
        }
        if(num == 3){
            secondNum = 1;
            thirdNum = 2;
        }
        $('#sliderList').animate({
            marginLeft : -pos
        },function(){
            $('#sliderList').append($('.slider'+secondNum)).append($('.slider'+thirdNum))
            $(this).css({marginLeft : 0})
        })
    })

    /*
    $('#btnNum a:eq(0)').click(function(){
        var pos = $('#sliderList li[class="slider1"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos
        },function(){
            $(this).append($('.slider2')).append($('.slider3'))
            $(this).css({marginLeft : 0})
        })
    })

    $('#btnNum a:eq(1)').click(function(){
        var pos = $('#sliderList li[class="slider2"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos
        },function(){
            $(this).append($('.slider3')).append($('.slider1'))
            $(this).css({marginLeft : 0})
        })
    })

    $('#btnNum a:eq(2)').click(function(){
        var pos = $('#sliderList li[class="slider3"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos
        },function(){
            $(this).append($('.slider1')).append($('.slider2'))
            $(this).css({marginLeft : 0})
        })
    })
    */

})