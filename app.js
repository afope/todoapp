var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.message = 'Angular is pretty cool.';
  $scope.todos = [
    {
      text: 'Email Ire',
      isComplete: false
    },
    {
      text: 'Go Swimming',
      isComplete: false
    },
    {
      text: 'Program or be programmed',
      isComplete: false
    },
    {
      text: 'Submit Stories',
      isComplete: false
    }

  ];

  $scope.done = function(todo) {
    console.log("complete");
    todo.isComplete = true;
};

$scope.undone = function(todo) {
    todo.isComplete = false;
    console.log("incomplete");
};

  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      var todo = {
        text: $scope.todoText,
        isComplete: false
      };
      $scope.todos.push(todo);
      $scope.todoText ='';
  }
  //$scope.add = add;
  };

  $scope.hideMe = function(todo){
     todo.hide=true;
   }


});
