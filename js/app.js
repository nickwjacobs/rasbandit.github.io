angular.module("ppApp", ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/poke');

$stateProvider
 .state('poke', {
    templateUrl: 'views/poke.html',
    controller: 'pokeCtrl',
    url: '/poke'
 })
 .state('paralax', {
   templateUrl: 'js/paralax/paralax.html',
   controller: 'paralaxCtrl',
   url: '/paralax'
 })

})
