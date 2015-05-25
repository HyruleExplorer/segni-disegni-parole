(function () {

    var app = angular.module("quadriApp", []);

    app.directive("quadri", function () {
        return {
            restrict: "E",
            templateUrl: "../templates/quadri.html"
        };
    });


    app.controller("QuadriController", ['$http', function ($http) {

        var quadri = this;

}]);

}());
