var app = angular.module('mainApp', []);

app.controller('app', function($scope){
  $scope.counter=-1;
  $scope.$watch('myText',function(newValue, oldValue){
    console.log("Old Value: " + oldValue);
    console.log("New Value: " + newValue);
    $scope.counter++;
  });
});
