// Write your tests here!
// Here is an example.
Tinytest.add('verify forge is defined on the server', function (test) {
  test.isTrue(Meteor.isServer, "not on server");
  test.isTrue(forge != undefined, "forge is undefined");
});
