const snoowrap = require('snoowrap');
const fil = require('fs');
const rconfig = JSON.parse(fil.readFileSync('reddit.json'));
const r = new snoowrap({
    userAgent: rconfig.userAgent,
    clientId: rconfig.clientId,
    clientSecret: rconfig.clientSecret,
    refreshToken: rconfig.refreshToken
});
var sub = /^(!reddit )([a-z0-9])+/i
var rdm = Math.floor((Math.random() * 25))

module.exports = (message) => {
    if (message.content.match(sub)) {
        try {
            scrapeSubreddit();

            async function scrapeSubreddit() {
                var subreddit = await r.getSubreddit(sub.exec(message)[0].substr(8));
                var topPosts = await subreddit.getTop({ time: 'week', limit: (rdm + 1) });
                message.channel.send('https://reddit.com/'.concat(topPosts[rdm].permalink))
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        message.channel.send("Not a valid input, please try again in the form of \"!reddit subreddit\"");
    }
}