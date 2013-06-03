Template.tweetPage.helpers({
	currentTweet: function() {
		return Tweets.findOne(Session.get('currentTweetId'));
	}
});