const Discord = require("discord.js");
const bot = new Discord.Client();
require('dotenv').config()

bot.on('ready', () => {
    console.log("LocoBot is working now!")
})

bot.on('message', msg => {
    if(msg.content == "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(process.env.TOKEN_BOT);