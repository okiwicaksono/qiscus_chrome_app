angular.module("qiscusApp",[])
  .controller("commentsController",['$scope','$http',function($scope,$http){
    var roomId = 123;
    var topic = 21;
    
    var login = {
      'user[email]':"oki@qiscus.com",
      'user[password]':"qiscusisgreat"
    };
    
  console.log(login);
   $http({
     url:'https://www.qisc.us/users/sign_in.json',
     method:"POST",
     data:login
   }).
    success(function(data) {
      console.log(data);
    });
    /*var token = getToken(username,password);
    
    var unformatedComments = getComments(roomId,topic,token);
    
    var $scope.comments = reformatChat(unformatedComments);
    
    var sendComment = postComment($scope.comment,topic,token)*/
    
  }]);



/**
 * Function untuk mereformat list comment yang didapat dari server kedalam bentuk pertanggal posting
 * @param   {Object} comments koment lists yang didapat dari server
 * @returns {Object} object yang telah diformat ulang bentuknya
 */
function reformatChat(comments){
  return data;
}

/**
 * Function untuk mendapat kan list comment dari room tertentu dan topic tertentu
 * @param   {Number} room  id room yang dilihat
 * @param   {Number} topic id topic yang dipilih
 * @param   {String} token token yang didapat saat login
 * @returns {Object} list comment yang belum terformat per hari
 */
function getComments(room,topic,token){
  return data;
}

/**
 * Function untuk mendapatkan token, token digunakan untuk mengakses room dan topic dalam aplikasi
 * @param   {String} email    email pengguna
 * @param   {String} password password pengguna
 * @returns {String} token, didapat jika berhasil login
 */
function getToken(email,password){
  return token;
}

/**
 * function untuk menge-post comment
 * @param   {String}  comment text yang akan di post
 * @param   {Number}  topic   id dari topic yang active
 * @param   {String}  token   token
 * @returns {Boolean} return status apakah post berhasil atau tidak
 */
function postComment(comment,topic,token){
  return status;
}