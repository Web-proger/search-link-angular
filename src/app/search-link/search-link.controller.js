var searchlinkApp =  angular.module('searchlinkApp');

searchlinkApp.controller('SearchLinkController', function SearchLinkController($scope) {
  $scope.getData = function () {
    if ($scope.data) {
        $scope.array = $scope.data.split('\n');
        $scope.message = '';
    } else {
      console.log('Введите список доменов');
      $scope.message = 'Введите список доменов';
    }
  };

  $scope.clearDomainList = function () {
    $scope.data = "";
  };

  $scope.printFinalList = function() {
    $scope.finalList = "";
    $scope.array.forEach(item => {
      $scope.finalList = $scope.finalList + item + '\n';
    });
  };

  $scope.removeDomain = function (domain) {
     console.log('removeDomain');
     $scope.array.splice([$scope.array.indexOf(domain)], 1);
   };
});
