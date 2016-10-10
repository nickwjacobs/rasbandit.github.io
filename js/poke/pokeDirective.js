angular.module('ppApp').directive('pokeDirective', function() {
   return {
      restrict: "E",
      templateUrl: 'js/poke/poke-template.html',
      scope: {
         singlePokemon: '='
      },
      controller: function() {

      }
   }
})
