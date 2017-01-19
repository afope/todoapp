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
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };

});
