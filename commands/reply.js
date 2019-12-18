module.exports = (message) => {
    if (message.content == "hi") {
        message.channel.send("Hello!");
    }
    else if (message.content == "seeya") {
        message.channel.send("Ciao!");
    }
    else if (message.content == "!help") {
        message.channel.send("Commands Available: \n!reddit \"subreddit\"\n!twitter (\"user\" or \"search\") xxxxx");
    }
    else {
        return;
    }

}




