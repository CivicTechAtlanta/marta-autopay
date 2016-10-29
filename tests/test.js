var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);

var expect = chai.expect;

var scrape_login = require('../scrape_login');

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });


describe('scrape_login', function(){

  it('should load the next page', function(done){


    scrape_login(nightmare, 'https://is.breezecard.com/marta/loginInitial.do', 'midjtxc@gmail.com', 'marta1234').end().then(function(){

      expect()

    }).then(done).catch(done;)

  });

});