require('dotenv').config();
const { Client, GatewayIntentBits, ChannelType } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        const guild = await client.guilds.fetch(TARGET_GUILD_ID);
        console.log(`\nChannels in guild: ${guild.name} (${guild.id})\n`);

        const channels = await guild.channels.fetch();
        
        // Group by category
        const categories = channels.filter(c => c.type === ChannelType.GuildCategory).sort((a, b) => a.position - b.position);
        
        for (const [id, category] of categories) {
            console.log(`[${category.name}]`);
            const children = channels.filter(c => c.parentId === category.id).sort((a, b) => a.position - b.position);
            for (const [childId, channel] of children) {
                console.log(`  # ${channel.name} (${channel.type === ChannelType.GuildText ? 'Text' : 'Voice'})`);
            }
            console.log('');
        }

        // List uncategorized
        const uncategorized = channels.filter(c => !c.parentId && c.type !== ChannelType.GuildCategory).sort((a, b) => a.position - b.position);
        if (uncategorized.size > 0) {
            console.log('[Uncategorized]');
            for (const [id, channel] of uncategorized) {
                console.log(`  # ${channel.name} (${channel.type === ChannelType.GuildText ? 'Text' : 'Voice'})`);
            }
        }

    } catch (error) {
        console.error('Error fetching channels:', error);
    }

    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);
