qiscusModule.controller("loginController",['$scope','$state','AuthFactory','CacheApp',function($scope,$state,AuthFactory,CacheApp){
  $scope.user = {
    email: "",
    password: ""
  };
  
  $scope.signIn = function(){
    AuthFactory.authUser($scope.user)
    .then(function(data){
      if(data){
        CacheApp.setToken(data);
        CacheApp.setEmail($scope.user.email);
        $state.go('rooms')
      }else{
        console.log('Login Failed')
      }
    })
  }
}]);

