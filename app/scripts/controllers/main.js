'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp',['service'])
  .controller('MainCtrl',['$scope',function ($scope,utilities) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.test='hello';
	
  }]);
