
/**
 * Module dependencies
 */

var oauth = require('wpcom-oauth-cors')('37508');
var debug = require('debug')('client-editor');

// just for testing
window.oauth = oauth;

// Get token
oauth.get(function(data){
  debug('access token: %s', data.access_token);

});
