require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require ('fs')

client.login(process.env.BOT_TOKEN)

fs.readdir('./events/',(err,files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.once(eventName, (...args) => eventHandler(client, ...args))
    })
})






