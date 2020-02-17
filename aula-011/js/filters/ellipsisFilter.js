angular.module('listaTelefonica')
  .filter('ellipsis', () => {
    return (input, tamanho = 10) => {
      return input.length < tamanho ? input : input.substr(0, tamanho) + '...'
    }
  })