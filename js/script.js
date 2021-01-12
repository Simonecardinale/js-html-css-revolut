$(document).ready(function () {
    $('.container_right .menu_right li:not(.menu_right li:last-child)').hover(function(){
        $(this).children().toggleClass('display_block');
    });
    $('.box').hover(function(){
        $(this).children().toggleClass('display_block');
    });
});

