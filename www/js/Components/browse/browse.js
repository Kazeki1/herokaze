(function() {
  angular.module('app')
    .component(
      'browse',{
        bindings: {},
        templateUrl: 'js/Components/browse/browse.html',
        controller: browseController,
        controllerAs: 'vm'
      });
    function browseController() {
      var vm = this;
      vm.$onInit = onInit;

      function onInit() {

      }

    }
  })();