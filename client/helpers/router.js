Meteor.Router.add({
  '/': 'tweetsList',

  '/tweets/:_id': {
  	to: 'tweetPage',
  	and: function(id) {
  		Session.set('currentTweetId', id);
  	}
  },

  '/submit': 'tweetSubmit',

  '/profile/:_id' : {
    to: "userProfile",
    and: function(id) {
      Session.set('profileUser', id);
    }
  },

  '/tweets/:_id/edit': {
    to: 'tweetEdit', 
    and: function(id) { Session.set('currentTweetId', id); }    
  },
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