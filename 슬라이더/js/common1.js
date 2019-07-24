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

    // var timing = setInterval(function(){
    //     $('.rightBtn').click();
    // },2000)
    // // 자동 슬라이더
    // $('#btn a, #btnNum a').hover(function(){
    //     clearInterval(timing)
    // },function(){
    //     timing = setInterval(function(){
    //         $('.rightBtn').click();
    //     },2000)
    // })
    

    
    $('#btnNum a:eq(0)').click(function(){
        var pos1 = $('#sliderList li[class="slider1"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos1
        })
    })

    $('#btnNum a:eq(1)').click(function(){
        var pos2 = $('#sliderList li[class="slider2"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos2
        })
    })

    $('#btnNum a:eq(2)').click(function(){
        var pos3 = $('#sliderList li[class="slider3"]').position().left;
        $('#sliderList').animate({
            marginLeft : -pos3
        })
    })

})