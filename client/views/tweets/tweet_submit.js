Template.newTweetSubmit.events({
	'submit form': function(event) {
		event.preventDefault();

		var tweet = {
			tweet: $(event.target).find('[name = newTweet]').val(),
			date: new Date()
		}

		tweet._id = Tweets.insert(tweet);
		Meteor.Router.to('tweetPage', tweet);
	}
});