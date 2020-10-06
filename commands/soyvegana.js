module.exports = {
    name: '!soyvegana',
    description: 'Soy vegana',
    execute(msg, args, voicechannel){
        voicechannel.join().then(connection => {
            const dispatcher = connection.play('./audios/holasoyvegana.mp3');
            dispatcher.on("end", end => {
                voicechannel.leave();
            });
        }).catch(err => console.log(err));
    }
};