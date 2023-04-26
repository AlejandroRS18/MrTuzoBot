const {SlashCommandBuilder} = require('discord.js')
const { execute } = require('../../Events/Client/ready')

module.exports = {
    developer:false,
    data: new SlashCommandBuilder()
    .setName('uaz')
    .setDescription('PuraUAZ'),
    execute(interaction){
        interaction.reply({content:"Pura pinche UAZ alv y no mamadas padrino!"});
    }
}