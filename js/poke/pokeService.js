angular.module('ppApp').service('pokeService', function($http) {

   var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';

   this.getPokemon = function(x) {
      return $http({
         method: 'GET',
         url: baseUrl + x
      })
   }
})
