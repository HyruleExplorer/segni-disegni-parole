(function () {

    var app = angular.module("contattiApp", []);

    app.directive("contatti", function () {
        return {
            restrict: "E",
            templateUrl: "../templates/contatti.html"
        };
    });


    app.controller("ContattiController", function () {

        var contatti = this;

    });

}());
