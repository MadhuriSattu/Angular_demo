define([
    'angular',
], function(angular) {
    'use strict';
    angular.module('angularDemoApp.controllers.ContactCtrl',[])
    .controller('ContactCtrl',function(){
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
    });
});