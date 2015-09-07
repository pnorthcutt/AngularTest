'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp',['service'])
  .controller('MainCtrl',['$scope','utilities',function ($scope,utilities) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.test=utilities.hello();
	
	
	
  }]);
