'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('MainCtrl',['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
  }]);
