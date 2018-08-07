var searchlinkApp =  angular.module('searchlinkApp');

searchlinkApp.directive('searchLink', function () {
  return {
    scope: {
      domain: '@domainname'
    },
    templateUrl: ('search-link/search-link.template.html'),
    link: function (scope, element, attr) {
      scope.yandex = 'https://yandex.ru/yandsearch?s=all&text=host%3Awww.' + scope.domain + '%20%7C%20host%3A' + scope.domain;
      scope.google ='https://www.google.ru/search?newwindow=1&safe=off&q=site:' + scope.domain + '&cad=h';
      scope.mail = 'https://go.mail.ru/search?site=' +  scope.domain + '&advs=1&q=' + scope.domain;
    }
  }
});
