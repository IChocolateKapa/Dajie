/**
 * Created by hpwu on 2015/7/3.
 */



$(function(){
    var scrollTop = $(window).scrollTop();
    setStatus(scrollTop);

    /*给侧边栏小图标 返回顶部 绑定事件 --开始*/
    $("#goTop").bind("click", function(){
        $(window).scrollTop(0);
    })
    /*给侧边栏小图标 返回顶部 绑定事件 --结束*/

    /*给侧边栏小图标 意见反馈 绑定事件 --开始*/
    $("#response").click(function(){
        $(".floatBar").addClass("_showFloat");
    })

    $(".closeX").click(function(){
        $(".floatBar").removeClass("_showFloat");
    })
    /*给侧边栏小图标 意见反馈 绑定事件 --结束*/
})


$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    setStatus(scrollTop);
})
