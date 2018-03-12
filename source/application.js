// var mn = require("backbone.marionette");
// var rootContainer = require("./views/rootContainer");
import mn from 'backbone.marionette';
import rootContainer from './views/rootContainer.view';
import $ from 'jquery';

$(() => {

	new mn.Application({
		region: '#root',
		onStart() {
			this.showView(new rootContainer());
		},
		initialize() {
			console.log('Start Application');
		}
	}).start();
});