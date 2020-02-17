angular.module('listaTelefonica')
  .directive('uiDate', function ($filter) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        /**
         * Formatar uma data com barras entre dia, mês e ano, no formato dd/MM/yyyy.
         * @param {String} date Data em string, no formato 01012020.
         * @returns {String} Data formatada
         */
        const _formatDate = function (date) {
          date = date.replace(/[^0-9]+/g, '')

          if (date.length > 2) {
            date = `${date.substring(0, 2)}/${date.substring(2)}`
          }

          if (date.length > 5) {
            date = `${date.substring(0, 5)}/${date.substring(5, 9)}`
          }

          return date
        }

        element.bind('keyup', function () {
          ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
          ctrl.$render();
        })

        ctrl.$parsers.push(function (value) {
          if (value.length === 10) {
            const dateArr = value.split('/');
            return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).toISOString()
          }
        })

        ctrl.$formatters.push(function (value) {
          return $filter('date')(value, 'dd/MM/yyyy')
        })
      }
    }
  })