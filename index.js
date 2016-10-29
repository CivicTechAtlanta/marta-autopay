var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });


var loginPage = 'https://is.breezecard.com/marta/loginInitial.do';
var username = 'midjtxc@gmail.com';
var password = 'marta1234';
var cvn = '1234'; // '6592';
var minRides = 70;

nightmare
    .goto(loginPage)
    .type('input[name="email"]', username)
    .type('input[name="password"]', password)
    .click('#graphics_submit_div > table > tbody > tr > td > a')
    .on('page', function(type, message, response){
      if(type === "confirm"){
        console.log('got confirm', message);  
      }
    })
    .wait(3000)

    // TODO calucate rides
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
    }, minRides)
    .then(function(needsMoreRides){
      if(needsMoreRides){
        return nightmare
          .click('a[title="Add Trips to Existing Card"]')
          .wait(3000)

          // select ridthis, remotees
          // .check('#31 2_120 Trip_22e 50_17921_MARTA_1') // illegal selector
          .check('input[type="checkbox"][value="14"]')
          .click('#addMoneyToCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(4) > a')
          .wait(5000)

          // confirmation page
          .click('#myCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(6) > td > a:nth-child(4)')
          .wait(3000)

          // TODO check that a card exists at #paymentCardId
          // .type('#cvn', cvn)
          // .click('#paymentMethodDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(4) > td > a:nth-child(4)')
          // .wait(3000)

          // TODO click confirm!
          // .click('#reviewOrderDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(13) > td > a:nth-child(4)')

          // finally logout
          .click('#breadcrumbs_icon_signout > a')
          .wait(5000)
          .end()
      }else{
        return nightmare.end();
      }
    })
    .then(function(result){
      console.log(result);
    }).catch(function(err){
      console.error(err);
    });