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
    $scope.array.splice([$scope.array.indexOf(domain)], 1);
  };

  $scope.changeStatus = function (event) {
    var parent = event.target.parentNode;
    if (parent.classList.contains('red')) {
      parent.classList.remove('red');
      parent.classList.add('green')
    } else if (parent.classList.contains('green')) {
      parent.classList.remove('green');
    } else {
      parent.classList.add('red')
    }
  }
});
