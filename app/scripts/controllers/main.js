define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularDemoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularDemoApp
   */
  angular.module('angularDemoApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
