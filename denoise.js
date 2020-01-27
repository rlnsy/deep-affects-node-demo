var DeepAffects = require('deep-affects');
var defaultClient = DeepAffects.ApiClient.instance;

var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "<INSERT API KEY HERE>";

var api = new DeepAffects.DenoiseApi();

var body = DeepAffects.Audio.fromFile("files/Meeting-Jan26.m4a", encoding="m4a");

webhook = "localhost:3000"

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

api.asyncDenoiseAudio(body, webhook, callback);


