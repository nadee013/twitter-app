Template.userProfile.helpers({
	myTweets: function() {
		return Tweets.find({ userId : Meteor.userId() }, {sort: { submittedOn: -1 }});
	}
});