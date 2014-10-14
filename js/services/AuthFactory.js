qiscusModule.factory("AuthFactory",['$http','$state','$q','APIConsumer',function($http,$state,$q,APIConsumer){
  var factory = {};
  
  /**
   * Function yang menghandle login untuk user
   * @param   {Object}  login parameter object yang mengandung attribut email dan password
   * @returns {Boolean} return a token if success login adn return false if failed
   */
  factory.authUser = function(login){
    var params = {};
    params.data = {
      "user[email]" : login.email,
      "user[password]" : login.password
    }
    var url = 'https://www.qisc.us/users/sign_in.json';
    
    params.header = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    var deferred = $q.defer();
    APIConsumer.postData(url,params)
    .then(function(data){
      if(data.success){
        deferred.resolve(data.token);
      }else{
        deferred.reject(false);
      }
    })
    return deferred.promise;
  }
  return factory;
}]);