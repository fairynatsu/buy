/**
 * Created by Administrator on 2017/2/23.
 */
$(function () {
    $('.category').on('click','li',function () {
        $(this).next('ul').slideToggle(200);
    })
});




