qiscusModule.controller("roomsController",['$scope','CacheApp','RoomsFactory',function($scope,CacheApp,RoomsFactory){  
    RoomsFactory.loadRooms(CacheApp.getToken())
    .then(function(data){
      CacheApp.setRooms(data.rooms)
      $scope.rooms =(data.rooms);
    })
  }]);