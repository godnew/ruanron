/**
 * Created by nhy on 2016/8/22.
 */
// CONTROLLERS ============================================
// home page controller
animateApp.controller('HomeController', function($scope,anchorScroll) {
    (function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });
    })();

    $scope.pageClass = 'page-home';
    $scope.active=false;
    $scope.topActive=false;
    $scope.jump = {
        homeClass:function(){anchorScroll.toView('#homeClass', true)},
        homeTeacher:function(){anchorScroll.toView('#homeTeacher', true)},
        homeLearn:function(){anchorScroll.toView('#homeLearn', true)},
        homeAbout:function(){anchorScroll.toView("#homeAbout",true)}
    };
    (function(){
        $(function(){
            var newopt={
                w2:"410",//小图宽度
                h2:"360"//小图高度
            };
            home_slide($(".container_image"),newopt);
            $(".homeCourseLink").hover(function(){
                $(this).find("h1").addClass("home-course-h1-active");
                $(this).find("p").addClass("home-course-p-active");
                $(this).find("span").addClass("home-course-button-active");
                $(this).find('.homeCourseIntro').addClass("home-course-active");
            },function(){
                $(this).find("h1").removeClass("home-course-h1-active");
                $(this).find("p").removeClass("home-course-p-active");
                $(this).find("span").removeClass("home-course-button-active");
                $(this).find('.homeCourseIntro').removeClass("home-course-active");
            });
        });
    })();
});

// about page controller
animateApp.controller('CController', function($scope,$window,anchorScroll) {

    $scope.pageClass = 'page-c';
    $scope.jump = {
        cEmploy:function(){anchorScroll.toView('#cEmploy', true)},
        cAdvantage:function(){anchorScroll.toView('#cAdvantage', true)},
        cProject:function(){anchorScroll.toView('#cProject', true)},
        cCooperative:function(){anchorScroll.toView("#cCooperative",true)}
    };
    (function(){
        $(".cProcess li").eq(0).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat 2px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat 2px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(1).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -178px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -178px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(2).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -357px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -357px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(3).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -537px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -537px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(4).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -716px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -716px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(5).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -897px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -897px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(6).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1076px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1076px 2px");
            $(this).find(".cShow").hide(200);
        });
        $(".cProcess li").eq(7).hover(function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1256px -178px");
            $(this).find(".cShow").show(200);

        },function(){
            $(this).find(".cSize").css("background","url(images/c/sprit.png) no-repeat -1256px 2px");
            $(this).find(".cShow").hide(200);
        });
    })();

    (function(){

        var newopt={
            w2:"240",//小图宽度
            h2:"442"//小图高度
        };

        i_slide($(".ccontainer_image"),newopt);

    })();
});

// contact page controller
animateApp.controller('JavaController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-java';
    $scope.jump = {
        javaEmploy:function(){anchorScroll.toView('#javaEmploy', true)},
        javaAdvantage:function(){anchorScroll.toView('#javaAdvantage', true)},
        javaProject:function(){anchorScroll.toView('#javaProject', true)},
        javaSign:function(){anchorScroll.toView("#javaSign",true)}
    };
    (function(){
        var img=$("#javaShowImg");
        var list=$(".javaProject li");
        list.click(function(){
            list.each(function(){
                $(this).empty();
            });
            $(this).append("<div></div>");
            var index=$(this).attr("index");
            var src="images/java/scroll"+index+".png";
           img.attr("src",src);
        });
    })();
});
animateApp.controller('PhpController', function($scope,anchorScroll) {
    $scope.pageClass = 'page-php';
    $scope.jump = {
        phpEmploy:function(){anchorScroll.toView('#phpEmploy', true)},
        phpAdvantage:function(){anchorScroll.toView('#phpAdvantage', true)},
        phpProject:function(){anchorScroll.toView('#phpProject', true)},
        phpSign:function(){anchorScroll.toView("#phpSign",true)}
    };
    $(function () {
        var container = $('#container');
        var list = $('#list');
        var buttons = $('#buttons span');
        var prev = $('#prev');
        var next = $('#next');
        var index = 1;
        var len = 5;
        var interval = 3000;
        var timer;


        function animate (offset) {
            var left = parseInt(list.css('left')) + offset;
            if (offset>0) {
                offset = '+=' + offset;
            }
            else {
                offset = '-=' + Math.abs(offset);
            }
            list.animate({'left': offset}, 300, function () {
                if(left > -200){
                    list.css('left', -827 * len);
                }
                if(left < (-827 * len)) {
                    list.css('left', -827);
                }
            });
        }

        function showButton() {
            buttons.eq(index-1).addClass('on').siblings().removeClass('on');
        }

        function play() {
            timer = setTimeout(function () {
                next.trigger('click');
                play();
            }, interval);
        }
        function stop() {
            clearTimeout(timer);
        }

        next.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == 5) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-827);
            showButton();
        });

        prev.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == 1) {
                index = 5;
            }
            else {
                index -= 1;
            }
            animate(827);
            showButton();
        });

        buttons.each(function () {
            $(this).bind('click', function () {
                if (list.is(':animated') || $(this).attr('class')=='on') {
                    return;
                }
                var myIndex = parseInt($(this).attr('index'));
                var offset = -827 * (myIndex - index);

                animate(offset);
                index = myIndex;
                showButton();
            })
        });

        container.hover(stop, play);

        play();

    });
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
