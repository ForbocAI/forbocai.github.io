require('dotenv').config();
const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;

const ROLES_CONFIG = [
    {
        name: 'System Admin',
        color: '#FF0000',
        permissions: [PermissionsBitField.Flags.Administrator],
        hoist: true
    },
    {
        name: 'Moderator',
        color: '#00FF00',
        permissions: [
            PermissionsBitField.Flags.KickMembers,
            PermissionsBitField.Flags.BanMembers,
            PermissionsBitField.Flags.ManageMessages
        ],
        hoist: true
    },
    {
        name: 'Architect',
        color: '#0000FF',
        hoist: true
    },
    {
        name: 'Citizen',
        color: '#808080',
        hoist: false
    }
];

const CATEGORIES_CONFIG = [
    {
        name: 'ACCESS_TERMINAL',
        channels: [
            { name: 'announcements', type: ChannelType.GuildText, topic: 'Official ForbocAI announcements' },
            { name: 'rules', type: ChannelType.GuildText, topic: 'Server rules and guidelines' },
            { name: 'welcome', type: ChannelType.GuildText, topic: 'Welcome to the system' }
        ]
    },
    {
        name: 'NEURAL_LINK',
        channels: [
            { name: 'general', type: ChannelType.GuildText, topic: 'General discussion' },
            { name: 'off-topic', type: ChannelType.GuildText, topic: 'Non-Forboc related chat' },
            { name: 'showcase', type: ChannelType.GuildText, topic: 'Show off your creations' }
        ]
    },
    {
        name: 'DEV_UPLINK',
        channels: [
            { name: 'sdk-dev', type: ChannelType.GuildText, topic: 'Development discussion for the SDK' },
            { name: 'api-discussion', type: ChannelType.GuildText, topic: 'API usage and support' },
            { name: 'github-updates', type: ChannelType.GuildText, topic: 'GitHub activity feed' }
        ]
    },
    {
        name: 'SUPPORT_PROTOCOL',
        channels: [
            { name: 'help', type: ChannelType.GuildText, topic: 'Get help with ForbocAI' },
            { name: 'bugs', type: ChannelType.GuildText, topic: 'Report bugs and issues' }
        ]
    }
];

client.once('clientReady', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    let guild;
    try {
        guild = await client.guilds.fetch(TARGET_GUILD_ID);
    } catch (error) {
        console.error(`Error fetching guild with ID ${TARGET_GUILD_ID}:`, error);
        process.exit(1);
    }

    console.log(`Configuring guild: ${guild.name}`);

    // setup Roles
    for (const roleConfig of ROLES_CONFIG) {
        let role = guild.roles.cache.find(r => r.name === roleConfig.name);
        if (!role) {
            console.log(`Creating role: ${roleConfig.name}`);
            try {
                await guild.roles.create({
                    name: roleConfig.name,
                    color: roleConfig.color,
                    permissions: roleConfig.permissions || [],
                    hoist: roleConfig.hoist
                });
            } catch (error) {
                console.error(`Error creating role ${roleConfig.name}:`, error);
            }
        } else {
            console.log(`Role ${roleConfig.name} already exists.`);
        }
    }

    // setup Categories and Channels
    for (const categoryConfig of CATEGORIES_CONFIG) {
        let category = guild.channels.cache.find(c => c.type === ChannelType.GuildCategory && c.name === categoryConfig.name);
        if (!category) {
            console.log(`Creating category: ${categoryConfig.name}`);
            try {
                category = await guild.channels.create({
                    name: categoryConfig.name,
                    type: ChannelType.GuildCategory
                });
            } catch (error) {
                console.error(`Error creating category ${categoryConfig.name}:`, error);
                continue;
            }
        } else {
            console.log(`Category ${categoryConfig.name} already exists.`);
        }

        if (category) {
            for (const channelConfig of categoryConfig.channels) {
                let channel = guild.channels.cache.find(c => c.name === channelConfig.name && c.parentId === category.id);
                if (!channel) {
                    // Check if channel exists elsewhere to avoid duplicates or move it? 
                    // For simplicity, just check by name in the guild, then move if parent is wrong, or create if not exists
                    channel = guild.channels.cache.find(c => c.name === channelConfig.name);
                    
                    if (channel) {
                         console.log(`Channel ${channelConfig.name} exists, moving to category ${categoryConfig.name}`);
                         await channel.setParent(category.id, { lockPermissions: false }); // preserve permissions or lock to category? usually lock
                    } else {
                        console.log(`Creating channel: ${channelConfig.name} in ${categoryConfig.name}`);
                        try {
                            await guild.channels.create({
                                name: channelConfig.name,
                                type: channelConfig.type,
                                parent: category.id,
                                topic: channelConfig.topic
                            });
                        } catch (error) {
                             console.error(`Error creating channel ${channelConfig.name}:`, error);
                        }
                    }
                } else {
                    console.log(`Channel ${channelConfig.name} already in ${categoryConfig.name}.`);
                }
            }
        }
    }

    console.log('Setup complete!');
    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);
