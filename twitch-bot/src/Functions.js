var tmi = require('tmi.js');
var oauthToken = require('./oauth_token.js');
var options = require('./client.js');
var channel = require('./channel.js');
var botname = require('./botname.js');
var config = require('./bot.js');
var lines = require('./lines.js');
var lastNumber;


// Function responsible for responding to a message containing the bot's name
function talkBack(userstate) {
    say(lines["responses"][config.j] + userstate.username);
    config.j++;
    if (config.j == lines["responses"].length) {
        config.j = 0;
    }
}

// Pick a random number that isn't the most recently chosen number
// We don't want to pick the a number multiple times in a row because most twitch channels
// don't allow you to repeat a message within some amount of time
function pickANumber() {
    let n = -1;
    do {
        n = Math.floor(Math.random() * 11);
    } while (n == lastNumber);

    lastNumber = n;

    return n;
}

// function that says some lines then leaves
function chat() {
    if (config.i <= (config.amounts - 1)) {
        var r = pickANumber();
        switch (r) {
            case 0:
                say(lines["real-life"][0]);
                break;

            case 1:
                say(lines["league"][0]);
                break;

            case 2:
                say(lines["real-life"][1]);
                break;

            case 3:
                say(lines["league"][1]);
                break;

            case 4:
                say(lines["league"][2]);
                break;

            case 5:
                say(lines["real-life"][2]);
                break;

            case 6:
                say(lines["real-life"][3]);
                break;

            case 7:
                say(lines["real-life"][4]);
                break;

            case 8:
                say(lines["real-life"][5]);
                break;

            case 9:
                say(lines["league"][3]);
                break;

        }
        config.i++;
    } else if (config.i == config.amounts) {
        say("Alright, this chatbot has done it's job and will leave your channel in " + config.leaveTimer + " seconds, have a good remainder of your day " + channel + " and viewers! :)");
        config.i++;
        setTimeout(leave, config.leaveTimer * 1000);
    }
}

// function to disconnect from a channel
function leave() {
    say("..Goodbye!");
    config.client.disconnect();
    process.exit();
}

// function to send a given message to the channel
// client.say for normal messages; client.action for /me followed by the message
function say(message) {
    config.client.action(channel, message);
}

module.exports = {
    talkBack, chat, leave, say
}