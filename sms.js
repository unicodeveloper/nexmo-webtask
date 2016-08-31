var request = require('request');

module.exports = function(context, cb) {

  var required_params = ['phoneno', 'message', 'apiKey', 'apiSecret'];

  for (var i in required_params) {
        if (typeof context.data[required_params[i]] === 'undefined') {
            return cb(null, 'Missing ' + required_params[i] + '. Please supply the value.' );
        }
  };

  /**
   * Data to be sent to the Nexmo SMS API Service
   * @type Object
   */
  var API_KEY = context.data.apiKey;
  var API_SECRET = context.data.apiSecret;
  var message = context.data.message;
  var from = 'Auth0';
  var to = context.data.phoneno;

  /**
   * Make a post request to the Nexmo SMS API Service with the appropriate auth details & formData
   */
  request
    .get('https://rest.nexmo.com/sms/json?api_key=' + API_KEY + '&api_secret=' + API_SECRET + '&from=' + from + '&to=' + to +'&text=' + message)
    .on('response', function(response) {

        if (response.statusCode !== 200) {
            return cb(null, response.body);
        }

        return cb(null, "Awesome...Message sent successfully");
    })
    .on('error', function(err) {
        if (err) {
            return cb(null, 'Sending of message failed:' + err);
        }
    });
};



