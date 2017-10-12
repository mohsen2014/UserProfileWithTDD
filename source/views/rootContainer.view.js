import mn from 'backbone.marionette';
import profileContainer from './profileContainer.view';
import profileDetailContainer from './profileDetailContainer.view';

let rootContainer = mn.View.extend({
	template: `
	<div>
		<div id="profileRegion"></div>
		<div id="profileDetailRegion"></div>
	</div>
	`,
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