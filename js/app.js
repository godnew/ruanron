/**
 * Created by nhy on 2016/8/22.
 */
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);
animateApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function(evt, next, previous) {
        document.documentElement.scrollTop = document.body.scrollTop =0;
    });
}]);
animateApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'template/home.html',
                controller: 'HomeController'
            }).
            when('/c', {
                templateUrl: 'template/c.html',
                controller: 'CController'
            }).
            when('/java', {
                templateUrl: 'template/java.html',
                controller: 'JavaController'
            }).
            when( '/php', {
                templateUrl: 'template/php.html',
                controller: 'PhpController'
            }).
            when('/ui',{
                templateUrl: 'template/ui.html',
                controller: 'UiController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
animateApp.factory('anchorScroll', function () {
    function toView(element, top, height) {
        var winHeight = $(window).height();

        element = $(element);
        height = height > 0 ? height : winHeight / 10;
        $('html, body').animate({
            scrollTop: top ? (element.offset().top - height) : (element.offset().top + element.outerHeight() + height - winHeight)
        }, {
            duration: 200,
            easing: 'linear',
            complete: function () {
                if (!inView(element)) {
                    element[0].scrollIntoView( !! top);
                }
            }
        });
    }

    function inView(element) {
        element = $(element);

        var win = $(window),
            winHeight = win.height(),
            eleTop = element.offset().top,
            eleHeight = element.outerHeight(),
            viewTop = win.scrollTop(),
            viewBottom = viewTop + winHeight;

        function isInView(middle) {
            return middle > viewTop && middle < viewBottom;
        }

        if (isInView(eleTop + (eleHeight > winHeight ? winHeight : eleHeight) / 2)) {
            return true;
        } else if (eleHeight > winHeight) {
            return isInView(eleTop + eleHeight - winHeight / 2);
        } else {
            return false;
        }
    }

    return {
        toView: toView,
        inView: inView
    };
});