/**
 * Created by Admin on 2017/6/2.
 */

/*页面加载完成2s过后让优惠券模态框显示，同时阻止底层滑动*/
window.onload = function(){
    setTimeout(function(){
        $('#ticketModal').addClass('block');//给优惠券模态框添加 ‘block’ class，让优惠券显示
        /*给html，body，.container 这个三个元素添加‘no-scroll’ 这个class，阻止底层滑动*/
        $('html').addClass('no-scroll');
        $('body').addClass('no-scroll');
        $('.container').addClass('no-scroll');
    },2000);
};

$(".modal .flex").click(function(){
    $(this).parent().removeClass("block");
});

$(".modal-content").click(function(e){
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
});

/*关闭优惠券模态框，同时让底层恢复可以滑动状态*/
function closeModal(){
    $('.close').click(function(){
        $('#ticketModal').removeClass('block');
        $('html').removeClass('no-scroll');
        $('body').removeClass('no-scroll');
        $('.container').removeClass('no-scroll');
    });
}
closeModal();
