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
    .controller('AboutCtrl',['$scope','$http',function($scope,$http){
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
      $scope.count=0;
      $scope.counterFunction=function(){
        $scope.count++;
      };
      $scope.selectFn=function(data){
        alert(data);
        //alert($scope.selectValue);
      };

      $scope.submitFn=function(data){
        alert(data);
      };

     
$scope.Employee=[{name:"madhuri",age:27,dob:"1483209000",salary:3000},
{name:"mons",age:27,dob:"1483209000",salary:4000},
{name:"raju",age:22,dob:"1483209000",salary:7000},
];

var obj1=[{name:"madhuri",age:27,dob:"1483209000",salary:3000},{name:"mons",age:27,dob:"1483209000",salary:4000}];
for(var key in obj1){
console.log(obj1.hasOwnProperty(key));
}

$scope.apiCallFn=function(){
  console.log("in Funciton");
  $http.get('https://reqres.in/api/users/2',{}).then(
    function(response){
      //success
      console.log(response.data);
    },
    function(response){

    //error
    }
  );


};














    }]);
});
