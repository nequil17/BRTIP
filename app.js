var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/job.html",
        
    })
    .when("/technician", {
        templateUrl : "/views/technician.html",
        
    })
    .when("/equpiment", {
        templateUrl : "/views/equipment.html"
    });
});

myApp.controller('jobController', function($http, $scope) {
    $http.get("http://br-api.azurewebsites.net/api/document/type/job", {
        headers: {'Token': '1726C525-DD97–4DB3-BACE-BB30E9745E46'}
    })
        .then(function (response) {
        $scope.jobs = response.data;
        console.log(response);
      }, function errorCallback(response) {
        
      });
    
});

myApp.controller('techController', function($http, $scope) {
    $http.get("http://br-api.azurewebsites.net/api/document/type/technician")
        .then(function (response) {
        $scope.technician = response.data;
        console.log(response);
      }, function errorCallback(response) {
        
      });
    
});

myApp.controller('equipController', function($http, $scope) {
    $http.get("http://br-api.azurewebsites.net/api/document/type/equipment")
        .then(function (response) {
        $scope.equipment = response.data;
        console.log(response);
      }, function errorCallback(response) {
        
      });
    
});

