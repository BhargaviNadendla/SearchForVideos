'use strict';

angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {

        $scope.getText = function () {
            var placeEntered = document.getElementById("search").value;
            var langEntered = document.getElementById("languages").value;

            if (placeEntered != null) {


                var handler = $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?" +
                    "key=trnsl.1.1.20170911T135241Z.afb476cb2a05656b.d508d9f711ee5ed731b530bf3129cdb7146a9042" +
                    "&text=" + placeEntered +
                    "&lang=" + langEntered);
                handler.success(function (data) {

                    if (data != null) {

                        $scope.output1 = data.text;

                    };



                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }


    });
