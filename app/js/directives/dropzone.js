define(['./index'], function (directives) {
    'use strict';
    directives.dropzone = function() {
	    return {
	      restrict: 'C',
	 
	      link: function(scope, element, attrs) {
	      	require(['dropzone'],
	      		function() {
	      			$(element).dropzone();
	      		}
	      	);
	      }
	    };
	};
});