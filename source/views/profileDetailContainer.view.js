// let mn = require('backbone.marionette');
// let _ = require('underscore');
import mn from 'backbone.marionette';
import _ from 'underscore';

let profileDetailsContainer = mn.View.extend({
	template: _.template(`
		<div id='profileDetailContainer'></div>
	`)
});
export default profileDetailsContainer;