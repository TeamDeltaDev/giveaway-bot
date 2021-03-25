const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Bot by Crypto#9999`);
});


client.on("message", async message => {
  const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./root/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
  
client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  
  
  if(!message.content.startsWith(prefix)) return;
 
})
});
client.login(token);
