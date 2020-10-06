module.exports = {
    name: '!disconnect',
    description: 'Salir del chat de voz',
    execute(msg, args, voicechannel){
        voicechannel.leave();
    }
};