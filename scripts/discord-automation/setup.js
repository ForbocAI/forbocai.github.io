require('dotenv').config();
const { Client, GatewayIntentBits, PermissionsBitField, ChannelType } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;
const AUTO_ROLE_NAME = 'ᚲ CÍTÍZÉN';

// Auto-assign role on member join
client.on('guildMemberAdd', async (member) => {
    if (member.guild.id !== TARGET_GUILD_ID) return;
    
    console.log(`New member detected: ${member.user.tag}. Attempting to assign ${AUTO_ROLE_NAME}...`);
    try {
        const role = member.guild.roles.cache.find(r => r.name === AUTO_ROLE_NAME);
        if (role) {
            await member.roles.add(role);
            console.log(`Assigned ${AUTO_ROLE_NAME} to ${member.user.tag}.`);
        } else {
            console.error(`Role ${AUTO_ROLE_NAME} not found during auto-assign.`);
        }
    } catch (error) {
        console.error(`Error auto-assigning role to ${member.user.tag}:`, error);
    }
});

const ROLES_CONFIG = [
    {
        name: 'ᚠ SYSTÉM_ÁDMÍN',
        color: '#FF0000',
        permissions: [PermissionsBitField.Flags.Administrator],
        hoist: true
    },
    {
        name: 'ᚦ MÓDÉRÁTÓR',
        color: '#00FF00',
        permissions: [
            PermissionsBitField.Flags.KickMembers,
            PermissionsBitField.Flags.BanMembers,
            PermissionsBitField.Flags.ManageMessages
        ],
        hoist: true
    },
    {
        name: 'ᚱ ÁRCHÍTÉCT',
        color: '#0000FF',
        hoist: true
    },
    {
        name: 'ᚲ CÍTÍZÉN',
        color: '#808080',
        hoist: false
    }
];

const CATEGORIES_CONFIG = [
    {
        name: 'ᚹ 🌑 ÁCCÉSS_TÉRMÍNÁL 🌑',
        channels: [
            { name: 'announcements', type: ChannelType.GuildText, topic: 'ᚠ Crítícál systém úpdátés ánd bróádcást tránsmíssíóns fróm thé FórbócÁÍ córé. [SYSTEM_OVERRIDE_ACTIVE]' },
            { name: 'rules', type: ChannelType.GuildText, topic: 'ᚦ Stándárd ópérátíng prótócóls fór thé FórbócÁÍ Néúrál Gríd. Cómplíáncé ís mándátóry.' },
            { name: 'welcome', type: ChannelType.GuildText, topic: 'ᚨ Ínítíálízátíón cómplété. Wélcómé tó thé FórbócÁÍ nétwórk. [NEURAL_LINK_ESTABLISHED]' }
        ]
    },
    {
        name: 'ᚱ 🌑 NÉÚRÁL_LÍNK 🌑',
        channels: [
            { name: 'general', type: ChannelType.GuildText, topic: 'ᚲ Únfíltéréd néúrál dátá éxchángé. Cónnéct wíth thé cómmúnítý vín thé vóíd.' },
            { name: 'off-topic', type: ChannelType.GuildText, topic: 'ᚨ Áúxílíárý tránsmíssíóns. Díscússíón óútsídé thé néúrál árchítéctúré.' },
            { name: 'showcase', type: ChannelType.GuildText, topic: 'ᚹ Éxpósé ýóúr créátíóns. Díspláý ýóúr ágént scúlptúrés ánd wórld búílds.' }
        ]
    },
    {
        name: 'ᚲ 🌑 DÉV_ÚPLÍNK 🌑',
        channels: [
            { name: 'sdk-dev', type: ChannelType.GuildText, topic: 'ᚱ Lów-lévél ímpléméntátíón díscússíón fór thé FórbócÁÍ SDK. [INTERNAL_DEVELOPMENT]' },
            { name: 'api-discussion', type: ChannelType.GuildText, topic: 'ᚠ Hígh-lévél néúrál lógíc ánd ÁPÍ Mínd íntégrátíón prótócóls.' },
            { name: 'github-updates', type: ChannelType.GuildText, topic: 'ᚦ Ráw gít télémétrý tráckíng dévélópmént prógréss. T̵h̴e̶ ̶v̶o̶i̶d̴ ̷c̸o̶n̷s̶u̶m̸e̸s̶ ̸a̶l̷l̵.' }
        ]
    },
    {
        name: 'ᚦ 🌑 SÚPPÓRT_PRÓTÓCÓL 🌑',
        channels: [
            { name: 'help', type: ChannelType.GuildText, topic: 'ᚨ Díágnóstíc súppórt. Réqúést ássístáncé fróm thé systém árchítécts.' },
            { name: 'bugs', type: ChannelType.GuildText, topic: 'ᚠ Répórt érrátíc béhávíór ánd systém fáílúrés ín thé néúrál gríd. [LOG_ERR_CRITICAL]' }
        ]
    },
    {
        name: 'ᛟ 🌑 SÓÚL_ÉCÓNÓMÝ 🌑',
        channels: [
            { name: 'soul-market', type: ChannelType.GuildText, topic: 'ᚲ Trádé pórtáblé ágént ídéntítíés. Thé décéntrálízéd bázáár fór Dígítál Sóúls.' },
            { name: 'solana-uplink', type: ChannelType.GuildText, topic: 'ᛟ Ón-cháín vérífícátíón ánd Métápléx Córé téchnícál sýnchrónízátíón.' },
            { name: 'economy-chat', type: ChannelType.GuildText, topic: 'ᚠ Tókénómícs ánálýsís ánd ágént válúátíón ín thé $FÁÍ écósýstém.' }
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
        }

        if (category) {
            for (const channelConfig of categoryConfig.channels) {
                let channel = guild.channels.cache.find(c => c.name === channelConfig.name && c.parentId === category.id);
                
                if (!channel) {
                    // Check if channel exists elsewhere
                    channel = guild.channels.cache.find(c => c.name === channelConfig.name);
                    
                    if (channel) {
                         console.log(`Channel ${channelConfig.name} exists, moving to category ${categoryConfig.name}`);
                         await channel.setParent(category.id, { lockPermissions: true });
                    } else {
                        console.log(`Creating channel: ${channelConfig.name} in ${categoryConfig.name}`);
                        try {
                            channel = await guild.channels.create({
                                name: channelConfig.name,
                                type: channelConfig.type,
                                parent: category.id,
                                topic: channelConfig.topic
                            });
                        } catch (error) {
                             console.error(`Error creating channel ${channelConfig.name}:`, error);
                        }
                    }
                }

                // Synchronize Topic/Description if channel exists
                if (channel && channel.topic !== channelConfig.topic) {
                    console.log(`Updating topic for #${channelConfig.name}...`);
                    try {
                        await channel.setTopic(channelConfig.topic);
                    } catch (error) {
                        console.error(`Error updating topic for ${channelConfig.name}:`, error);
                    }
                }
            }
        }
    }

    // Set Welcome Channel as System Channel (Landing Page)
    const welcomeChannel = guild.channels.cache.find(c => c.name === 'welcome' && c.type === ChannelType.GuildText);
    if (welcomeChannel) {
        if (guild.systemChannelId !== welcomeChannel.id) {
            console.log(`Setting #${welcomeChannel.name} as the System Channel (Landing)...`);
            try {
                await guild.setSystemChannel(welcomeChannel.id);
            } catch (error) {
                console.error('Error setting system channel:', error);
            }
        } else {
            console.log(`#${welcomeChannel.name} is already the System Channel.`);
        }
    }

    // Assign Citizen Role to all existing members
    const citRole = guild.roles.cache.find(r => r.name === AUTO_ROLE_NAME);
    if (citRole) {
        console.log(`Synchronizing ${AUTO_ROLE_NAME} for all existing members...`);
        try {
            // Fetch all members. Requires GuildMembers privileged intent.
            const members = await guild.members.fetch();
            console.log(`Found ${members.size} members. Checking roles...`);
            
            for (const [id, member] of members) {
                if (!member.roles.cache.has(citRole.id) && !member.user.bot) {
                    console.log(`Assigning ${AUTO_ROLE_NAME} to ${member.user.tag}...`);
                    try {
                        await member.roles.add(citRole);
                    } catch (err) {
                        console.error(`Failed to assign role to ${member.user.tag}:`, err.message);
                    }
                }
            }
        } catch (error) {
            console.error('Error synchronizing member roles. Ensure "Server Members Intent" is enabled in the Discord Developer Portal:', error.message);
        }
    }

    console.log('Setup complete! Monitoring for new members...');
    // process.exit(0); // Removed to keep process alive for guildMemberAdd events
});

client.login(process.env.DISCORD_TOKEN);
