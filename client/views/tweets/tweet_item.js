Template.tweetItem.helpers({
  replyCount: function() {
    return Reply.find({tweetId: this._id}).count();
  },

  ownTweet: function() {
    return this.userId == Meteor.userId();
  }
});