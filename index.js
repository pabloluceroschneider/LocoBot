const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

bot.on('ready', () => {
	console.log('LocoBot is working now!');
});

bot.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.find((ch) => ch.name === 'bienvenidos👋');
	if (!channel) return;
	channel.send(`Bienvenidx a la Familia, ${member}, AHORA SOS UN LOCO`);
});

bot.on('message', (msg) => {
	if (msg.content == 'HELLO') {
		msg.reply('HELLO FRIEND!');
	}
	if (msg.content == '!tibio') {
		msg.reply('🥶🥶🥶');
	}
});

bot.login(process.env.TOKEN_BOT);
