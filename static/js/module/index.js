/**
 * Created by hpwu on 2015/7/3.
 */



$(function(){
    var scrollTop = $(window).scrollTop();
    setStatus(scrollTop);
})


$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    setStatus(scrollTop);
})
