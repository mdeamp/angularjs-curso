angular.module('listaTelefonica')
  .controller('novoContatoCtrl',
    function (
      $scope,
      $location,
      contatosAPI,
      operadorasAPI,
      serialGenerator
    ) {
      $scope.app = 'Lista Telefônica';

      var carregarOperadoras = async function () {
        try {
          const response = await operadorasAPI.getOperadoras();
          $scope.operadoras = response.data;
          $scope.$apply();
        } catch {
          $scope.error = 'Não foi possível carregar os dados!';
        }
      }

      $scope.adicionarContato = async function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();

        try {
          await contatosAPI.saveContatos(contato)
          delete $scope.contato
          $scope.contatoForm.$setPristine();
          $location.path('/contatos');
        } catch {
          $scope.error = 'Não foi possível enviar os dados!';
        }
      }

      carregarOperadoras();
    }
  );