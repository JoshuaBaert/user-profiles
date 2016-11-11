angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	var getFriends = friendService.getFriends().then(function (res) {
		console.log(res);
		$scope.friends = res.data.friends;
		$scope.currentUser = res.data.currentUser;
	});
	
});