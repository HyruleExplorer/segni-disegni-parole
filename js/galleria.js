(function () {

    var app = angular.module("galleriaApp", []);

    app.directive("galleria", function () {
        return {
            restrict: "E",
            templateUrl: "../templates/galleria.html"
        };
    });

    app.controller("GalleriaController", ['$http', '$interval', function ($http, $interval) {

        //Dichiaro e inizializzo le variabili.
        var galleria = this,
            get = $http.get("../data/immagini_galleria.json"),
            i = 0;

        galleria.index = i;
        galleria.immaginiGalleria = [];
        galleria.imgUrl = "";


        //Funzione che ritorna l'url dell'immagine alla posizione "index".
        galleria.getUrl = function (index) {
            var url = galleria.immaginiGalleria[index].url;
            return url;
        };


        //Funzione per visualizzare l'immagine successiva.
        galleria.nextImg = function () {
            if (galleria.index < galleria.immaginiGalleria.length - 1) {
                galleria.imgUrl = galleria.immaginiGalleria[galleria.index + 1].url;
                console.log("primo if - index = " + galleria.index + ", " + galleria.imgUrl);
                galleria.index = galleria.index + 1;
            } else {
                galleria.index = 0;
                galleria.imgUrl = galleria.immaginiGalleria[0].url;
                console.log("secondo if - index = " + galleria.index + ", " + galleria.imgUrl);
            }
        };


        //Cambio l'immagine visualizzata ogni 5 secondi.
        galleria.changeImg = function () {
            $interval(function () {
                if (galleria.imgUrl !== "") {
                    galleria.nextImg();
                }
            }, 5000);
        };
        galleria.changeImg();



        //Prendo le immagini dal file JSON oppure visualizzo un errore.
        get.success(function (immagini) {
            galleria.immaginiGalleria = immagini;
            galleria.imgUrl = galleria.getUrl(0);
        });
        get.error(function () {
            alert("Errore nell'eseguire la GET ajax");
        });
}]);

}());
