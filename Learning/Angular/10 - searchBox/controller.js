var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http){
    $http.get('http://localhost/10/database.json')
    .success(function(response) {
      $scope.persons = response.records;
    });
});

"Stats":
        [
          {
            "Experience":"42",
            "Life":"100",
            "Attack Melle":"0-15",
            "Attack Distance":"0-25"
          }
        ],
        "Drop":
        [
          {
            "Gold":"0-30",
            "Arrow":"0-3",
            "Plum":"0-2",
            "Elvish Talisman":"1"
          }
        ]
      }

      {
        "Name":"Elf Scout",
        "Stats":
        [
          {
            "Experience":"75",
            "Life":"160",
            "Attack Melle":"0-30",
            "Attack Distance":"0-120"
          }
        ],
        "Drop":
        [
          {
            "Gold":"0-25",
            "Arrow":"0-12",
            "Poison Arrow":"0-4",
            "Elven Scouting Glass":"1",
            "Elvish Talisman":"1"
          }
        ]
      }
