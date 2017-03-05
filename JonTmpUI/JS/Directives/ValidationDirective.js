/*
Validation directive for forms and fields in forms
*/

app.directive('vdtMessage', function ($compile, $parse) {
	return {
		restrict: 'E',
		compile: function (element, attrs) {
			return function (scope, element, attrs) {
				var template =
				'<div ng-messages="' + attrs.control + '.$error" ng-show="' + attrs.control + '.$dirty">' +
					'<div ng-message="' + attrs.type + '" class="alert alert-warning">' +
						<!-- '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + -->
						attrs.message +
					'</div>' +
				'</div>';
				element.replaceWith($compile(template)(scope));
			}
		}
	}
});
