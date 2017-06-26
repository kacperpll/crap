var app = angular.module('mainApp', []);
app.controller('app', function($scope){
    $scope.myRandomNumber = Math.random();
    document.querySelector('input').addEventListener('click', function(){
      $scope.myRandomNumber = Math.random();
      $scope.$digest();
    });
});
