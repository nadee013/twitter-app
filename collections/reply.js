Reply = new Meteor.Collection('reply');

Meteor.methods({
  reply: function(replyAttributes) {

    // create the reply, save the id
    reply._id = Reply.insert(reply);
    // now create a notification, informing the user that there's been a reply
    createReplyNotification(reply);
    return reply._id;
  }
});