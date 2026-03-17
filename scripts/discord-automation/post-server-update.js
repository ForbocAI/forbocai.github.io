require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;

const ANNOUNCEMENT = `✨ **[LANTERNS_LIT]** ✨

\`\`\`
Studio_Update // Welcome_Flow_Refreshed
\`ForbocAI // living_character_systems\`
\`\`\`

The ForbocAI welcome flow has been refreshed.

**What we're building:**
→ companions, neighbors, and NPCs with stronger memory
→ local-first character systems that stay responsive during play
→ tooling for testing social loops, world continuity, and living game spaces

**Explore the current direction:**
📖 SDK Docs <https://Docs.Forboc.AI>
🌐 Brochure <https://Forboc.AI>
🎮 Demo (pending SDK implementation) <https://Platform.Forboc.AI>

**Current focus:**
- structured character memory
- local-first runtime behavior
- world-state-aware action validation
- simulation tooling for studios and creators

**ᚠ Studio Notes:**
We are aiming for character technology that feels usable, grounded, and full of possibility rather than loud, cryptic, or overhyped.

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**`;

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        const guild = await client.guilds.fetch(TARGET_GUILD_ID);
        console.log(`Found guild: ${guild.name}`);

        const channels = await guild.channels.fetch();
        const announcementsChannel = channels.find(c => c.name === 'announcements');

        if (!announcementsChannel) {
            console.error('Could not find #announcements channel');
            process.exit(1);
        }

        console.log(`Posting to #${announcementsChannel.name}...`);
        await announcementsChannel.send(ANNOUNCEMENT);
        console.log('New announcement posted successfully!');
    } catch (error) {
        console.error('Error posting announcement:', error);
    }

    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);
