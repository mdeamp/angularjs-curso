angular.module('listaTelefonica')
  .config(function (
    $locationProvider,
    $routeProvider
  ) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/contatos', {
        templateUrl: 'view/contatos.html',
        controller: 'listaTelefonicaCtrl'
      })
      .when('/novoContato', {
        templateUrl: 'view/novoContato.html',
        controller: 'novoContatoCtrl'
      })
  })