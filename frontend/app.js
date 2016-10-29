/*var BreezeCardInfo = {
  username: userNameField,
  password: passwordField,
  email: emailField,
  ridesToAdd: ridesToAdd
};*/

// Pull values with the attribute from 'value'
// wihin above object
$('#FIELD_ID').attr("value");

// During the click event for the submit, you can initalize the above JSON
// and pass it along through a promise from $http
$(document).ready(function() {
  $('#formSubmit').click(function(event) {
  event.preventDefault();
  var BreezeCardInfo = {
    password: $('#password').val(),
    email: $('#email').val(),
    minRides: $('#minrides').val(),
    ridesToAdd: $('input[name=add_rides]:radio:checked').val(),
    cvv: $('#cvv').val()
  };
  var data = JSON.stringify(BreezeCardInfo);
  $.post('DESTINATION_URL', data, function(data) {
    console.log("Operation Run..");

    //Firebase Test
    console.debug("Firebase obj");
    firebase.database().ref('martahack-ff550/' + BreezeCardInfo.email).set({
      record: data
    });

    }).done(function(data) {
      console.log("Second Operation Run..");
      console.debug(data);
    }).fail(function(data) {
      //Firebase Test
      console.debug("Firebase obj");
      firebase.database().ref('users/' + window.btoa(BreezeCardInfo.email)).set({
        record: BreezeCardInfo
      });

      console.log("Failure");
      console.debug(data);
    }).always(function(data) {
      console.log("This Promise Always Runs");
      console.debug(data);
    });
  });
});
