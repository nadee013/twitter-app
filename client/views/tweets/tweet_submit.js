Template.newTweetSubmit.events({
	'submit form': function(event) {
		event.preventDefault();

		var tweet = {
			tweet: $(event.target).find('[name = newTweet]').val(),
			author: "Nadee Hardcoded",
			date: new Date()
		}

		Meteor.call('tweet', tweet, function(error, id) {
			if (error){
				return alert(error.reason);	
			}

			Meteor.Router.to('tweetPage', id);
		});
	}
});