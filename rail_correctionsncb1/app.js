var railApp = angular.module('railApp', ['ngRoute', 'ngAnimate']);



railApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/detail/:id', {
    		templateUrl: 'detail.html',
            controller: 'detailController'
    	});

});

railApp.run(["$rootScope","$http",function($rootScope, $http) {
    if("gares" in localStorage) {
        $rootScope.gares = JSON.parse(localStorage.gares);
    }//if
    else {
    var urlApi = 'http://api.irail.be/stations/?format=json';

    $http({
        "method" : "GET",
        "url" : urlApi
    })
    .success(function(data, status, headers){
        arrayGares = data.station;
        arrayGares.sort(function(a,b) {
            if (a.name > b.name)
                return 1;
            if (a.name < b.name)
                return -1;
            // a doit être égale à b
            return 0;
        });
        $rootScope.gares = arrayGares;
        localStorage.gares = JSON.stringify(arrayGares);
    })
    .error(function(data, status, headers){
            //alert("error xhr");
            $rootScope.gares = JSON.parse(localStorage.gares);
    });
    }//else
  }]);


railApp.controller('mainController', function($scope, $rootScope) {
    $scope.pageClass = 'page-home';
});

railApp.controller('detailController', function($scope, $routeParams, $rootScope) {
    $scope.pageClass = 'detail';
    myId = parseInt($routeParams.id);
    //$scope.idGare = parseInt($routeParams.id);
    //console.log(localStorage.gares);
    garesArray = JSON.parse(localStorage.gares);
    $scope.theGare = garesArray[myId].name;
});