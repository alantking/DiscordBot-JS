const twit = require('twit')
const fil = require('fs')
const tconfig = JSON.parse(fil.readFileSync('twitter.json'));
const t = new twit({
    consumer_key: tconfig.ConsumerKey,
    consumer_secret: tconfig.ConsumerSecretKey,
    access_token: tconfig.AccessToken,
    access_token_secret: tconfig.TokenSecret
})
var usr = /^(!twitter user )([a-z0-9])+/i
var srch = /^(!twitter search )([a-z0-9])+/i

module.exports = (message) => {
    // Get random tweet by user
    if (message.content.match(usr)) {
        try {
            var handle = usr.exec(message.content)[0].substr(14)
            var rdm = Math.floor((Math.random() * 100)) // Get random tweet from last 100
            t.get('statuses/user_timeline', { screen_name: handle, count: (rdm + 1) }, function (err, data, response) {
                if (data[(rdm)] == null) {
                    num = Math.floor((Math.random() * 10)) //If not enough tweets, get random from last 10
                    message.channel.send('https://twitter.com/'.concat(handle, '/status/', data[(num)].id_str))
                }
                else {
                    message.channel.send('https://twitter.com/'.concat(handle, '/status/', data[(rdm)].id_str))
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    // Get random tweet by search bar
    else if (message.content.match(srch)) {
        try {
            var term = srch.exec(message.content)[0].substr(16)
            var rdm = Math.floor((Math.random() * 100)) // Get random tweet from last 100
            t.get('search/tweets', { q: term, count: rdm + 1 }, function (err, data, response) {
                if (data.statuses[(rdm)] == null) {
                    message.channel.send('https://twitter.com/i/web/status/'.concat(data.statuses[(0)].id_str));
                }
                else {
                    message.channel.send('https://twitter.com/i/web/status/'.concat(data.statuses[rdm].id_str));
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        message.channel.send("Please try again in the form of \"!twitter (\"user\" or \"search\") xxxxxx \"")
    }
}