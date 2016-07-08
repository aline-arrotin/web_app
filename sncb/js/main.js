'use strict';

/**
* Déclaration de l'application routeApp
*/

var sncbApp = angular.module('sncbApp',[
	'ngRoute'
	]);


sncbApp.config(['$routeProvider', function($routeProvider){

	//routes possible
	$routeProvider
	.when('/', {
		'templateUrl' : 'sncb.html',
		'controller' : 'sncbCtrl'
	})
	.when('/station/:id',{
		'templateUrl' : 'station.html',
		'controller' : 'stationCtrl'
	})
		.otherwise({
		'redirecTo' : '/'
	});
}]);

sncbApp.run(["$scope", "$http", function($scope,$http){
	var urlApi = 'http://api.irail.be/stations/?format=json';

	$http({
		"method" : "GET",
		"url" : urlApi
	})
	.success(function(data, status, headers){
		alert(data);
		var arrayGares= data.station;
		
		console.log(arrayGares);
		arrayGares.sort(function(a,b){
			if(a.name > b.name)
				return 1;
			if(a.name < b.name)
				return -1;
			//a doit être égal à b
			return 0;
		});
		localStorage.arrayGares = JSON.stringify(arrayGares);

	})
	.error(function(data, status, headers){
		//$rootScope.gares = JSON.parse(localStorage.arrayGares);

	});
//else

		
}]);//Run permet de n'executer la requête qu'une fois.


sncbApp.controller("sncbCtrl",["$scope","$rootScope", function($scope){
	$scope.texte = "test";
	$scope.gares = JSON.parse(localStorage.arrayGares);

		//$scope.motos = {"version":"1.0","encoding":"UTF-8","feed":{"xmlns":"http://www.w3.org/2005/Atom","xmlns$openSearch":"http://a9.com/-/spec/opensearchrss/1.0/","xmlns$gsx":"http://schemas.google.com/spreadsheets/2006/extended","id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"Réponses au formulaire 1"},"link":[{"rel":"alternate","type":"application/atom+xml","href":"https://docs.google.com/spreadsheets/d/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/pubhtml"},{"rel":"http://schemas.google.com/g/2005#feed","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values"},{"rel":"http://schemas.google.com/g/2005#post","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values"},{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values?alt\u003djson\u0026orderby\u003dcolumn%3Amarque"}],"author":[{"name":{"$t":"pcepegra"},"email":{"$t":"pcepegra@gmail.com"}}],"openSearch$totalResults":{"$t":"5"},"openSearch$startIndex":{"$t":"1"},"entry":[{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cpzh4"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"04/05/2016 10:24:53"},"content":{"type":"text","$t":"marque: Ducati, cylindrée: 700, année: 25/05/2016, couleur: Rouge, etat: 1, kilométrage: 90000, description: catastrophe, modèle: Monster"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cpzh4"}],"gsx$horodateur":{"$t":"04/05/2016 10:24:53"},"gsx$marque":{"$t":"Ducati"},"gsx$cylindrée":{"$t":"700"},"gsx$année":{"$t":"25/05/2016"},"gsx$couleur":{"$t":"Rouge"},"gsx$etat":{"$t":"1"},"gsx$kilométrage":{"$t":"90000"},"gsx$description":{"$t":"catastrophe"},"gsx$modèle":{"$t":"Monster"}},{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/ciyn3"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"09/05/2016 14:41:50"},"content":{"type":"text","$t":"marque: Honda, cylindrée: 1100, année: 26/05/2016, couleur: blanche, etat: 3, kilométrage: 2562, description: OK, modèle: RCV 1100"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/ciyn3"}],"gsx$horodateur":{"$t":"09/05/2016 14:41:50"},"gsx$marque":{"$t":"Honda"},"gsx$cylindrée":{"$t":"1100"},"gsx$année":{"$t":"26/05/2016"},"gsx$couleur":{"$t":"blanche"},"gsx$etat":{"$t":"3"},"gsx$kilométrage":{"$t":"2562"},"gsx$description":{"$t":"OK"},"gsx$modèle":{"$t":"RCV 1100"}},{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cokwr"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"04/05/2016 08:56:02"},"content":{"type":"text","$t":"marque: Yamaha, cylindrée: 600, année: 18/05/2016, couleur: Verte, etat: 4, kilométrage: 16000, description: aucune, modèle: R6"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cokwr"}],"gsx$horodateur":{"$t":"04/05/2016 08:56:02"},"gsx$marque":{"$t":"Yamaha"},"gsx$cylindrée":{"$t":"600"},"gsx$année":{"$t":"18/05/2016"},"gsx$couleur":{"$t":"Verte"},"gsx$etat":{"$t":"4"},"gsx$kilométrage":{"$t":"16000"},"gsx$description":{"$t":"aucune"},"gsx$modèle":{"$t":"R6"}},{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cre1l"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"04/05/2016 10:29:02"},"content":{"type":"text","$t":"marque: Yamaha, cylindrée: 1100, année: 29/05/2005, couleur: Bleue, etat: 5, kilométrage: 2520, description: Aucune, modèle: Xj6"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/cre1l"}],"gsx$horodateur":{"$t":"04/05/2016 10:29:02"},"gsx$marque":{"$t":"Yamaha"},"gsx$cylindrée":{"$t":"1100"},"gsx$année":{"$t":"29/05/2005"},"gsx$couleur":{"$t":"Bleue"},"gsx$etat":{"$t":"5"},"gsx$kilométrage":{"$t":"2520"},"gsx$description":{"$t":"Aucune"},"gsx$modèle":{"$t":"Xj6"}},{"id":{"$t":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/chk2m"},"updated":{"$t":"2016-05-09T12:41:53.795Z"},"category":[{"scheme":"http://schemas.google.com/spreadsheets/2006","term":"http://schemas.google.com/spreadsheets/2006#list"}],"title":{"type":"text","$t":"04/05/2016 10:31:13"},"content":{"type":"text","$t":"marque: Yamaha, cylindrée: 200, année: 02/05/2016, couleur: Rouge, etat: 5, kilométrage: 150000, description: Aucune, modèle: Diversion"},"link":[{"rel":"self","type":"application/atom+xml","href":"https://spreadsheets.google.com/feeds/list/1bFuZRpOoKtjb0jojvyrpSb29VlvvBt2yNyGBuN0Lvro/1/public/values/chk2m"}],"gsx$horodateur":{"$t":"04/05/2016 10:31:13"},"gsx$marque":{"$t":"Yamaha"},"gsx$cylindrée":{"$t":"200"},"gsx$année":{"$t":"02/05/2016"},"gsx$couleur":{"$t":"Rouge"},"gsx$etat":{"$t":"5"},"gsx$kilométrage":{"$t":"150000"},"gsx$description":{"$t":"Aucune"},"gsx$modèle":{"$t":"Diversion"}}]}};

}]);//Execute la requête plusieurs fois. d'où le run


sncbApp.controller("stationCtrl",["$scope", "$routeParams", function($scope,$routeParams){
	// $scope.idgare= $routeParams.id;
	// var arrayGares = JSON.parse(localStorage.myData);
	// $scope.nomgare= arrayGares[$routeParams.id].name;

}]);

