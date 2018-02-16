define(['angular'], function (angular) {
    'use strict';
  
    /**
     * @ngdoc function
     * @name angularDemoApp.controller:ContactCtrl
     * @description
     * # ContactCtrl
     * Controller of the angularDemoApp
     */
    angular.module('angularDemoApp.controllers.ContactCtrl', [])
      .controller('ContactCtrl',['$scope',function($scope){
          $scope.myText="hello";
      }]);
  });
  