angular.module('listaTelefonica')
  .controller('listaTelefonicaCtrl',
    (
      $scope,
      contatosAPI,
      operadorasAPI,
      serialGenerator
    ) => {
      $scope.app = 'Lista Telefônica';

      $scope.contatos = [];
      $scope.operadoras = [];
      $scope.contato = {
        data: 1034218800000
      }

      var carregarContatos = async () => {
        try {
          const response = await contatosAPI.getContatos();
          $scope.contatos = response.data;
          $scope.$apply();
        } catch {
          $scope.error = 'Não foi possível carregar os dados!';
        }
      }

      var carregarOperadoras = async () => {
        try {
          const response = await operadorasAPI.getOperadoras();
          $scope.operadoras = response.data;
          $scope.$apply();
        } catch {
          $scope.error = 'Não foi possível carregar os dados!';
        }
      }

      $scope.adicionarContato = async (contato) => {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();

        try {
          await contatosAPI.saveContatos(contato)
          delete $scope.contato
          $scope.contatoForm.$setPristine();
          carregarContatos();
        } catch {
          $scope.error = 'Não foi possível enviar os dados!';
        }
      }

      $scope.apagarContatos = (contatos) => {
        $scope.contatos = contatos.filter((contato) => {
          if (!contato.selecionado) return contato;
        });
      }

      $scope.isContatoSelecionado = (contatos) => {
        return contatos.some(contato => {
          return contato.selecionado;
        });
      }

      $scope.ordenarPor = (campo) => {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      }

      carregarContatos();
      carregarOperadoras();
    }
  );