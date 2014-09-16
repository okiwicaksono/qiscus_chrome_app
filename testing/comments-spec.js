describe("commentsController",function(){
  var $rootScope, $scope, controller;
  
  beforeEach(function(){
    module("qiscusApp");
    
    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("commentsController",{$scope: $scope});
    });
  });

  describe("Initiate",function(){
    describe("Variabel hardcoded :D",function(){
      it("should be and email and equal to sunupf@gmail.com",function(){
        expect(controller.email).toEqual("sunupf@gmail.com");
      });
      it("should be and integer and equal to 2141",function(){
        expect(controller.roomId).toEqual(2141);
      });
      it("should be and integer and equal to 4284",function(){
        expect(controller.topic).toEqual(4284);
      });
    });
  });
  
  
})