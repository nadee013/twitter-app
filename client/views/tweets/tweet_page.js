Template.tweetPage.helpers({
	currentTweet: function() {
		return Tweets.findOne(Session.get('currentTweetId'));
	},

	reply: function() {
    	return Reply.find({tweetId: this._id});
  	}
});