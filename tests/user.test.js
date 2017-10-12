import {userView as UserView ,usersCollectionView as UsersCollectionView} from './../source/views/user.view';
import {userModel as UserModel ,usersCollection as UsersCollection} from './../source/models/user.model';

test('add model to user View', () => {
	let user_Model = new UserModel({
		userName: 'mohsen',
		email: 'm.m@gmail.com'
	});
	let userView = new UserView({ model: user_Model }).render();
	expect(userView.$el.html()).toMatch(/[mohsen]|[amir]/g);
	expect(userView.$el.html()).toMatch(/[m.m@gmail.com]/g);
});

test('change model in user View', () => {

	let userModel = new UserModel({
		userName: 'mohsen',
		email: 'm.m@gmail.com'
	});
	let userView = new UserView({ model: userModel }).render();
	userView.model.set('userName', 'ali');
	userView.model.set('email', 'ali@gmail.com');
	expect(userView.$el.html()).toMatch(/ali+/g);
	expect(userView.$el.html()).toMatch(/ali@gmail.com+/g);
});

test('create users with collection', () => {

	let userModel1 = new UserModel({
		userName: 'mohsen',
		email: 'm.m@gmail.com'
	});
	
	let userModel2 = new UserModel({
		userName: 'ali',
		email: 'ali@gmail.com'
	});
	const users = new UsersCollection([userModel1, userModel2]);
	
	let usersCollectionView = new UsersCollectionView({
		collection: users,
		childView: UserView
	}).render();
	
	expect(usersCollectionView.$el.find('.user-container').length).toBe(2);
});
