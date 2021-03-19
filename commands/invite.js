module.exports = {
  name: "help",
  description:
    "Get a list of all command",
  usage: "help <cmd>",
  aliases: [],
  run: async (client, message, args) => {

let embed = new discord.MessageEmbed()
    .setTitle(client.tag)
    .setDescription(`[Invite link](https://discord.com/api/oauth2/authorize?client_id=744597377406599188&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
}
};