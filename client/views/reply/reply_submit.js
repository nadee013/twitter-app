Template.replySubmit.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var reply = {
      body: $(event.target).find('[name=body]').val(),
      tweetId: template.data._id
    };

	Meteor.call('reply', reply, function(error, replyId) {
		error && throwError(error.reason);

    body: $(event.target).find('[name=body]').val("");
	});
  }
});
