Notifications = new Meteor.Collection('notifications');

// Notifications.allow({
// 	update: ownsDocument
// });

createReplyNotification = function(reply) {
	var tweet = Tweets.findOne(tweet.tweetId);
	
	Notifications.insert({
		userId: tweet.userId,
		tweetId: tweet._id,
		replyId: reply._id,
		replierName: reply.author,
		read: false
	});
};