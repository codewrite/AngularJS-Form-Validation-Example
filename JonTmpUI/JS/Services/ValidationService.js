/*
Validation functions for forms and fields in forms
*/

app.service('Validation', function () {

	this.setAllFieldsDirty = function (form) {
		angular.forEach(form, function (field) {
			if (field && field.$dirty !== undefined) {
				field.$setDirty();
			}
		});
	}
	this.invalidAndDirtyCount = function (form) {
		var num = 0;
		angular.forEach(form, function (field) {
			if (field && field.$dirty !== undefined && field.$dirty && field.$invalid) {
				num++;
			}
		}, num);
		return num;
	}

});
