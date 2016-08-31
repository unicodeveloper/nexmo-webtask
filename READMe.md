# Webtask Script for Sending SMS

A simple webtask script for sending SMS using the Nexmo SMS API Service

## End User Usage

*Go to your browser and put in this URL*
- [https://webtask.it.auth0.com/api/run/wt-prosperotemuyiwa-gmail_com-0/sms?phoneno=xxxxxx&message=xxxxxxx](https://webtask.it.auth0.com/api/run/wt-prosperotemuyiwa-gmail_com-0/sms?phoneno=xxxxxxxx&message=xxxxxxx)
- Replace phoneno value with a real phone number -
- Replace message value with a real message

### Developer Installation

1. Clone this repository: `git clone git@github.com:unicodeveloper/nexmo-webtask.git nexmo-webtask/`
2. `cd` into the nexmo-webtask folder.
3. Run `npm install`.
4. Go to [https://nexmo.com](https://nexmo.com/), register and get your public key and access token.
5. Run `wt create sms.js --secret apiKey=xxxxxxxxx --secret apiSecret=xxxxxxxxxxx` . Make sure you have `wt-cli` installed.

