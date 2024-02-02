
import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
    }
)

client.on('ready', (c)=>{
    console.log("bot is online")
})

client.on('messageCreate', (message)=>{
    console.log(message.content)
    //message.reply('fuck u bitch!')
})

client.login(process.env.DISCORD_TOKEN)

