/**
 * Created by Joshua Baert on 11/10/2016.
 */

var profiles = [
	{
		name: 'Preston McNeil',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
		status: 'Everything is bigger in Texas'
	},
	{
		name: 'Ryan Rasmussen',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
		status: 'RR Rules'
	},
	{
		name: 'Terri Ruff',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
		status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
	},
	{
		name: 'Lindsey Mayer',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
		status: 'OMG MITTENS DID THE CUTEST THING TODAY'
	}
];

module.exports = {
	friends: function (req, res, next) {
		var userFriends = [];
		for (var i = 0; i < req.session.currentUser.friends.length; i++) {
			userFriends.push(profiles.find(function (index) {
				return index.name === req.session.currentUser.friends[i];
			}))
		}
		res.json({
			currentUser: req.session.currentUser,
			friends: userFriends,
		});
	}
};