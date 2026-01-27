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
            </div>
        </div>
    </section>

    <section class="whitepaper-content">
        <div class="container">
            <h2>1. Executive Summary</h2>
            <p>The gaming industry is at a stagnation point where graphical fidelity has peaked, but narrative depth remains scripted and static. Simultaneously, the rise of Large Language Models (LLMs) offers infinite generative potential but suffers from hallucinations, high latency, and lack of state persistence.</p>
            <p><strong>ForbocAI</strong> proposes a hybrid architecture: a local-first, neuro-symbolic engine that marries the determinism of ECS (Entity Component System) game loops with the fluidity of quantized Small Language Models (SLMs). This whitepaper outlines our technical approach to creating truly autonomous "Micro-NPCs" and the decentralized protocol that allows these agents to transcend their native worlds.</p>

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

            <h2>3. The ForbocAI Solution</h2>
            <p>We introduce a rigorous separation of concerns between state (Logic) and personality (Vibes).</p>

            <h3>3.1 The Cortex: Local Inference</h3>
            <p>At the edge, we deploy highly quantized models like <strong>SmolLM2</strong> running via WebGPU. This eliminates latency and server costs. The AI runs entirely on the user's device, ensuring privacy and zero-downtime gameplay.</p>
            
            <h3>3.2 ECS-Redux Hybrid Engine</h3>
            <p>To solve incoherence, we do not let the LLM change game state directly. Instead, we use a <strong>Neuro-Symbolic Bridge</strong>. The LLM outputs intent (e.g., "I want to trade"), which is parsed by a deterministic ECS system. The ECS validates the action against the game rules (Does the NPC have the item? Is the player in range?) and executes the state change via a Redux-like reducer. This ensures the game state remains bug-free and replayable.</p>

            <h3>3.3 Ghost Agent QA</h3>
            <p>Procedural content is risky. To mitigate this, we employ "Ghost Agents"—headless instances of our AI that play the game at 100x speed in a simulation environment (Playwright/Vitest). They exhaustively test dialogue trees and puzzle solutions to ensure no dead-ends exist before content is shipped to players.</p>

            <h2>4. The Agent Economy</h2>
            <p>ForbocAI is not just an engine; it is a protocol for interoperability.</p>

            <h3>4.1 ERC-7007 & Tokenized Logic</h3>
            <p>We are implementing the <strong>ERC-7007 (Verifiable AI-Generated Content)</strong> standard to tokenize NPC "Souls". A Soul comprises:</p>
            <ul>
                <li><strong>Base Model Weights:</strong> The fine-tuned personality (LoRA).</li>
                <li><strong>Long-term Memory Vector Store:</strong> The agent's lived experiences.</li>
                <li><strong>State Vector:</strong> Current inventory, skills, and relationships.</li>
            </ul>
            <p>These assets can be exported to IPFS and traded on a decentralized marketplace. A player might train a companion in a Forboc fantasy RPG and then import that same companion (with all its memories intact) into a completely different sci-fi simulation running on the Forboc Protocol.</p>

            <h2>5. Roadmap</h2>
            <ul>
                <li><strong>Q1 2026:</strong> WebGPU Inference Alpha & RAG Integration.</li>
                <li><strong>Q2 2026:</strong> Neuro-Symbolic Bridge & Ghost Agent QA Tooling.</li>
                <li><strong>Q3 2026:</strong> Agent Economy Launch (Wallet Integration & IPFS Exports).</li>
                <li><strong>Q4 2026:</strong> Forboc SDK for Third-Party Developers.</li>
            </ul>

            <div class="whitepaper-footer-note">
                <p><em>This document is a technical draft. Specifications are subject to change as we iterate towards the Singularity.</em></p>
                <a href="mailto:contact@sdin.dev" class="btn btn-primary">Contact the Team</a>
            </div>
        </div>
    </section>
    `;
};
