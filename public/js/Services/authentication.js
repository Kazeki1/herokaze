//160928-recipeApp_Services_authentication_js
(function () {
  angular.module('app')
    .service('authenticationService', function ($sessionStorage, $localStorage,  $q, $state, userService) {

      this.login = login;
      this.logout = logout;
      this.createUserFromEmail = createUserFromEmail;

      /**
       * @loghen41 createUserFromEmail() creates a user in firebase based on the email and password given to it
       * @loghen41 it assumes you have already validated the password
       * @loghen41 it returns a promise that contines the user object generated by firebase, or a creation error from firebase
       * @param email
       * @param password
         * @returns {Promise}
         */
      function createUserFromEmail(email, password) {
        
        var promise = $q.defer();

        return promise.promise;

      }

      /**
       * @loghen41 login() allows the user to login, it can either be achieved through a provider (facebook, google, etc...)
       * @loghen41 If a provider is not given, it can be done through an email and password, provided they are already established as credentials in the system
       * @loghen41 the return object is either a user object, or a loginError with a message
       * @param provider
       * @param email
       * @param password
         * @returns {Promise}
         */
      function login(provider, email, password) {
        

        var promise = $q.defer();
        
        return promise.promise;
      }

      /**
       * @loghen41 logout() basically logs the user out of firebase, and reroutes the individual to the tabs.login, and sets the user as undefined in this model
       * @returns {undefined|*}
         */
      function logout() {
        var user = undefined;
        userService.setUser(user);
        $state.go('tabs.login');

        return user;
      }
      
    });
})();
