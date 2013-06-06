Template.tweetsList.helpers({
  tweets: function() {
    return Tweets.find({}, {sort: { submittedOn : -1 }});
  }
});