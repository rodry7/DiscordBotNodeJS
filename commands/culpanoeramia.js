module.exports = {
    name: '!culpanoeramia',
    description: 'Y la culpa no era mia',
    execute (msg, args, voicechannel){
        voicechannel.join().then(connection => {
            const dispatcher = connection.play('./audios/laculpanoeramia.mp3');
            dispatcher.on("end", end => {
                voicechannel.leave();
            });
        }).catch(err => console.log(err));
    }
};