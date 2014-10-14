qiscusModule.controller("loginController",['$scope','$state','$cookieStore','AuthFactory','CacheApp',function($scope,$state,$cookieStore,AuthFactory,CacheApp){
  $scope.user = {
    email: "",
    password: ""
  };
  
  if ($cookieStore.get('token')) {
  	CacheApp.setToken($cookieStore.get('token'));
  	CacheApp.setEmail($cookieStore.get('email'));
  	$state.go('rooms');
  } else {
		$scope.signIn = function() {
			AuthFactory.authUser($scope.user).then(function(data) {
				if (data) {
					CacheApp.setToken(data);
					CacheApp.setEmail($scope.user.email);
					$cookieStore.put('token', data);
					$cookieStore.put('email', $scope.user.email);
					$state.go('rooms');
				} else {
					console.log('Login Failed');
				}
			});
		};
  }
}]);

