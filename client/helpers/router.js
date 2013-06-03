Meteor.Router.add({
  '/': 'tweetsList',

  'tweets/:_id': {
  	to: 'tweetPage',
  	and: function(id) {
  		Session.set('currentTweetId', id);
  	}
  }
});