angular.module('listaTelefonica')
    .config(
        (
            serialGeneratorProvider
        ) => {
            console.log(serialGeneratorProvider.getLength())
            console.log(serialGeneratorProvider.setLength(100))
        })