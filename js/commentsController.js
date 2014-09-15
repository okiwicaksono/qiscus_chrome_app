angular.module("qiscusApp",[])
  .controller("commentsController",['$scope','$http',function($scope,$http){
    var roomId = 2141;
    var topic = 4284;
    
    var login = {
      'user[email]':"sunupf@gmail.com",
      'user[password]':"Cup680sage874%"
    };
    
    var token = "mUuFUhDXELsfkCKbssZ7";

    
    $http({
      url:'https://www.qisc.us/api/v1/mobile/topic/'+topic+'/comment/'+100000+'/token/'+token,
      method:"GET",
      data:""
    }).
    success(function(data) {
      $scope.comments = data.results.comments;
    });

    
    
    $scope.postComment = function($event){
      if($event.keyCode === 13){
        var message = $scope.message;
        $http({
          url:'https://www.qisc.us/api/v1/mobile/postcomment',
          method:"POST",
          data:{
            'token' : token,
            'comment' : message,
            'topic_id' : topic
          }

        }).
        success(function(data) {
          $scope.message = "";
          console.log(data);
        }).error(function(error){
          console.log('error');         
        });
      }
    } 
    
        
  }]);

