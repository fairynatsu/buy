/**
 * Created by Administrator on 2017/2/23.
 */
$(function () {
    $('.nav').on('click','li',function () {
        var more = $(this).index();
        if(more == 7){
            $('.nav>li:nth-last-child(-n+4)').toggle();
        }
    })
});




