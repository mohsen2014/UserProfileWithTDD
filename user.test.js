
var view = require('./userView');
var UserModel = require('./user.model');


test('add model to user View', () => {

	let userModel = new UserModel.user({
		userName: "mohsen",
		email: "m.m@gmail.com"
	});
	let userView = new view.userView({ model: userModel }).render();


	expect(userView.$el.html()).toMatch(/[mohsen]|[amir]/g)
	expect(userView.$el.html()).toMatch(/[m.m@gmail.com]/g)
});

test('change model in user View', () => {

	let userModel = new UserModel.user({
		userName: "mohsen",
		email: "m.m@gmail.com"
	});
	let userView = new view.userView({ model: userModel }).render();
	userView.model.set("userName", "ali");
	userView.model.set("email", "ali@gmail.com");
	expect(userView.$el.html()).toMatch(/ali+/g);
	expect(userView.$el.html()).toMatch(/ali@gmail.com+/g);
});

test('create users with collection', () => {

	let userModel1 = new UserModel.user({
		userName: "mohsen",
		email: "m.m@gmail.com"
	});
	
	let userModel2 = new UserModel.user({
		userName: "ali",
		email: "ali@gmail.com"
	});
	const users = new UserModel.usersCollection([userModel1, userModel2]);
	
	let usersCollectionView = new view.usersCollectionView({
		collection: users,
		childView: view.userView
	}).render();
	
	expect(usersCollectionView.$el.find('.user-container').length).toBe(2);
})
