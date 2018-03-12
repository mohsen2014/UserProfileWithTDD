import mn from 'backbone.marionette';
import profileContainer from './profileContainer.view';
import profileDetailContainer from './profileDetailContainer.view';

let rootContainer = mn.View.extend({
	template: `
	<div class='row'>
		<div id="profileRegion" class='col-md-3'></div>
		<div id="profileDetailRegion" class="col-md-9"></div>
	</div>
	`,
	attributes: {
		class: 'row'
	},
	regions: {
		profileRegion: '#profileRegion',
		profileDetailRegion: '#profileDetailRegion '
	},
	onRender() {
		this.showChildView('profileRegion', new profileContainer());
		this.showChildView('profileDetailRegion', new profileDetailContainer());
	}
});
export default rootContainer;