/**
 * Created by Admin on 2017/6/27.
 */
window.onload = function () {
    var deviceHeight, headerHeight, sectionHeight;

    deviceHeight = $(window).height();//屏幕高度

    headerHeight = $(".header").height() + parseInt($(".header").css("padding-top")) + parseInt($(".header").css("padding-bottom"));//头部高度
    sectionHeight = $(".main").height();//主体高度

    //键盘高度等于屏幕可视区域高度-（头部高度+主体高度）
    $(".keyboard").height(deviceHeight - (headerHeight + sectionHeight));
};

//点击切换国旗
function changeFlag() {
    $(".nation").click(function () {
        var src = $(".flag_img").attr("src");
        var dollar = $(".input_money .dollar");
        if(src=="img/icon_CHN.png"){
            $(".flag_img").attr("src","img/icon_AUS.png");
            dollar.html("$");
        }else{
            $(".flag_img").attr("src","img/icon_CHN.png");
            dollar.html("￥");
        }
    })
}
changeFlag();

//键盘事件
function clickKeyboard(el) {
    var html = $(el).html(),
        val = $("#num").html();
    if (html == '.') {
        if (val.indexOf('.') != -1) {
            return;
        }
    }
    if (!isNaN(html) || html == '.') {//绑定数字和‘.’
        if (val == '0.00' || val == '0') {
            val = html;
        } else {
            val += html;
        }
        if (val.length > 1 && val.slice(0, 1) == '0' && val.slice(0, 2) != '0.') {
            return;
        }
    } else if(html=="←"){//绑定删除
        val = val.substring(0, val.length - 1);
        if (val.length == 0) {
            val = '0';
        }
    } else if(html == "支付"){
        console.log("点击到支付啦");
    }
    if (val.indexOf('.') != -1) {
        val = val.substr(0, val.indexOf(".") + 3);
    }
    if (val == '.') {
        val = "0."
    }
    $("#num").html(val);
}

//关闭弹出框
function closeModal(el){
    $("#"+el).removeClass("block");
}

$(".modal .flex").click(function(){
    $(this).parent().removeClass("block");
});

$(".modal-content").click(function(e){
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
});
//显示优惠券弹出框
function showModal(){
    $(".agio-title").click(function(){
        $("#ticketModal").addClass("block")
    });
    $(".message").click(function(){
        $("#msgModal").addClass("block")
    })
}
showModal();

