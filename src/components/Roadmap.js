/**
 * Roadmap Component
 */
export const Roadmap = () => {
    return `
    <div id="roadmap" class="roadmap-section">
        <h2>Engineering Roadmap</h2>
        <p>Our path to fully autonomous, decentralized narrative gaming.</p>
        <div class="runic-glyph">ᚠ ᛫ ᛒ ᛫ ᚨ</div>
        
        <div class="grid">
            <div class="card">
                <div class="screw screw-tl"></div>
                <div class="screw screw-tr"></div>
                <span class="roadmap-phase-label phase-1">Phase 1 • Q1 2026</span>
                <span class="runic">Córtex_Init</span>
                <h3>The Cortex</h3>
                <ul class="roadmap-list">
                    <li><span>›</span> Local-First Inference Engine</li>
                    <li><span>›</span> RAG Memory Integration</li>
                    <li><span>›</span> Streaming Dialogue UI</li>
                </ul>
            </div>
            <div class="card">
                <div class="screw screw-tl"></div>
                <div class="screw screw-tr"></div>
                <span class="roadmap-phase-label phase-2">Phase 2 • Q2 2026</span>
                <span class="runic">Bridge_Protocol</span>
                <h3>Neuro-Symbolic Bridge</h3>
                <ul class="roadmap-list">
                    <li><span>›</span> Neuro-to-ECS Translator</li>
                    <li><span>›</span> Goal-Oriented Planning</li>
                    <li><span>›</span> Ghost Agent Audits</li>
                </ul>
            </div>
            <div class="card">
                <div class="screw screw-tl"></div>
                <div class="screw screw-tr"></div>
                <span class="roadmap-phase-label phase-3">Phase 3 • Q3 2026</span>
                <span class="runic">Æconomy_Scále</span>
                <h3>The Agent Economy</h3>
                <ul class="roadmap-list">
                    <li><span>›</span> Wallet Integration</li>
                    <li><span>›</span> "Soul" Export to IPFS</li>
                    <li><span>›</span> ERC-7007 Contracts</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};
