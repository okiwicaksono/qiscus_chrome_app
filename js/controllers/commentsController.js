qiscusModule.controller("commentsController",['$scope','$state','$stateParams','CacheApp','CommentsFactory',function($scope,$state,$stateParams,CacheApp,CommentsFactory){
    
    $scope.listTopicsShow = true;
  
    var topic = ($stateParams.topic);
    var room = ($stateParams.room);
  
    $scope.room = (CacheApp.getRoom(room));
  
    $scope.topicDetail = (CacheApp.getTopic(room,topic));
    $scope.topics = (CacheApp.getTopics(room));
    
  
    CommentsFactory.loadComments(room,topic,CacheApp.getToken())
    .then(function(data){
      $scope.email = CacheApp.getEmail();
      $scope.comments =(data.comments);
    });
    
    $scope.openTopics = function(){
      $scope.listTopicsShow = false;
    }
    $scope.postComment = function($event){
      if($event.keyCode === 13){
        var message = $scope.message;
        
        var data={
            'token' : CacheApp.getToken(),
            'comment' : message,
            'topic_id' : topic
         };
          
        $scope.message = "";
        CommentsFactory.postComments(room,data)
        .then(function(data){
          CommentsFactory.loadComments(room,topic,CacheApp.getToken())
          .then(function(data){
            $scope.comments =(data.comments);
          });
        });
      }
   };
    
        
  }]);



