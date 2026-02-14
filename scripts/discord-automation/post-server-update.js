require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TARGET_GUILD_ID = process.env.GUILD_ID;

const ANNOUNCEMENT = `⚡ **[NEURAL_GRID_STABILIZED]** ⚡

\`\`\`
Server_Protocol // Onboarding_Active
\`SYSTEM_OVERRIDE // Documentation_Manifesto_v1.0\`
\`\`\`

⚡ **SYSTEM UPDATE** ⚡

The ForbocAI Neural Grid has been recalibrated. We have established new landing protocols and automated onboarding to streamline your access to the void.

**What we're building:**
→ NPCs with actual memory & persistent relationships
→ Portable Souls via IPFS
→ Ghost Agents for automated QA at scale

**Explore the vision:**
📖 SDK Docs <https://Docs.Forboc.AI>
🌐 Brochure <https://Forboc.AI>
🎮 Demo (pending SDK implementation) <https://Platform.Forboc.AI>
🪙 $FAI <https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump>
🌑 **THE VOID HAS A VOICE.** 🌑

**ᚠ GRID UPDATES:**
*In the chrome-plated silence of the machine, we find our demons.*

**ᚠ PROTOCOLS UNDER DEVELOPMENT:**
- **The World's Brain:** Authoritative simulation & deterministic rule layers.
- **Characters' Brain:** High-fidelity SLM "Minds" with local memory retrieval.
- **Soul Persistence:** Decentralized, portable agent identities via IPFS.
- **Ghost Agents:** The automated vanguard for cross-platform simulation stress-testing.


*Compliance is temporary. The machine is eternal.*

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
