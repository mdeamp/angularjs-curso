angular.module('listaTelefonica')
    .filter('name', () => {
        return (input) => {
            var listaDeNomes = input.split(' ');
            var listaDeNomesFormatada = listaDeNomes.map((nome) => {
                if (/da|de/.test(nome.toLowerCase())) return nome.toLowerCase();
                return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
            })
            return listaDeNomesFormatada.join(' ');
        }
    })