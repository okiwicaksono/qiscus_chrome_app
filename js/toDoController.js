angular.module("toDoApps",[])
  .controller("toDoController",["$scope",function($scope){
    $scope.todos=["Create Awesome UI","Create Awesome Code"];
    
    $scope.addToDo = function(task){
      $scope.todos.push(task);
    }
  }]);