angular.module('meriKitab')
.service('Session', function () {
  this.create = function (user) {
    this.user = user;
    //this.userRole = user.userRole;
    this.userRole = 'admin';
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
})
