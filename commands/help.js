module.exports = {
    name: '!help',
    description: "Lista de comandos",
    execute(msg, args, voicechannel){
        msg.channel.send("Lista de comandos:");
        msg.channel.send("1-!soyvegana");
        msg.channel.send("2-!veganadije");
        msg.channel.send("3-!culpanoeramia");
        msg.channel.send("4-!disconnect");
    }
};