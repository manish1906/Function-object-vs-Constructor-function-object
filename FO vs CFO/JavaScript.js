var app = angular.module('app', [])
app.controller("demo", ["$scope", "service2", function ($scope, service2) {
    console.log("Controller");
    $scope.name = service2.xyz;

}])
app.service('service1', function () {
    console.log("service1");
    this.xyz = function () {
        return "Manish";
    };
   
});

app.service('service2', function (service1) {
    console.log("service2")
    this.xyz = service1.xyz();
   
});