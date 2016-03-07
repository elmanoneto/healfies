app.directive('folders', function($compile) {
  return {
      restrict: 'E',
      scope: {
        items: '@items'
      },
      link: function(scope, element, attrs) {
        if (attrs['items'].indexOf(',') > -1) {
          var items = attrs['items'].split(',');
          var tpl;
          tpl = '<div class="folders"><ul>';
          for(var i in items) {
            tpl += '<li>'+items[i]+'</li>';
          }
          tpl += '</ul></div>';
          element.replaceWith($compile(tpl)(scope));
        } else {
          var tpl = '<div class="folders"><ul><li>'+attrs['items']+'</li></ul></div>';
          element.replaceWith($compile(tpl)(scope));
        }
      }
  };
})
