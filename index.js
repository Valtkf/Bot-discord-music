const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-' ,
    owner: '305057993865822208', 
    invite: 'https://discord.gg/c85tgVUv'
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

client.login('MTA5OTY3ODM1ODk4NTUxMTA1Mg.GdIwHk.0klZodo4hdzchaijcxwrX116JYnrihKsyVxuKg');
