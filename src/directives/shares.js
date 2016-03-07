app.directive('shares', function($compile, UserService) {
  return {
      restrict: 'E',
      scope: {
        users: '@users'
      },
      link: function(scope, element, attrs) {
        var users = UserService.getById(attrs['users']);

        if (users.length > 1) {
          var tpl = '<div class="user-shares"><ul>';
          for (var i in users) {
            tpl += '<li><img src='+users[i].photo+' /></li>';
          }
          tpl += '</ul></div>'
          element.replaceWith($compile(tpl)(scope));
        } else {
          var tpl = '<div class="user-shares"><ul><li><img src='+users.photo+' /></li></ul></div>';
          element.replaceWith($compile(tpl)(scope));
        }
      }
  };
})
