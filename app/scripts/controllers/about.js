define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularDemoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularDemoApp
   */
  angular.module('angularDemoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl',['$scope',function($scope){
      $scope.ABC='hello';
      $scope.ASADAD="sasasas";
      $scope.arr=[
        {
          name:'madhuri',
          id:123
        },
        {
          name:"monvi",
          id:243
        },
        {
          name:"raju garu",
          id:35
        }
      ];
      $scope.abc=[];
      $scope.someValue="hellooo";

    }]);
});
