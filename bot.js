require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
var isReady = true;

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

bot.on('message', message =>{

    var voicechannel = message.member.voice.channel;
    if(isReady && message.content === '!soyvegana'){
        isReady = false;
        voicechannel.join().then(connection => {
            const dispatcher = connection.play('./audios/holasoyvegana.mp3');
            dispatcher.on("end", end => {
                voicechannel.leave();
            });
        }).catch(err => console.log(err));
        // voicechannel.leave();
        isReady = true;
    }
    else if(isReady && message.content === '!veganadije'){
        isReady = false;
        voicechannel.join().then(connection => {
            const dispatcher = connection.play('./audios/soyveganadije.mp3');
            dispatcher.on("end", end => {
                voicechannel.leave();
            });
        }).catch(err => console.log(err));
        // voicechannel.leave();
        isReady = true;
    }
    else if(isReady && message.content == "!disconnect"){
        isReady = false;
        voicechannel.leave();
        isReady = true;
    }

});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);