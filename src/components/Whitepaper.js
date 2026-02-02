/**
 * Whitepaper Component
 * Ported from the original whitepaper.html content.
 */
export const Whitepaper = () => {
    return `
    <section class="hero hero-whitepaper">
        <div class="container">
            <div class="hero-content">
                <h1><span class="gradient-text glitch-text" data-macro-scramble data-text="Technical Whitepaper">Technical Whitepaper</span></h1>
                <p>Version 1.0 — January 2026</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            </div>
        </div>
    </section>

    <section class="whitepaper-content">
        <div class="container">
            <div class="tech-panel whitepaper-panel">

                
                <div class="barcode-strip whitepaper-barcode"></div>

                <span class="runic" data-macro-scramble data-text="Execútive_Summáry // Inít">Execútive_Summáry // Inít</span>
                <h2>1. Executive Summary</h2>
            <p>The gaming industry is at a stagnation point where graphical fidelity has peaked, but narrative depth remains scripted and static. Simultaneously, the rise of Large Language Models (LLMs) offers infinite generative potential but suffers from hallucinations, high latency, and lack of state persistence.</p>
            <p><strong>ForbocAI</strong> proposes a different path: a <strong>Neuro-Symbolic Intelligence Protocol</strong> that marries the determinism of state-based applications with the fluidity of quantized Small Language Models (SLMs). This whitepaper outlines our technical approach to creating truly autonomous "Micro-NPCs" and the decentralized protocol that allows these agents to transcend their native environments.</p>
            <div class="runic-glyph">᛭ ᚠ ᛫ ᚨ ᛫ ᛁ ᛭</div>

            <span class="runic" data-macro-scramble data-text="Próblem_Spáce // Errór_Lóg">Próblem_Spáce // Errór_Lóg</span>
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

            <span class="runic" data-macro-scramble data-text="Solútion_Arch // Córtex">Solútion_Arch // Córtex</span>
            <h2>3. The ForbocAI Solution</h2>
            <p>We introduce a rigorous separation of concerns between state (Logic) and personality (Vibes).</p>

            <h3>3.1 The Cortex: Local Inference</h3>
            <p>At the edge, we deploy highly quantized models like <strong>SmolLM2</strong> running locally on-device. Whether through browser runtimes, native executables, or headless text interfaces—the AI runs entirely on the user's hardware. This eliminates latency and server costs while ensuring privacy and zero-downtime operation.</p>
            
            <h3>3.2 Neuro-Symbolic State Bridge</h3>
            <p>To solve incoherence, we use a <strong>Neuro-Symbolic Bridge</strong>. The Generative Model outputs intent (e.g., "I want to trade"), which is parsed by a rigorous validation system. This ensures the environment state remains bug-free and consistent. The model improvises the <em>Performance</em>, while the system enforces the <em>Rules</em>.</p>
            <p class="tech-note"><em>This architecture ensures that no matter how creative the AI gets, it can never break the game's physics.</em></p>

            <h4>Understanding ECS: Entities as Data</h4>
            <p>The Entity Component System (ECS) architecture fundamentally separates <strong>what things are</strong> from <strong>what they can do</strong>. An <strong>Entity</strong> is simply a unique identifier—a name tag. <strong>Components</strong> are data buckets that hold specific attributes (Health, Position, Inventory). <strong>Systems</strong> are the rules that operate on entities possessing certain components.</p>

            <h4>Beyond Dialogue: Full Cognitive Control</h4>
            <p>The Generative AI layer is not limited to generating dialogue—it controls the NPC's entire cognitive stack:</p>
            <ul>
                <li><strong>Decision-Making:</strong> The model outputs structured JSON actions (e.g., <code>{"action": "RETREAT", "target": {"x": 10, "y": 20}}</code>) that are translated into ECS component updates.</li>
                <li><strong>Memory &amp; Learning:</strong> Through a RAG (Retrieval-Augmented Generation) pipeline, NPCs observe events ("The player attacked me"), embed them as vectors, and store them in a local memory database. Before acting, NPCs recall relevant memories to inform their decisions.</li>
                <li><strong>Emotional State:</strong> Internal values like fear, loyalty, and happiness are modified by the AI and influence subsequent behavior.</li>
            </ul>
            <p>The Generative AI is the NPC's <em>mind</em>—it thinks, speaks, remembers, and commands. The deterministic Logic Layer is the <em>nervous system</em> that executes those commands safely in real-time.</p>

            <h3>3.3 Ghost Agent QA</h3>
            <p>Procedural content is risky. To mitigate this, we employ "Ghost Agents"—headless instances of our AI that run through simulations at 100x speed. They exhaustively test content to ensure no dead-ends exist before shipping.</p>
            <div class="runic-glyph">ᚠ ᛫ ᚢ ᛫ ᚦ ᛫ ᚨ ᛫ ᚱ ᛫ ᚲ</div>

            <span class="runic" data-macro-scramble data-text="Agént_Ecónomy // Protócol">Agént_Ecónomy // Protócol</span>
            <h2>4. The Agent Economy</h2>
            <p>ForbocAI is not just a framework; it is a protocol for interoperability.</p>

            <h3>4.1 Solana & Metaplex Core</h3>
            <p>We are building on <strong>Solana</strong> using the <strong>Metaplex Core</strong> standard. This allows for:</p>
            <ul>
                <li><strong>High Frequency Updates:</strong> Updating an agent's stats or memory hash costs fractions of a cent.</li>
                <li><strong>Zero-Copy Assets:</strong> Lightweight NFTs that don't clog the network.</li>
                <li><strong>$FAI Integration:</strong> The native <strong>$FAI</strong> token is used for all premium actions: Minting Souls, Buying API Credits, and Marketplace Trading.</li>
            </ul>
            <p>A "Soul" NFT contains:</p>
            <ul>
                <li><strong>Base Model Weights:</strong> The fine-tuned personality (LoRA).</li>
                <li><strong>Long-term Memory Hash:</strong> A pointer to their IPFS-stored experiences.</li>
                <li><strong>State Vector:</strong> Current inventory, skills, and relationships.</li>
            </ul>
            <p>These assets can be exported to IPFS and traded on a decentralized marketplace powered by Solana.</p>

            <h3>4.2 The Neural Grid Protocol</h3>
            <p>The <strong>Forboc Protocol</strong> is the interoperability standard for autonomous AI agents. It defines:</p>
            <ul>
                <li><strong>Soul Serialization:</strong> A standardized format to export an agent's entire being.</li>
                <li><strong>Decentralized Storage:</strong> Souls are stored on IPFS, persisting independently of any single server.</li>
                <li><strong>Verification:</strong> Each Soul becomes a verifiable, ownable asset on-chain.</li>
                <li><strong>Cross-Module Import:</strong> Any campaign or module that implements the Protocol can import Souls from other modules.</li>
            </ul>
            <p>The Protocol is a <em>contract</em>—a set of rules that any creator can implement to enable their worlds to host these living assets.</p>

            <h3>4.3 The Forboc SDK: Crafting Modules &amp; Campaigns</h3>
            <p>The <strong>Forboc SDK</strong> is a toolkit for creators to build <em>modules and campaigns</em>. It provides drop-in components for Local Inference, Memory, and Ghost Testing.</p>
            
            <div class="runic-glyph">ᛊ ᛫ ᛟ ᛫ ᚢ ᛫ ᛚ ᛫ ᛊ</div>

            <span class="runic" data-macro-scramble data-text="Róadmbáp // Tímelíne">Róadmbáp // Tímelíne</span>
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
