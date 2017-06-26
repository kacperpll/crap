var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'page.html',
    template: ' <b>This is template</b>'
    //"template" ma wyzszy priorytet dlatego wlaczy sie niewazne czy jest za czy przed "templateUrl"
    //do tego odpali sie tylko "template" a "templateUrl" zostanie pominiety
  })
  .when('/helloUser', {
      templateUrl: 'hellow.html'
  })
  .otherwise({
    redirectedTo: '/'
  });
});
