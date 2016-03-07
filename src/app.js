var app = angular.module('healfies', ['ngRoute', 'ngMaterial', 'angular-loading-bar', 'ngTagsInput']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: '/src/partials/timeline.html', controller: 'TimelineController'})
    .otherwise({redirectTo: '/'});
});
