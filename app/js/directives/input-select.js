define(['./index'], function (directives) {
    directives.directive("inputSelect", [function () {
      var fileUrl;
      return {
        restrict: 'A',
   
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            // save default value to restore on blur
            fileUrl = element.val();
            // highlight all text for easy copying
            element.select();
          });

          element.bind('blur', function() {
            // restore original value
            element.val(fileUrl);
          });
        }
      };
    }]);
});