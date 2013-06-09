Reply = new Meteor.Collection('reply');

Meteor.methods({
  reply: function(replyAttributes) {
  	var user = Meteor.user();
  	var tweet = Tweets.findOne(replyAttributes.tweetId);

  	if (!user)
      throw new Meteor.Error(401, "You need to login to reply");
    if (!replyAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');
    if (!replyAttributes.tweetId)
      throw new Meteor.Error(422, 'You must reply on a tweet');
    
    reply = _.extend(_.pick(replyAttributes, 'tweetId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });
    
	Tweets.update(reply.tweetId, {$inc: {replyCount: 1}});
    return Reply.insert(reply);
  }
});