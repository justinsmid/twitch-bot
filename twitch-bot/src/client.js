oauthToken = require('./oauth_token.js');
var channel = require('./channel.js');
var botname = require('./botname.js');

var clientOptions = {
		options: {
			debug: true
		},
		connection: {
			cluster: "aws",
			reconnect: true
		},
		identity: {
			username: botname,
			password: oauthToken
		},
		channels: [channel]
}

module.exports = clientOptions