var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: (process.env.NODE_ENV !== 'production') });

var firebase = require('firebase');

var LOGIN_PAGE = 'https://is.breezecard.com/marta/loginInitial.do';

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  databaseURL: "https://martahack-ff550.firebaseio.com",
});

firebase.database().ref('users').on('value', function(snapshot){
  var users = snapshot.val();
  for (var userId in users) {
    if (users.hasOwnProperty(userId)) {
      var user = users[userId].record;
      executeForUser(user);
    }
  }
});

function executeForUser(user){
  console.log('running for user ', user.email);
  return nightmare
    .goto(LOGIN_PAGE)
    .type('input[name="email"]', user.email)
    .type('input[name="password"]', user.password)
    .click('#graphics_submit_div > table > tbody > tr > td > a')
    .on('page', function(type, message, response){
      if(type === "confirm"){
        console.log('got confirm', message);  
      }
    })
    .wait(3000)
    .evaluate(function(minRides){
      var rides = 0;

      // active rides
      var active_tbody = document.querySelector('#row1 > td > table:nth-child(1) > tbody');
      for(var i = 1; i < active_tbody.children.length; i++){
        var row = active_tbody.children[i];
        var column = row.children[1];
        rides += (parseInt(column.textContent, 10) || 0);
      }

      var new_tbody = document.querySelector('#row1 > td > table:nth-child(2) > tbody');
      for(var i = 1; i < new_tbody.children.length; i++){
        var row = new_tbody.children[i];
        rides += (parseInt(row.children[0].textContent, 10) || 0);
      }
      return rides < minRides;
    }, parseInt(user.minRides, 10) || 10)
    .then(function(needsMoreRides){
      if(needsMoreRides){
        console.log(user.email, 'needs more rides');
        return nightmare
          .click('a[title="Add Trips to Existing Card"]')
          .wait(3000)

          // select ridthis, remotees
          // .check('#31 2_120 Trip_22e 50_17921_MARTA_1') // illegal selector
          .check('input[type="checkbox"][value="'+({1: "12", 2: "13", 10: "14", 20: "15"}[user.ridesToAdd] || "14")+'"]')
          .click('#addMoneyToCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(4) > a')
          .wait(5000)

          // confirmation page
          .click('#myCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(6) > td > a:nth-child(4)')
          .wait(3000)

          // TODO check that a card exists at #paymentCardId
          .type('#cvn', user.cvv)
          .click('#paymentMethodDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(4) > td > a:nth-child(4)')
          .wait(3000)

          // TODO click confirm!
          .click('#reviewOrderDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(13) > td > a:nth-child(4)')

          // finally logout
          .click('#breadcrumbs_icon_signout > a')
          .wait(5000)
          .end();
      }else{
        console.log(user.email, 'is good to go');
        return nightmare.end();
      }
    })
    .then(function(result){
      console.log(result);
    }).catch(function(err){
      console.error(err);
    });
}