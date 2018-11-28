var channel = require('./channel.js');

let lines = {
    "league": [
        "What rank are you, " + channel + "?",
        "What's the highest rank you've ever been, " + channel + "?",
        "What's your favorite champion, " + channel + "?",
        "How long have you been playing league for, " + channel + "?"
    ],
    "real-life": [
        "How old are you, " + channel + "?",
        "Where are you from, " + channel + "?",
        "What is your real name, " + channel + "?",
        "How tall are you, " + channel + "?",
        "What is your favorite food, " + channel + "?",
        "What do you do for a living, " + channel + "?"
    ],
    "responses": [
        "Hello there, ",
        "Nice to see you too, ",
        "How are you doing today, "
    ]
}

module.exports = lines;