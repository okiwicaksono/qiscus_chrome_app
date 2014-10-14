qiscusModule.factory("CommentsFactory",['$http','$q','APIConsumer','CacheApp',function($http,$q,APIConsumer,CacheApp){
  var factory = {};

  factory.loadComments = function(room,topic,token){
    var url = 'https://www.qisc.us/api/v1/mobile/topic/'+topic+'/comment/'+100000+'/token/'+token;
    
    var deferred = $q.defer();

    APIConsumer.getData(url)
    .then(function(data){
      if('results' in data){
//        CacheApp.setComments(data.results);
        deferred.resolve(data.results);
      }else{
        deferred.reject(data);
      }
    })
    return deferred.promise;
  }
  
  factory.postComments = function(room,data){
    
    var url = 'https://www.qisc.us/api/v1/mobile/postcomment';
    var params = {};
    params.data = data;
    
    var deferred = $q.defer();

    APIConsumer.postData(url,params)
    .then(function(data){
      if(data.success==1){
//        CacheApp.setComments(data.results);
        deferred.resolve(data.results);
      }else{
        deferred.reject(data);
      }
    })
    return deferred.promise;
  }
  return factory;
}]);