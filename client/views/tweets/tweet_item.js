Template.tweetItem.helpers({
  replyCount: function() {
    return Reply.find({tweetId: this._id}).count();
  }
});