qiscusModule.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login-partial.html',
      controller: 'loginController'
    })
    .state('comments',{
      url: '/comments/{room:[0-9]{1,8}}/{topic:[0-9]{1,8}}"',
      templateUrl: 'partials/comments-partial.html',
      controller: 'commentsController'
    })
    .state('rooms',{
      url: '/rooms',
      templateUrl: 'partials/rooms-partial.html',
      controller: 'roomsController'
    })
});