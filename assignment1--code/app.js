(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.status = "";

  $scope.state = function () {
    var num = $scope.name;
    var countPoints = num.split(',').length-1;
    if (countPoints>=1 && countPoints<=3) {
      num = "Enjoy!";
    }else if (countPoints>3) {
      num = "Too much!";
    }else if(num.length==0){
      num = "Please enter data first";
    }else{
      num = "";
    }
    $scope.status = num;
  };

}

})();
