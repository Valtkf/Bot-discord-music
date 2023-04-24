const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-' ,
    owner: '', 
    invite: ''
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(__dirname, 'commands'));


    client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('error', (error) => console.error(error));

client.login('');
