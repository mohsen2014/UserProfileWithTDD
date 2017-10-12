// let rootContainer = require('./source/views/rootContainer')
import rootContainer from './../source/views/rootContainer.view';

test('create root Container', () => {
	let root = new rootContainer({}).render();
	// console.log('root' + root.$el.html());
	expect(root.$el.find('#profileContainer').length).toBe(1);
	expect(root.$el.find('#profileDetailContainer').length).toBe(1);
});