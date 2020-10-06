module.exports = {
    name: '!veganadije',
    description: 'Soy vegana dije',
    execute(msg, args, voicechannel){
        voicechannel.join().then(connection => {
            const dispatcher = connection.play('./audios/soyveganadije.mp3');
            dispatcher.on("end", end => {
                voicechannel.leave();
            });
        }).catch(err => console.log(err));
    }
};