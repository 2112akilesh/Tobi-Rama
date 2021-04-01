const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'repo',
        description: 'Link to the Github Repository',
        aliases: ["repository"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {

      const embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setDescription( "**Tobi Bot Project** \n\n<:GitHub:803579137759379497> **Tobi Bot is Open Source! [Click Here](https://github.com/2112akilesh/Tobi-Rama) to check the Github!\n"+ client.emotes.flyinghearts + "Contributions are Welcomed, Thanks for supporting me.** ❤️")
    .addField("Invite Link: ",`**[Click Here!](https://discord.com/api/oauth2/authorize?client_id=764890479061499924&permissions=0&scope=bot)**`, true)
    .addField("Support Link: ",`**[Click Here!](https://twitter.com/Akilesh65833600)**`, true)
    .setTimestamp()
    .setFooter("© Tobi","https://i.ibb.co/nkn3pDs/wallpapertip-tobirama-wallpaper-214316.jpg  ")
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

