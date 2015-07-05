/**
 * Created by hpwu on 2015/7/3.
 */

var setTimeOutFunction = function(callback){
    setTimeout(function(){callback}, 100);
}

$(function(){
    setTimeOutFunction($("#_showHead").addClass("slide_rotate"));
    var bodyHeight = $(window).height();
    console.log(bodyHeight);
    if(bodyHeight > 900){
        setTimeOutFunction($("#_firstHead").addClass("scale"));
        setTimeOutFunction($("#_secondHead").addClass("scale"));
    }
})


$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if(scrollTop >= 0 && scrollTop < 150){
        setTimeOutFunction($("#_showHead").addClass("slide_rotate"));
    } else if(scrollTop >= 150 && scrollTop <= 980){
        setTimeOutFunction($("#_firstHead").addClass("scale"));
        setTimeOutFunction($("#_secondHead").addClass("scale"));
    }
})
