Template.userProfile.helpers({

	myTweets: function() {
		return Tweets.find({ userId : Session.get('profileUser') }, {sort: { submittedOn: -1 }});
	},
	userData: function() {
		window.user = Meteor.users.findOne({ _id: Session.get('profileUser') });
		console.log(user);
		return user;
	} 
});