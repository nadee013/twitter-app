Meteor.subscribe("tweets");

Deps.autorun(function() {
	
  Meteor.subscribe('reply', Session.get('currentTweetId'));
});

Meteor.subscribe('notifications');