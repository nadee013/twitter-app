Tweets = new Meteor.Collection('tweets');

Tweets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
	tweet: function(tweetAttributes) {
		var user = Meteor.user();

		// ensure the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to login to tweet");		
		}

		// ensure the post has a title
		if (!tweetAttributes.tweet) {
			throw new Meteor.Error(422, 'Please fill in above to tweet');	
		}

		// pick out the whitelisted keys
		var tweet = _.extend(_.pick(tweetAttributes, 'tweet'), {
			userId: user._id, 
			author: user.username, 
			submittedOn: new Date()
		});

		var tweetId = Tweets.insert(tweet);

		return tweetId;
	}
});