function toshare(){
    $(".am-share").show();
    if($(".sharebg").length>0){
        $(".sharebg").addClass("sharebg-active");
    }else{
        $("body").append('<div class="sharebg"></div>');
        $(".sharebg").addClass("sharebg-active");
    }
    document.documentElement.style.overflow='hidden';
    document.body.style.overflow='hidden';
    $(".sharebg-active,.share_btn").click(function(){
        $(".am-share").hide();
        setTimeout(function(){
            $(".sharebg-active").removeClass("sharebg-active");
            $(".sharebg").remove();
        },300);
        document.documentElement.style.overflow='auto';
        document.body.style.overflow='auto';
    })
}
