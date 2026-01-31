<br/>
<div align="center">
  <img alt="ForbocAI logo" src="https://forbocai.github.io/logo.png" height="50" align="center">
  
  <br/>

# ForbocAI SDK

`Systém_Óverview // Prótocol_Init`

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**

Autonomous AI for game NPCs.

[![Documentation](https://img.shields.io/badge/docs-forbocai.docs.buildwithfern.com-blue)](https://forbocai.docs.buildwithfern.com)
[![Discord](https://img.shields.io/discord/your-discord-id?label=Discord)](https://discord.gg/6hr2jHqnsG)

</div>

---

## Overview

`Córe_Módules // SDK_Init`

The **ForbocAI SDK** is the **Characters' Brain/Mind**. It acts as the "Ghost in the Machine"—a decentralized consciousness layer that instills your NPCs with **Synthetic Intuition**. 

Your Game Engine serves as the **World's Brain** (Physical Laws, Reality). ForbocAI serves as the **Soul** (Reasoning, Memory, Personality). It is a "Black Box" of intelligence that simply *knows* what to do.

- **Synthetic Cortex** — A local reasoning engine that mimics human intuition.
- **Holographic Memory** — Persistent, semantic recall that feels like true déjà vu.
- **Living Persona** — Agents with deep, evolving psycho-social frameworks.
- **Portable Souls** — Digital entities that can traverse the metaverse (IPFS).
- **Ghost Protocol** — Automated, phantom agents that endlessly play-test your world.

**᛭ ᛫ ᛬ ᛫ ᛭**

---

## Installation

`Instáll_Séquence // Pácкage`

```bash
# JavaScript/TypeScript
npm install forbocai

# Python
pip install forbocai

# Rust
cargo add forbocai
```

---

## Quick Start

`Quíck_Stárt // Éxample`

```typescript
import { Cortex, Agent } from 'forbocai';

// Córtex_Init // Loćal_Inférence
const cortex = await Cortex.init({ model: 'smollm2-135m' });

// Agént_Créate // NPC_Entíty
const npc = await Agent.create({
  cortex,
  persona: 'A suspicious merchant who was once cheated by adventurers.',
  state: { inventory: ['rusty_key', 'healing_potion'], mood: 'suspicious' }
});

// Prócéss_Ínput // Dïalógue
const response = await npc.process({
  input: 'I want to buy a healing potion.',
  context: { playerGold: 50 }
});

console.log(response.dialogue);
// "Hmm, you have the coin... but how do I know you won't just take it and run?"
```

---

## Core Modules

`Módulátion_Máp // Sýstem_Óverview`

| Module | Description |
|--------|-------------|
| **Synthetic Cortex** | The local reasoning engine. It *feels* and *decides*. |
| **Living Agent** | Entities with deep psycho-social state and evolving values. |
| **Holographic Memory** | Persistent recall. Agents remember previous lives. |
| **Neural Bridge** | The subconscious link between Thought (AI) and Reality (Game). |
| **Soul** | The portable essence of an agent (inter-world traversal). |
| **Ghost** | A headless phantom that haunts your game for QA purposes. |

---

## The Neural Grid

`The_Líta // The_Láw`

The **ForbocAI Protocol** is the invisible lattice that binds Synthetic Souls to digital realities. It is the "Universal Translator" between the chaotic creativity of the AI Mind and the rigid physical laws of the Game World.

It allows a Soul to exist in *any* world, respecting the local physics while retaining its own memories and personality.

---

## Encapsulated Souls (NFTs)

`Digítal_Essénce // Immortálity`

A **Soul** is more than code—it is a crystallized lifetime of experiences.

*   **Memory as Value**: Every conversation, every trade, and every battle is encoded into the Soul's Holographic Memory.
*   **True Ownership**: You do not just own the "Skin"; you own the *Mind*. A Soul you have trained for 100 hours is fundamentally different from a fresh spawn.
*   **Inter-World Travel**: Export your Soul to the Ether (IPFS). Summon it into new worlds. Your companion is eternal, even if the game servers die.

---

## Documentation

`Dócs_Máp // Référence`

- **[Introduction](https://forbocai.docs.buildwithfern.com)** — SDK overview and quick start
- **[User Stories](https://forbocai.docs.buildwithfern.com/user-stories)** — BDD specifications for all features
- **[Concepts](https://forbocai.docs.buildwithfern.com/concepts)** — Architecture and core abstractions
- **[API Reference](https://forbocai.docs.buildwithfern.com/api-reference)** — Complete endpoint documentation

---

## Links

`Éxternal_Líns // Cónnect`

- **Website:** [forbocai.github.io](https://forbocai.github.io)
- **Documentation:** [forbocai.docs.buildwithfern.com](https://forbocai.docs.buildwithfern.com)
- **Discord:** [discord.gg/6hr2jHqnsG](https://discord.gg/6hr2jHqnsG)
- **Telegram:** [t.me/forbocai](https://t.me/forbocai)

---

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**
 
 ## Developers
 
 `Dev_Ops // Releáse_Cycles`
 
 To redeploy the SDK to NPM:
 
 1.  **Bump Version**: Update `version` in `package.json`.
 2.  **Build**: `npm run build` (Generates `dist/`).
 3.  **Publish**: `npm publish --access public`.
 
 > **Note**: You must be authenticated with `npm adduser` or have an `.npmrc` with a valid token.


## License

`Légal_Státus // Ríghts`

All rights reserved. © 2026 ForbocAI