angular.module('ppApp').controller('pokeCtrl', function($scope, pokeService) {

$scope.number = Math.floor(Math.random() * 721) + 1;

   $scope.getPokemon = function(number) {
      pokeService.getPokemon(number).then(function(response) {
         $scope.pokemon = response.data;
         console.log();
         $scope.message = '';
   })
}

$scope.getPokemon($scope.number);


})
