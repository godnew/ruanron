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
    $scope.jump = {
        target:function(){anchorScroll.toView('#hometarget', true)},
    };
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
        $(this).addClass("java-active").siblings().removeClass("java-active");
    });
    $('.java-weixin').click(function(){
        $(".java-p1").hide();
        $(".java-p2").show();
        $(".java-p3").hide();
        $(this).addClass("java-active").siblings().removeClass("java-active");
    });
    $('.java-pc').click(function(){
        $(".java-p1").hide();
        $(".java-p2").hide();
        $(".java-p3").show();
        $(this).addClass("java-active").siblings().removeClass("java-active");
    });
    $(".java-example-content li").hover(function(){
        $(this).find(".java-example-intro").show();
    },function(){
        $(this).find(".java-example-intro").hide();
    });
    $scope.jump = {
        target:function(){anchorScroll.toView('#javatarget', true)},
    };
});
animateApp.controller('PhpController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-php';
    $(".php-banner-li").click(function(){
        $(this).addClass("php-position").siblings().removeClass("php-position");
        var count=$(this).attr("index");
        $(".slider").removeClass("slider-active");
        $(".slider").eq(count).addClass("slider-active");
        var id=".php-content"+count;
        $(".php-content").hide().filter(id).show();
    });

});
animateApp.controller('UiController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-ui';
    $scope.jump = {
        target:function(){anchorScroll.toView('#uitarget', true)},
    };
});
