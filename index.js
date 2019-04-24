const Discord = require('discord.js');
const bot = new.Discord.Client();

bot.on("ready", async=> ) {
    console.log("Bot online!");
    bot.user.setActivity('Hey, Wassup');
});


bot.login('NTY3NzY3MDc2NTA5NDUwMzA5.XL8S9A.NM6tkQ83rhW_o0ZdwoCmvVfYK0E');

bot.on("message", async message => {

    if (message.author.bot) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let arg1 = messageArray.slice[1];

    if (cmd === "!ping") {
        message.channel.send("PONG!");
    }

});
