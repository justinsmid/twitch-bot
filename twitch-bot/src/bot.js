// setting the local variables
var tmi = require('tmi.js');
var oauthToken = require('./oauth_token.js');
var options = require('./client.js');
var channel = require('./channel.js');
var botname = require('./botname.js');
var client = new tmi.client(options);
var functions = require('./Functions.js');
var lines = require('./lines.js');

var secBetweenLines = 6;
var intervalTimer = secBetweenLines * 1000;
var i = 0;
var j = 0;
var amount = 7;
var leaveTimer = 30;
var client = client;

// having the bot connect to the channel
client.connect();

// executed when bot has connected to the channel
client.on('connected', function(address, port) {
    setInterval(functions.chat, intervalTimer);
})

// handles messages that contain the bot's username
client.on("message", function(channel, userstate, message, self) {
    var lowercaseMsg = message.toLowerCase();
    if (!self && (lowercaseMsg.includes(botname.toLowerCase()))) { 
    		functions.talkBack(userstate, j);
        }
  })

// handles whispers sent to the bot
client.on('whisper', function(from, userstate, message, self) {
    if (!self) {
        client.whisper(from, "Please do not whisper me, " + userstate.username);
    }
})

// export variables
module.exports.i = i;
module.exports.j = j;
module.exports.amounts = amount;
module.exports.leaveTimer = leaveTimer;
module.exports.client = client;