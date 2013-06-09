Template.tweetItem.helpers({

  ownTweet: function() {
    return this.userId == Meteor.userId();
  }
});