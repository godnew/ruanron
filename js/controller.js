/**
 * Created by nhy on 2016/8/22.
 */
// CONTROLLERS ============================================
// home page controller
animateApp.controller('HomeController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-home';
    $(".home-content-contain").hover(function(){
        $(this).find(".home-content-intro").fadeIn();
    },function(){
        $(this).find(".home-content-intro").fadeOut();
    });
});

// contact page controller
animateApp.controller('JavaController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-java';
    $(".java-team li").hover(function(){
        var imgurl=$(this).find("img").attr("src");
        var arr=imgurl.split(".");
        arr[0]=arr[0]+"_on";
        imgurl=arr.join(".");
        $(this).find("img").attr("src",imgurl);
    },function(){
        var imgurl=$(this).find("img").attr("src");
        var arr=imgurl.split("_on");
        imgurl=arr.join("");
        $(this).find("img").attr("src",imgurl);
    });
    $('.java-phone').click(function(){
        $(".java-p1").show();
        $(".java-p2").hide();
        $(".java-p3").hide();
    });
    $('.java-weixin').click(function(){
        $(".java-p1").hide();
        $(".java-p2").show();
        $(".java-p3").hide();
    });
    $('.java-pc').click(function(){
        $(".java-p1").hide();
        $(".java-p2").hide();
        $(".java-p3").show();
    });
});
animateApp.controller('PhpController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-php';
    var count=0;
    function slide(){
        if(count>3) count=0;
        $(".php-banner-li").removeClass("php-position");
        $(".php-banner-li").eq(count).addClass("php-position");
        $(".slider").removeClass("slider-active");
        $(".slider").eq(count).addClass("slider-active");
        count++;
    }
    var slider=setInterval(slide,2000);

});
animateApp.controller('UiController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-ui';
    $scope.jump = {
        uiEmploy:function(){anchorScroll.toView('#uiEmploy', true)},
        uiAdvantage:function(){anchorScroll.toView('#uiAdvantage', true)},
        uiArrange:function(){anchorScroll.toView('#uiArrange', true)},
        uiProject:function(){anchorScroll.toView('#uiProject', true)}
    };
    (function(){
        $(".uiProgress li").hover(function(){
            var index=$(this).find("img").attr("index");
            index="images/ui/ui_icon_active"+index+".png";
            $(this).find("img").attr("src",index);
            $(this).find("h1").show();
            $(this).find("h2").addClass("uiActive").end().find("p").addClass("uiActive");
        },function(){
            var index=$(this).find("img").attr("index");
            index="images/ui/ui_icon"+index+".png";
            $(this).find("img").attr("src",index);
            $(this).find("h1").hide();
            $(this).find("h2").removeClass("uiActive").end().find("p").removeClass("uiActive");
        });
    })();
});
