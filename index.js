
  // login, home, buy1, buy2, 
  // 'https://is.breezecard.com/marta/loginInitial.do'


var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });


var loginPage = 'https://is.breezecard.com/marta/loginInitial.do';
var username = 'midjtxc@gmail.com';
var password = 'marta1234';
var cvn = '6592';


nightmare
  // .goto('https://is.breezecard.com/marta/multiusercontrol.do')
  // .evaluate(function(){
  //   var e = document.getElementById('breadcrumbs_icon_signout');
  //   if(e){
  //     // $('#breadcrumbs_icon_signout > a').click();
  //     e.firstChild.click();
  //   }else{
  //     window.location.href = 'https://is.breezecard.com/marta/loginInitial.do';
  //   }
  // })
  // .wait(1000)

    // .useragent('Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7')
    .goto(loginPage)
    .type('input[name="email"]', username)
    .type('input[name="password"]', password)
    .click('#graphics_submit_div > table > tbody > tr > td > a')
    .on('page', function(type, message, response){
      if(type === "confirm"){
        console.log('got confirm', message);
      }
    })
    .wait(1000)
    // .exists('#row1 > td > table:nth-child(2) > tbody > tr > td')
    // .inject('js', 'jquery-migrate-1.4.1.js')
    // .wait(1000)
    // // .evaluate(function(){ return typeof(window.jQuery); })

    // // TODO calucate rides

    .click('a[title="Add Trips to Existing Card"]')
    .wait(3000)

    // select ridthis, remotees
    // .check('#31 2_120 Trip_22e 50_17921_MARTA_1') // illegal selector
    .scrollTo(518, 0)
    .check('input[type="checkbox"][value="14"]')
    .scrollTo(1144, 0)
    .click('#addMoneyToCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(4) > a')
    .wait(1000)

    // confirmation page
    .click('#myCartDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(6) > td > a:nth-child(4)')
    .wait(1000)

    // TODO check that a card exists at #paymentCardId
    .type('#cvn', cvn)
    .click('#paymentMethodDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(4) > td > a:nth-child(4)')
    .wait(1000)

    //TODO click confirm!
    // .click('#reviewOrderDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(13) > td > a:nth-child(4)')

    // finally logout
    .click('#reviewOrderDiv > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(13) > td > a:nth-child(4)')

    .end().then(function(result){

      console.log(result);

    }).catch(function(err){
      console.error(err);
    });