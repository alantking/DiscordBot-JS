const reply = require("../commands/reply");
const twitter = require("../commands/twitter");
const reddit = require("../commands/reddit");

module.exports = (client) => {
  client.on("message", (message) => {
    if (message.content.startsWith("!twitter")) {
      twitter(message);
    }
    else if (message.content.startsWith("!reddit"))
    {
      reddit(message);
    }
    else {
      reply(message);
    }
  });
}
