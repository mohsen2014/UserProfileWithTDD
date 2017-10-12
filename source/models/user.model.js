var Mn = require('backbone.marionette');
var backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var userModel = backbone.Model.extend({
	default: {
		userName: '',
		email: ''
	}
});


var usersCollection = backbone.Collection.extend({
	model: userModel
});

export {
	userModel,
	usersCollection
};