const Discord = require('discord.js');
const config = require('../../configs/config.json');
const fetch = require('node-fetch');
const emojis = require('../../configs/emotes.json');



module.exports = {
    config: {
        name: 'Tobi',
        description: 'Drops Random Tobi Pictures.',
        aliases: ["Tobi"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
       
       let res = await fetch('https://api.deltaa.me/Tobi')
        let data = await res.json()

    let gifembed = new Discord.MessageEmbed()
        .setTitle(`Random Tobi ${data.url.endsWith('.png') ? 'Picture' : `${data.url.endsWith('.gif') ? 'GIF' : 'Picture'}`}`)
        .setColor(config.embedcolor)
        .setDescription(`[Full View](${data.url})`)
        .setFooter(`© Tobi`, message.author.avatarURL())
        .setImage(data.url);
    message.channel.send(gifembed);
    }
}

