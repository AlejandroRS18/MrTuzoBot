const {Client, GatewayIntentBits, Partials, Collection} = require('discord.js');
const config = require('./config.json')

const {loadEvents} = require('./Handlers/eventHandlers');
const {loadCommands} = require('./Handlers/commandHandler');

const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    Partials:[Object.keys(Partials)],
})

client.commands = new Collection();

client.login(config.token).then(()=>{
    loadEvents(client)
    loadCommands(client)
})