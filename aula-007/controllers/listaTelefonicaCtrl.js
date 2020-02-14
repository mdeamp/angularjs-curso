angular.module('listaTelefonica').controller('listaTelefonicaCtrl', ($scope, $http) => {
    $scope.app = 'Lista Telefônica';

    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = async () => {
        try {
            const response = await $http.get('http://localhost:3000/contatos');
            $scope.contatos = response.data;
            $scope.$apply();
        } catch (err) {
            console.error(err);
        }
    }

    var carregarOperadoras = async () => {
        try {
            const response = await $http.get('http://localhost:3000/operadoras');
            $scope.operadoras = response.data;
            $scope.$apply();
        } catch (err) {
            console.error(err);
        }
    }

    $scope.adicionarContato = async (contato) => {
        contato.data = new Date();

        try {
            await $http.post('http://localhost:3000/contatos', contato)
            delete $scope.contato
            $scope.contatoForm.$setPristine();
            carregarContatos();
        } catch (err) {
            console.error(err);
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
});