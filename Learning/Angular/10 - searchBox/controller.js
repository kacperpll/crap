var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http){
    $http.get('http://localhost/10/database.json')
    .success(function(response) {
      $scope.persons = response.records;
    });
});
