var Mn = require("backbone.marionette");
var backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");

var userView = Mn.View.extend({
	tagName: 'div',
	template: _.template(`
			<div class='user-container'>
        <h3>user Name:</h3> <h4> <%-userName%> </h4>
				<h3> email: </h3> <h4> <%-email%> </h4>
			</div>
    `),
		modelEvents: {
			'change': 'render'
	}
});



 var usersCollectionView = Mn.CollectionView.extend({
	// collection: myCollection,
	// childView: view.userView
});


export {
	userView,
	usersCollectionView
}