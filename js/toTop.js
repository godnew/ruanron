/**
 * Created by nhy on 2016/8/26.
 */
window.onload = function(){
    var oTop = document.getElementById("to_top");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    oTop.style.left = screenw - oTop.offsetWidth +"px";
    oTop.style.top = screenh - oTop.offsetHeight + "px";
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrolltop);
        if(scrolltop>100){
            $("#to_top").show();
        }else{
            $("#to_top").hide();
        }
    }
    oTop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    $(window).scroll( );
}
