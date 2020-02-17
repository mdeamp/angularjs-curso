angular.module('listaTelefonica')
  .config(
    (
      serialGeneratorProvider
    ) => {
      serialGeneratorProvider.setLength(20);
    })