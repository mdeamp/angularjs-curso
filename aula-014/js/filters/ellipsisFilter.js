angular.module('listaTelefonica')
  .filter('ellipsis', function () {
    return function (input, tamanho = 10) {
      return input.length < tamanho ? input : input.substr(0, tamanho) + '...'
    }
  })