angular.module('something', []);

angular.module('something').controller('MainController', function($scope){
  $scope.message = "test";
  $scope.toDoList = [];
  $scope.count = 0;
  $scope.checked = [];

  $scope.addToList = function(){
    $scope.toDoList.push({message: $scope.message, count: $scope.count});
    $scope.count += 1;
    // console.log($scope.message);
  };
  $scope.remove = function(index){
    // console.log($scope.message);
    $scope.toDoList.splice(index, 1);
  }
})
