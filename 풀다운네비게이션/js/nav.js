$(document).ready(function(){
    $('.subTotal > li > a').mouseenter(function(){
      $('#header').stop().animate({
          height : 300
      })
    })
    $('#lnb').mouseleave(function(){
        $('#header').stop().animate({
            height : 80
        })
    })
})