const {SlashCommandBuilder} = require('discord.js')
const { execute } = require('../../Events/Client/ready')

module.exports = {
    developer:false,
    data: new SlashCommandBuilder()
    .setName('ping-pero-publico')
    .setDescription('Pong!'),
    execute(interaction){
        interaction.reply({content:"Pong pero publico"});
    }
}