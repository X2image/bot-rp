const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send (`Nom du serveur : ${message.guild}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
});

client.login("ODEyNzUwMDc1MzM5MzQxODU1.YDFSfg.6m2pF-J4eW5NSAJyR03rSuDrYhA");