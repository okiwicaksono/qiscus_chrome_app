qiscusLib.factory("APIConsumer",['$http','$q',function($http,$q){
  var factory = {};
  
  factory.postData = function(url,params){
    if((typeof params == "undefine" && params==null)||(typeof url == "undefine" && url==null)){
      return false;
    }
    var config = {
      url : url,
      method : "POST",
      params : params.data,
    }
    
    if(params.header){
      config.header = params.header;
    }
    
    var deferred = $q.defer();
    $http(config)
    .success(function(data){
      var token = data;
      deferred.resolve(token);
    })
    .error(function(error){
      deferred.reject(error)
    })
    return deferred.promise;
  }
  
  factory.getData = function(url){
    if((typeof url == "undefine" && url==null)){
      return false;
    }
    
    var config = {
      url : url,
      method : "GET"
    }
    
    var deferred = $q.defer();
    $http(config)
    .success(function(data){
      deferred.resolve(data);
    })
    .error(function(error){
      deferred.reject(error)
    })
    return deferred.promise;
  }
  
  return factory;
}]);