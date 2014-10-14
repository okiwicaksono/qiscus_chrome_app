qiscusCache.factory("CacheApp",[function(){
  var token = null
  var email = null
  var rooms = null
  var factory = {
    setToken : function(code){
      if(typeof code == "undefine" && code == null)
        return false
      token = code;
      return true;
    },
    getToken : function(){
      return token;
    }, 
    setEmail : function(username){
      if(typeof username == "undefine" && username == null)
        return false
      email = username;
      return true;
    },
    getEmail : function(){
      return email;
    },
    setRooms : function(data){
      if(typeof data == "undefine" && data == null)
        return false
      rooms = data;
      return rooms;
    },
    getRooms : function(){
      return rooms;
    },
    getTopic : function(room_id,topic_id){
      for(var i in rooms){
        console.log(rooms[i].id+"="+room_id);
        if(rooms[i].id == room_id){
          for(var j in rooms[i].listtopics){
            if(rooms[i].listtopics[j].id==topic_id){
              return rooms[i].listtopics[j];
            }
          }
        }
      }
      return false;
    },
    setComments : function(room,topic){
      if(typeof code == "undefine" && code == null)
        return false
//      rooms = data.rooms;
//      return true;
    },
    getComments : function(room,topic){
//      return rooms;
    }
  };
  
  
  return factory;
}]);