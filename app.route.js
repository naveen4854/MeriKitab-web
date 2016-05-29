angular.module('meriKitab')
    .config(function($stateProvider, myConfig) {
        $stateProvider
            .state('home', {
                url: "/",
                views: {
                    'header': {
                        controller: 'headerController',
                        templateUrl: "/features/header/header.html",
                    },
                    'content': {
                        controller: 'boardController',
                        templateUrl: "/features/board/board.html",
                    },
                    'footer': {
                        controller: 'footerController',
                        templateUrl: "/features/footer/footer.html",
                    }
                },
                data: {
                    authorizedRoles: [myConfig.USER_ROLES.admin, myConfig.USER_ROLES.editor]
                }
            })
            .state('board', {
                url: "/board",
                views: {
                    'header': {
                        controller: 'headerController',
                        templateUrl: "/features/header/header.html",
                    },
                    'content': {
                        controller: 'boardController',
                        templateUrl: '/features/board/board.html',
                    },
                    'footer': {
                        controller: 'footerController',
                        templateUrl: "/features/footer/footer.html",
                    }
                },
                data: {
                    authorizedRoles: [myConfig.USER_ROLES.admin, myConfig.USER_ROLES.editor]
                }
            })
            .state('franchise', {
                url: "/franchise",
                views: {
                    'header': {
                        controller: 'headerController',
                        templateUrl: "/features/header/header.html",
                    },
                    'content': {
                        controller: 'franchiseController',
                        templateUrl: '/features/franchise/franchise.html',
                    },
                    'footer': {
                        controller: 'footerController',
                        templateUrl: "/features/footer/footer.html",
                    }
                },
                data: {
                    authorizedRoles: [myConfig.USER_ROLES.admin, myConfig.USER_ROLES.editor]
                }
            })
            .state('login', {
                url: "/login",
                views: {
                    'content': {
                        controller: 'loginController',
                        templateUrl: '/features/login/login.html',
                    }
                },
                data: {
                    authorizedRoles: [myConfig.USER_ROLES.admin, myConfig.USER_ROLES.editor]
                }
            });
    });
