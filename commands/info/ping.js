const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    usage: "test",
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} ws ping`, this.usage);
    },
};
