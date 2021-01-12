$(document).ready(function () {
    $('.container_right .menu_right li:not(.download_cta)').hover(function(){
        $(this).children().toggleClass('display_block');
    });
    $('.box').hover(function(){
        $(this).children().toggleClass('display_block');
    });
});

