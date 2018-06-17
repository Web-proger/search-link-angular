
var searchlinkApp = angular.module('searchlinkApp', []);

searchlinkApp.controller('SearchLinkController', function SearchLinkController($scope) {
  $scope.getData = function () {
      $scope.array = $scope.data.split('\n');
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
      $scope.array.splice([$scope.array.indexOf(domain)], 1);
  };
});
