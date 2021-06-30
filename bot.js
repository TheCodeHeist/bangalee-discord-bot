const Discord = require("discord.js");
require("dotenv").config();

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Ami ready!");
});

bot.login(process.env.BOT_TOKEN);
