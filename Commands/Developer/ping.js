const {SlashCommandBuilder} = require('discord.js')
const { execute } = require('../../Events/Client/ready')

module.exports = {
    developer:true,
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong!'),
    execute(interaction){
        interaction.reply({content:"Pong"});
    }
}