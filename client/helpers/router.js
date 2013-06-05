Meteor.Router.add({
  '/': 'tweetsList',

  '/tweets/:_id': {
  	to: 'tweetPage',
  	and: function(id) {
  		Session.set('currentTweetId', id);
  	}
  },

  '/submit': 'tweetSubmit',

  '/profile': 'userProfile'
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user()) {
			return page;	
		}
		else if (Meteor.loggingIn()) {
			return 'loading';	
		}
		else {
			return 'accessDenied';		
		}
	}
});

Meteor.Router.filter('requireLogin', {only: 'tweetSubmit'});