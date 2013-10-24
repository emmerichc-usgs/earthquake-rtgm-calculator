/*global define*/

define([
	'rtgm/Curve',
//	'rtgm/RTGMCalculator',
	'rtgm/RTGMInputView',
//	'rtgm/RTGMModel',
//	'rtgm/RTGMOutputView',
	'util/Util'
], function (Curve, RTGMInputView) {
	'use strict';

	var RTGMApplication = function (options) {

		// setup child views

		this.rtgmInputView = new RTGMInputView({
			el: options.elRtgmInputView
		});
			
/*		this.rtgmOutputView = new RTGMOutputView({
			el: options.elRtgmOutputView
		}); */

		// setup event handling
		this.addEventListener('parseError', parseError);
		this.addEventListener('onHazardCurve', parseSuccess);
		this.addEventListener('onServiceReturn', serviceProcess);
	};

	RTGMInputView.prototype.parseError = function (evt) {
		console.log("hazard curve parser error');
	};
	RTGMInputView.prototype.parseSuccess = function (evt) {
		console.log("hazard curve parser success');
	};
	RTGMInputView.prototype.onServiceReturn = function (evt) {
		console.log("service return');
	};

	return RTGMApplication;

});
