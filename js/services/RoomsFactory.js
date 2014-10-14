qiscusModule.factory("RoomsFactory",['$http','$q','APIConsumer','CacheApp',function($http,$q,APIConsumer,CacheApp){
  var factory = {};

  factory.loadRooms = function(token){
    
    var url = 'https://www.qisc.us/api/v1/mobile/rooms?token='+token;
    
    var deferred = $q.defer();

    APIConsumer.getData(url)
    .then(function(data){
      if('results' in data){
        deferred.resolve(data.results);
      }else{
        deferred.reject(error);
        return false;
      }
    })
    return deferred.promise;
  }
  return factory;
}]);