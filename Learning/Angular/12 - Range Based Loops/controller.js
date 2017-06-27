// var app = angular.module('mainApp', []);
// app.controller('app', function($scope){
//   var range = 10;
//   var myRange=[];
//   for(i=0;i<range;i++){
//     myRange.push(i);
//   }
//   $scope.myRange = myRange;
// });
var app2 = angular.module('mainApp', []);
app2.controller('app2', function($scope){
  var range = new Array(100);
  $scope.range = range;
});
