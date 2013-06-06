Template.tweetEdit.helpers({
  tweet: function() {
    return Tweets.findOne(Session.get('currentTweetId'));
  }
});

Template.tweetEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentTweetId = Session.get('currentTweetId');

    var tweetProperties = {
      tweet: $(event.target).find('[name = updateTweet]').val()
    }

    Tweets.update(currentTweetId, {$set: tweetProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('tweetPage', currentTweetId);
      }
    });
  }
});