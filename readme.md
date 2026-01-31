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

The **ForbocAI SDK** is an **Engine-Agnostic** toolkit for creating autonomous AI-powered NPCs in any game or application. It runs anywhere (Node, Browser, Python, Rust).

- **Local SLM Cortex** — Run quantized Small Language Models in your environment
- **Autonomous NPCs** — Create agents with persona, memory, and validated actions
- **Persistent Memory** — RAG pipeline for semantic recall across sessions
- **Portable Souls** — Export agent state to IPFS for cross-application use
- **Automated QA** — Ghost Agents for headless testing at scale

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
| **Cortex** | Local SLM inference engine (Engine Agnostic) |
| **Agent** | Autonomous entities with persona, state, memory |
| **Memory** | RAG pipeline for persistent semantic recall |
| **Bridge** | Neuro-symbolic action validation |
| **Soul** | Portable agent state (IPFS/ERC-7007) |
| **Ghost** | Headless QA testing at scale |

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