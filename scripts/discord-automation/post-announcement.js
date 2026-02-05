require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;

const ANNOUNCEMENT = `⚡ **SYSTEM UPDATE** ⚡

\`\`\`
Córtex_Módule // Dócs_Reléase
\`\`\`

The ForbocAI SDK **Documentation** is now live.

**What we're building:**
→ NPCs with actual memory & persistent relationships
→ Local SLM inference (no API keys, no cloud)
→ Portable Souls via IPFS
→ Ghost Agents for automated QA at scale

**Explore the vision:**
📖 <https://forbocai.docs.buildwithfern.com>
🌐 <https://forboc.ai>
🪙 $FAI on pump.fun

SDK coming soon. Join us as we build the future of autonomous game AI.

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**`;

client.once('clientReady', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        const guild = await client.guilds.fetch(TARGET_GUILD_ID);
        console.log(`Found guild: ${guild.name}`);

        // Find the announcements channel
        const channels = await guild.channels.fetch();
        const announcementsChannel = channels.find(c => c.name === 'announcements');

        if (!announcementsChannel) {
            console.error('Could not find #announcements channel');
            process.exit(1);
        }

        console.log(`Posting to #${announcementsChannel.name}...`);
        await announcementsChannel.send(ANNOUNCEMENT);
        console.log('Announcement posted successfully!');
    } catch (error) {
        console.error('Error posting announcement:', error);
    }

    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);
