//template to create slash commands
import Discord from 'discord.js';

//set the command name here
const name = 'template';

//set the command description here || remember: there is a limitation to the character length of a description
const description = 'template';

//you need to set the default member permission, otherwise the command will to 99% not shown to members without admin permission || refer to the DiscordJs documentation
const defaultMemberPermissions = ['SEND_MESSAGES'];

//set the Command option Data here. Refer to the DiscordJs documentation for more information
const options: Discord.ApplicationCommandOptionData[] = [
    //options
]

//write your code here
async function executeCommand (interaction: Discord.CommandInteraction, client: Discord.Client) {
    //check if interaction is a command otherwise return
    if (interaction.type != Discord.CommandInteraction) return;

    //reply with a message
    await interaction.reply('Template Command');
}
