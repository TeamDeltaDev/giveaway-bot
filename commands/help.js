const Discord = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get a list of all command",
  aliases: ["h"],
  usage: "help <cmd>",
   run: async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Commands")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}
