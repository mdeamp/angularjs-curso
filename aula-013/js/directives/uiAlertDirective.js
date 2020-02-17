angular.module('listaTelefonica')
  .directive('uiAlert', function () {
    return {
      /* template: '<div>uiAlert</div>' */
      templateUrl: 'view/alert.html',
      replace: true,
      /* restrict: 'A' */
      /* restrict: 'E' */
      /* restrict: 'C' */
      /* restrict: 'M' */
      restrict: 'AE',
      scope: {
        /* title: '@title' */
        title: '@',
        /* message: '=' */
      },
      transclude: true
    }
  })