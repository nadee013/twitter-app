Meteor.publish('notifications', function() {
  return Notifications.find();
});

Meteor.publish('reply', function(tweetId) {
   return Reply.find({tweetId: tweetId});
});

Meteor.publish('tweets', function() {
	return Tweets.find();
})