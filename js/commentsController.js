angular.module("qiscusApp",['angular-md5'])
  .controller("commentsController",['$scope','$http',function($scope,$http){
    this.roomId = 2141;
    this.topic = 4284;
    
    this.email = "sunupf@gmail.com";
/*    var login = {
      'user[email]':"sunupf@gmail.com",
      'user[password]':"Cup680sage874%"
    };
    */
    this.token = "mUuFUhDXELsfkCKbssZ7";
    
    $scope.idx = 1;
    
    this.test = function(){
      $scope.idx = 2;
    }

    
    $http({
      url:'https://www.qisc.us/api/v1/mobile/topic/'+this.topic+'/comment/'+100000+'/token/'+this.token,
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
            'token' : this.token,
            'comment' : message,
            'topic_id' : this.topic
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

