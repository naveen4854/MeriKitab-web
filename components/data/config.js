angular.module('meriKitab')
.constant("myConfig", {
      urlExt: "http://localhost:8080",
      'USER_ROLES': {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
      },
      'AUTH_EVENTS': {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
      }
})
;
