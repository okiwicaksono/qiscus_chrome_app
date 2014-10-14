qiscusModule.controller("commentsController",['$scope','$state','$stateParams','CacheApp','CommentsFactory',function($scope,$state,$stateParams,CacheApp,CommentsFactory){
    var topic = ($stateParams.topic);
    var room = ($stateParams.rooms);
  
    console.log(CacheApp.getTopic(room,topic));
  
    CommentsFactory.loadComments(room,topic,CacheApp.getToken())
    .then(function(data){
      $scope.email = CacheApp.getEmail();
      $scope.comments =(data.comments);
    })
    
    
   $scope.postComment = function($event){
      if($event.keyCode === 13){
        var message = $scope.message;
        
        var data={
            'token' : CacheApp.getToken(),
            'comment' : message,
            'topic_id' : topic
          }
          
        $scope.message = "";
        CommentsFactory.postComments(room,data)
        .then(function(data){
          CommentsFactory.loadComments(room,topic,CacheApp.getToken())
          .then(function(data){
            $scope.comments =(data.comments);
          })
        })
      }
    }
    
        
  }]);



