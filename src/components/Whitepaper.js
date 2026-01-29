/**
 * Whitepaper Component
 * Ported from the original whitepaper.html content.
 */
export const Whitepaper = () => {
    return `
    <section class="hero hero-whitepaper">
        <div class="container">
            <div class="hero-content">
                <h1>Technical <span class="gradient-text">Whitepaper</span></h1>
                <p>Version 1.0 — January 2026</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            </div>
        </div>
    </section>

    <section class="whitepaper-content">
        <div class="container">
            <div class="tech-panel whitepaper-panel">

                
                <div class="barcode-strip whitepaper-barcode"></div>

                <h2>1. Executive Summary</h2>
            <p>The gaming industry is at a stagnation point where graphical fidelity has peaked, but narrative depth remains scripted and static. Simultaneously, the rise of Large Language Models (LLMs) offers infinite generative potential but suffers from hallucinations, high latency, and lack of state persistence.</p>
            <p><strong>ForbocAI</strong> proposes a different path: a <strong>Neuro-Symbolic Intelligence Protocol</strong> that marries the determinism of state-based applications with the fluidity of quantized Small Language Models (SLMs). This whitepaper outlines our technical approach to creating truly autonomous "Micro-NPCs" and the decentralized protocol that allows these agents to transcend their native environments.</p>
            <div class="runic-glyph">᛭ ᚠ ᛫ ᚨ ᛫ ᛁ ᛭</div>

            <h2>2. The Problem Space</h2>
            <h3>2.1 The "Scripted" Ceiling</h3>
            <p>Traditional NPCs are state machines guided by rigid behavior trees. They cannot improvise or remember interactions beyond pre-defined variables. This creates a "ludonarrative dissonance" where the game world feels visually real but intellectually dead.</p>

            <h3>2.2 The "Hallucination" Trap</h3>
            <p>Integrating cloud-based LLMs (like GPT-4) into games introduces three critical failures:</p>
            <ul>
                <li><strong>Latency:</strong> 500ms+ round trips break immersion in real-time environments.</li>
                <li><strong>Cost:</strong> Continuous token generation APIs are economically unviable for persistent worlds.</li>
                <li><strong>Incoherence:</strong> Pure LLMs struggle with game state logic (inventory counts, quest flags).</li>
            </ul>
            <div class="runic-glyph">ᚦ ᛫ ᛊ ᛫ ᛟ ᛫ ᛚ ᛫ ᚢ ᛫ ᛏ ᛫ ᛁ ᛫ ᛟ ᛫ ᚾ</div>

            <h2>3. The ForbocAI Solution</h2>
            <p>We introduce a rigorous separation of concerns between state (Logic) and personality (Vibes).</p>

            <h3>3.1 The Cortex: Local Inference</h3>
            <p>At the edge, we deploy highly quantized models like <strong>SmolLM2</strong> running locally on-device. Whether through browser runtimes, native executables, or headless text interfaces—the AI runs entirely on the user's hardware. This eliminates latency and server costs while ensuring privacy and zero-downtime operation.</p>
            
            <h3>3.2 Neuro-Symbolic State Bridge</h3>
            <p>To solve incoherence, we do not let the Generative AI Language Models change application state directly. Instead, we use a <strong>Neuro-Symbolic Bridge</strong>. The Generative AI Language Model outputs intent (e.g., "I want to trade"), which is parsed by a deterministic state system. The system validates the action against the rules (Does the NPC have the item? Is the player in range?) and executes the update reliably. This ensures the environment state remains bug-free and consistent.</p>

            <h4>Understanding ECS: Entities as Data</h4>
            <p>The Entity Component System (ECS) architecture fundamentally separates <strong>what things are</strong> from <strong>what they can do</strong>. An <strong>Entity</strong> is simply a unique identifier—a name tag. <strong>Components</strong> are data buckets that hold specific attributes (Health, Position, Inventory). <strong>Systems</strong> are the rules that operate on entities possessing certain components. This means creating a "Fire Mage" enemy doesn't require a new class—we simply attach Health, Position, CombatAI, and MagicResistance components to an ID. The game doesn't care if an entity is a player, a goblin, or a breakable crate; if it has a Health component, it can take damage.</p>

            <h4>Beyond Dialogue: Full Cognitive Control</h4>
            <p>The Generative AI layer is not limited to generating dialogue—it controls the NPC's entire cognitive stack:</p>
            <ul>
                <li><strong>Decision-Making:</strong> The model outputs structured JSON actions (e.g., <code>{"action": "RETREAT", "target": {"x": 10, "y": 20}}</code>) that are translated into ECS component updates.</li>
                <li><strong>Memory &amp; Learning:</strong> Through a RAG (Retrieval-Augmented Generation) pipeline, NPCs observe events ("The player attacked me"), embed them as vectors, and store them in a local memory database. Before acting, NPCs recall relevant memories to inform their decisions—an NPC betrayed last session may act suspicious in future encounters.</li>
                <li><strong>Emotional State:</strong> Internal values like fear, loyalty, and happiness are modified by the AI and influence subsequent behavior.</li>
            </ul>
            <p>The Generative AI is the NPC's <em>mind</em>—it thinks, speaks, remembers, and commands. The deterministic Logic Layer is the <em>nervous system</em> that executes those commands safely in real-time.</p>

            <h4>Generative AI vs. Traditional Game AI</h4>
            <p>Traditional advanced game AI relies on handcrafted logic structures:</p>
            <ul>
                <li><strong>Decision Trees:</strong> Binary branches (<code>if HP &lt; 20% → flee</code>) that explode combinatorially as complexity grows.</li>
                <li><strong>Behavior Trees:</strong> Hierarchical task selectors (used in AAA games like Halo) that are powerful but still authored by designers.</li>
                <li><strong>Finite State Machines (FSMs):</strong> Explicit states (Patrol → Alert → Combat) with rigid transitions.</li>
                <li><strong>GOAP (Goal-Oriented Action Planning):</strong> Backward planning from goals, requiring all actions and preconditions to be manually defined.</li>
                <li><strong>Utility AI:</strong> Weighted scoring systems where weights must be hand-tuned.</li>
            </ul>
            <p>These approaches are <strong>deterministic</strong>—given identical inputs, they produce identical outputs. They cannot handle novel situations outside their authored logic.</p>
            <p>Generative AI decision-making is fundamentally different. It receives natural language context (persona, memories, current situation) and produces <strong>novel, contextual reasoning</strong> through pattern-matching over billions of parameters. Where a behavior tree says <code>if player_has_stolen → hostility = 1</code>, an LLM might reason: <em>"The player took my family heirloom. But they also saved my life last week. I feel conflicted—I'll confront them but give a chance to explain."</em></p>
            <p>Forboc's hybrid approach leverages both: the <strong>LLM sets high-level goals</strong> (what to do), while <strong>Behavior Trees execute low-level tactics</strong> (how to do it). This delivers creative depth without sacrificing the reliability of traditional systems.</p>

            <h3>3.3 Ghost Agent QA</h3>
            <p>Procedural content is risky. To mitigate this, we employ "Ghost Agents"—headless instances of our AI that run through simulations at 100x speed. They exhaustively test dialogue trees and puzzle solutions to ensure no dead-ends exist before content is shipped.</p>
            <div class="runic-glyph">ᚠ ᛫ ᚢ ᛫ ᚦ ᛫ ᚨ ᛫ ᚱ ᛫ ᚲ</div>

            <h2>4. The Agent Economy</h2>
            <p>ForbocAI is not just a framework; it is a protocol for interoperability.</p>

            <h3>4.1 ERC-7007 & Tokenized Logic</h3>
            <p>We are implementing the <strong>ERC-7007 (Verifiable AI-Generated Content)</strong> standard to tokenize NPC "Souls". A Soul comprises:</p>
            <ul>
                <li><strong>Base Model Weights:</strong> The fine-tuned personality (LoRA).</li>
                <li><strong>Long-term Memory Vector Store:</strong> The agent's lived experiences.</li>
                <li><strong>State Vector:</strong> Current inventory, skills, and relationships.</li>
            </ul>
            <p>These assets can be exported to IPFS and traded on a decentralized marketplace. A player might forge a companion in the lore of <strong>Goetéian Chthonica</strong>—a timeless fantasy cyber noir setting involving knights and cybernetic soldiers. That companion, with all its memories and battle-earned wisdom intact, can then be imported into <em>any other world running on the Forboc Protocol</em>. The Protocol is genre-agnostic; the Soul transcends the simulation it was born in.</p>

            <h3>4.2 The Forboc Protocol</h3>
            <p>The <strong>Forboc Protocol</strong> is an interoperability standard for autonomous AI agents—analogous to what HTTP is for web pages or SMTP is for email, but for NPCs and companions. It defines:</p>
            <ul>
                <li><strong>Soul Serialization:</strong> A standardized format to export an agent's entire being: personality weights (LoRA), memory (vector store), and state (inventory, skills, relationships).</li>
                <li><strong>Decentralized Storage:</strong> Souls are stored on IPFS, persisting independently of any single server or campaign.</li>
                <li><strong>Verification (ERC-7007):</strong> Each Soul becomes a verifiable, ownable asset on-chain with provable AI lineage—ensuring authenticity and preventing fabrication.</li>
                <li><strong>Cross-Module Import:</strong> Any campaign or module that implements the Protocol can import Souls from other modules. The agent retains its memories, personality, and learned behaviors across adventures.</li>
            </ul>
            <p>The Protocol is a <em>contract</em>—a set of rules that any creator can implement. It specifies the data schema (what fields define a Soul), serialization format (how to encode/decode for storage), and verification mechanisms (how to prove legitimate training).</p>

            <h3>4.3 The Forboc SDK: Crafting Modules &amp; Campaigns</h3>
            <p>The <strong>Forboc SDK</strong> is a toolkit for creators to build <em>modules and campaigns</em>—self-contained adventures, chatbots, or narrative arcs that plug into the Forboc ecosystem. Think of it like creating a module: you define the setting, encounters, NPCs, and story beats, but the underlying intelligence infrastructure is handled by the Protocol.</p>
            <h4>SDK Components</h4>
            <ul>
                <li><strong>Cortex Integration:</strong> Drop-in module to add local SLM inference to your campaign—runtime-agnostic, running on browser, native, or headless environments. Handles model loading, prompt construction, and streaming output for NPC dialogue and decisions.</li>
                <li><strong>Neuro-Symbolic Bridge:</strong> Utilities to connect LLM outputs to your module's ECS/state system. Translates NPC "intent" into validated game actions within your campaign's rules.</li>
                <li><strong>RAG Pipeline:</strong> Pre-built vector store and embedding system for NPC memory. Your NPCs remember what happened in previous sessions—even if the player imports them from another module.</li>
                <li><strong>Soul Import/Export:</strong> APIs to serialize characters to the Protocol format and export to IPFS, or import existing Souls into your module's world.</li>
                <li><strong>Ghost Agent Tooling:</strong> Headless AI testing framework to QA your module's narrative paths, puzzle solutions, and encounter balance at scale before release.</li>
            </ul>
            <h4>Creator Flow</h4>
            <p>A module creator defines:</p>
            <ul>
                <li><strong>World Lore:</strong> The setting, factions, and metaphysics of the campaign (e.g., a haunted marshland, a cybernetic underworld).</li>
                <li><strong>NPC Templates:</strong> Character personas, starting memories, and behavioral tendencies that the AI will use as a foundation.</li>
                <li><strong>Encounter Logic:</strong> Combat encounters, dialogue triggers, and quest structures—all validated by the deterministic ECS layer.</li>
                <li><strong>Import Rules:</strong> How imported Souls integrate with the module's world. In realms like the <em>Goetéian Chthonica</em> lore—where obsidian-clad knights traverse the void—a Soul's plasma rifle and arcane blade alike find their place in the genre-defiant darkness.</li>
            </ul>
            <p>Players can then explore your module with their own companions—Souls they've trained across other adventures—creating a persistent, evolving narrative that spans multiple creators' works.</p>
            <div class="runic-glyph">ᛊ ᛫ ᛟ ᛫ ᚢ ᛫ ᛚ ᛫ ᛊ</div>

            <h2>5. Roadmap</h2>
            <ul>
                <li><strong>Q1 2026:</strong> Local Inference Alpha & RAG Integration.</li>
                <li><strong>Q2 2026:</strong> Neuro-Symbolic Bridge & Ghost Agent QA Tooling.</li>
                <li><strong>Q3 2026:</strong> Agent Economy Launch (Wallet Integration & IPFS Exports).</li>
                <li><strong>Q4 2026:</strong> Forboc SDK for Module &amp; Campaign Creators.</li>
            </ul>
            <div class="runic-divider">ᚷ ᛫ ᛟ ᛫ ᛖ ᛫ ᛏ ᛫ ᛖ ᛫ ᛁ ᛫ ᚨ ᛫ ᚾ</div>

            <div class="whitepaper-footer-note">
                <p><em>This document is a technical draft. Specifications are subject to change as we iterate towards the Singularity.</em></p>
                <a href="mailto:contact@sdin.dev" class="btn btn-primary">Contact the Team</a>
            </div> <!-- end whitepaper-footer-note -->
            </div> <!-- end tech-panel -->
        </div>
    </section>
    `;
};
