var searchlinkApp =  angular.module('searchlinkApp');

searchlinkApp.directive('searchLink', function () {
  return {
    scope: {
      domain: '@domainname',
      removeDomain: '&removedomain'
    },
    template: '<h4 class="link-wrap-header">{{ domain }}</h4>\n' +
    '<a target="_blank" class="site-link" href="{{yandex}}">yandex</a>\n' +
    '<a target="_blank" class="site-link" href="{{google}}">google</a>\n' +
    '<a target="_blank" class="site-link" href="{{mail}}">mail</a>\n' +
    '<br>\n' +
    '<button id="status" class="btn btn-status" data-status="not-check" ng-click="changeStatus($event)" ng-class="{{ status }}">status</button>\n' +
    '<button class="btn del-btn" type="button" ng-click="removeDomain()">Удалить</button>',
    link: function (scope, element, attr) {
      //scope.removeDomain();
      scope.yandex = 'https://yandex.ru/yandsearch?s=all&text=host%3Awww.' + scope.domain + '%20%7C%20host%3A' + scope.domain;
      scope.google ='https://www.google.ru/search?newwindow=1&safe=off&q=site:' + scope.domain + '&cad=h';
      scope.mail = 'https://go.mail.ru/search?site=' +  scope.domain + '&advs=1&q=' + scope.domain;

      scope.changeStatus = function (event) {
        var parent = event.target.parentNode;
        if (parent.classList.contains('red')) {
          parent.classList.remove('red');
          parent.classList.add('green')
        } else if (parent.classList.contains('green')) {
          parent.classList.remove('green');
        } else {
          parent.classList.add('red')
        }
      };
    }
  }
})
;
