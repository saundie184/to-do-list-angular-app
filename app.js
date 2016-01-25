angular.module('toDo', [])
  .controller('ListController', ['$scope', function($scope) {
    var vm = this;
    vm.toDoArray = [];
    vm.item = '';

    vm.addToDo = function() {
      if (vm.item) {
        vm.toDoArray.push(this.item);
        vm.item = '';
      }
    };


    vm.doingArray = [];

    vm.nowDoing = function(task) {
      vm.doingArray.push(task);
      var remove = vm.toDoArray.indexOf(task);
      vm.toDoArray.splice(remove,1);
      vm.task = '';
      vm.item = '';
    };

    vm.doneArray = [];

    vm.nowDone = function(task) {
      vm.doneArray.push(task);
      var remove = vm.doingArray.indexOf(task);
      vm.doingArray.splice(remove,1);

      vm.task = '';
      vm.item = '';
    };

    vm.removeItem = function(task){
      var remove = vm.doneArray.indexOf(task);
      vm.doneArray.splice(remove,1);
    };

  }]);
