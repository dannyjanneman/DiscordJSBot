const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = '';

const PREFIX = '!';

bot.on('ready' , () =>{
    console.log('The bot is online');
});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0]) {
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('version 1')
            }
            else{
                message.channel.send('invalid')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second argument')
            message.channel.bulkDelete(args[1]);
            break;
    }


})

bot.login(token);
