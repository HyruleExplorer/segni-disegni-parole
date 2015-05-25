(function () {

    var app = angular.module("headerMenuApp", []);

    app.directive("headerMenu", function () {
        return {
            restrict: "E",
            templateUrl: "../templates/headermenu.html"
        };
    });

    app.directive('gotoHome', function () {
        return {
            restrict: 'A',
            link: function ($scope, $pulsante) {
                $pulsante.on('click', function () {
                    $("body").animate({
                        scrollTop: $("#container").offset().top
                    }, "slow");
                });
            }
        };
    });

    app.directive('gotoLavori', function () {
        return {
            restrict: 'A',
            link: function ($scope, $pulsante) {
                $pulsante.on('click', function () {
                    $("body").animate({
                        scrollTop: $("#quadri").offset().top
                    }, "slow");
                });
            }
        };
    });

    app.directive('gotoContatti', function () {
        return {
            restrict: 'A',
            link: function ($scope, $pulsante) {
                $pulsante.on('click', function () {
                    $("body").animate({
                        scrollTop: $("#contatti").offset().top
                    }, "slow");
                });
            }
        };
    });

    app.controller("HeaderMenuController", function () {

        var headerMenu = this;

    });

}());
