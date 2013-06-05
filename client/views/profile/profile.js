Template.userProfile.helpers({
	myTweets: function() {
		return Tweets.find({ userId : Meteor.userId() }, {sort: { submitted: -1 }});
	}
});