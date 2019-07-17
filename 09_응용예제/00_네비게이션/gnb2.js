// 초기설정
$("#gnb ul").hide();

// 메뉴롤오버
$("#gnb li").hover(function() {
    $(this).children("ul").fadeIn();
}, function() {
    $(this).children("ul").stop().fadeOut();
})
