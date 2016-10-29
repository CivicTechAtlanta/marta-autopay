# Marta Breeze Auto-Renew

Worried about running out of rides on your Breeze card? Worry no more. Simply sign up for our service
and we'll ensure you're always topped off and automatically charge your credit card when you need more.

## How to Use

1. Hop over to https://marta-autopay.herokuapp.com/ and provide us your login info. You only have to do this once.
2. Forget about how many rides you have left.

### Caveats

Version 1 makes several assumptions:

- You must already have an account on the Breeze service. [Register Here](https://is.breezecard.com/marta/)
- You should have **exactly** one card registered on your account (more than one card causes "undefined behavior")
- You should have **exactly** one credit card on file (more than one causes "undefined behavior")
- You should have **exactly** one address on file, which is the billing address of the credit card (more than one causes "undefined behavior")

## Tech

- [Nightmare.js](http://www.nightmarejs.org/) for web scraping
- [Firebase](https://firebase.google.com/) for data storage
- [Bootstrap](https://getbootstrap.com/) for UI
- [serve-static](https://www.npmjs.com/package/serve-static) webserver
- [Heroku](https://www.heroku.com/) for hosting

## Contributors

- [@josh75337](https://github.com/josh75337)
- [Cameron Kilgore](https://github.com/ghostfreeman)
- [Julian Knight](https://github.com/rabidaudio)
- [Sam Mershon](https://github.com/sammershon)
- [Eric Pate](https://github.com/RamblinWreck77)

