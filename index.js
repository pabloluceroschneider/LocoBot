const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NzQ1MTA3MTM3OTU2Njc1NTk0.Xzs9GQ.7QrkLGFTVrlLZik96OcJOaAVXRc';

bot.on('ready', () => {
    console.log("LocoBot is working now!")
})

bot.on('message', msg => {
    if(msg.content == "HELLO"){
        msg.reply('HELLO FRIEND');
    }
})

bot.login(token);