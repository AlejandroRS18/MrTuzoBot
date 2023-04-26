const mongoose= require('mongoose')
const config= require('./../../config.json')
module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        await mongoose.connect(config.dataBaseURL || ''),{
            keepAlive:true,

        }

        if(mongoose.connect){
            console.log('[Mongo DB] Esta conectado correctamente a la base de datos');
        }
        console.log(`El ${client.user.username} está online!`);
    }
}