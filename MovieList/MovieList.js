if (Meteor.isClient) {

//isClient ends
}

//isServer begins
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
