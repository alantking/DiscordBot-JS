# DiscordBot-JS
Discord bot in javascript with reddit and twitter api integrations.

You must have developer accounts for Twitter and Reddit, and you must have created an application and recieved the appropriate tokens for your applications from Discord, Twitter and Reddit in order for this bot to build and run. If you don't need either Twitter or Reddit, you can remove or comment out the code that references them.

### Instructions for building and running

1. Clone/Download this repository
2. Open a new terminal and run 
>npm install 
3. Add your application tokens to relevant files
- Discord Token add to the .env file. No "" needed, just paste it after the "="
- Reddit tokens put in the reddit.json file
- twitter tokens put in the twitter.json file
4. To build and run, enter either of the following in your terminal.
>npm run dev
- this will attempt to rebuild and run after every change and save to a file
>npm run start  
- this will build and run. Changes to your code will not go into effect until you forcibly stop and rebuild.
5. If there are any issues, the console should tell you. Likely youre missing a module (run npm install "xxxx" on the erroring module) or your tokens are not correct. Please double check those.
6. If all went well, you should see "Discord Application/bot name is online!" in the console. Your bot is online congrats!

### Commands available
I've added some commands and API calls to get you started. These are pretty basic and are just meant to get you started. Your bot will listen for a "message" event (message sent in chat) from discord, and then check the message.js file in the events folder for a match. From there it will check the appropriate file in the commands folder.

Below is a list of all commands.

### Simple replies - reply.js
>hi 
- bot will reply with hello!
>seeya
- bot will reply with Ciao!
>!help 
- bot will display the correct input syntax to call the Reddit and Twitter API calls included.

### Twitter - twitter.js
If you need more (likely you do) check the Twitter API documentaion for a list of all their API endpoints. I've included 2 different API endpoints.

1. Get a random tweet by user. Syntax is !twitter user (username) 
>!twitter user Youtube
2. Get a random tweet by search. Syntax is !twitter search (search term) 
>!twitter search cybertruck

### Reddit - reddit.js
Same as Twitter, check their API documentation for a list of all their API endpoints. I've only included one API endpoint.

Gets a random top weekly post from the first page of a subreddit. Syntax is !reddit subreddit
>!reddit nba  






