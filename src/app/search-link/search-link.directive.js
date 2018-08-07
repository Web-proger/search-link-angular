var searchlinkApp =  angular.module('searchlinkApp');

searchlinkApp.directive('searchLink', function () {
  return {
    scope: true,
    templateUrl: ('search-link/search-link.template.html'),
    link: function (scope, element, attr) {

    }
  }
});
