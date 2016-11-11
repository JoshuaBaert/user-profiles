/**
 * Created by Joshua Baert on 11/10/2016.
 */

var users = [
	{
		name: 'Preston McNeil',
		password: 'password1',
		friends: ['Lindsey Mayer', 'Terri Ruff']
	},
	{
		name: 'Ryan Rasmussen',
		password: '$akgfl#',
		friends: ['Lindsey Mayer']
	},
	{
		name: 'Terri Ruff',
		password: 'hunter2',
		friends: ['Lindsey Mayer', 'Preston McNeil']
	},
	{
		name: 'Lindsey Mayer',
		password: '777mittens777',
		friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
	}
];

module.exports = {
	login: function (req, res, next) {
		
		var user = users.find(function (index) {return index.name === req.body.name;});
		
		if(user && user.password === req.body.password) {
			req.session.currentUser = user;
			res.json({userFound: true})
		} else {
			res.json({userFound: false})
		}
		
	},
	
	
};