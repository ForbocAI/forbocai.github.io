/**
 * Hero Component
 * 
 *        .-.
 *     .-(   )-.
 *    (___.-.___)
 *       /_|_\
 */
export const Hero = () => {
    return `
    <section class="hero-container">
        <div class="hero">
            <span class="diagnostic-label pos-tl">Lantern at the window</span>
            <span class="diagnostic-label pos-br">Memory in bloom</span>
            
            <div class="hero-illustration-wrapper">
                <img src="hero-lantern.png" class="hero-illustration" alt="Hand-drawn watercolor illustration of a glowing antique lantern hanging in a mossy magical forest" />
            </div>
            <div class="hero-content">
                <div class="recessed-label">A warm gate into living worlds</div>
                <span class="runic">ᚠ ᛟ ᚱ ᛒ ᛟ ᚲ ᛫ ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛫ ᛋ ᛟ ᚢ ᛚ</span>
                <h1><span class="gradient-text">Game AI NPC</span><br>Decision Making.</h1>
                <p>ForbocAI, Inc. helps game studios raise NPCs that remember who they have met and who they are becoming. Beneath the lantern glow sits the whole garden: ghost scouts walking the roads ahead, portable Souls, and the <strong>$FAI</strong> coin market path that lets living characters keep growing beyond a single save file or world.</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ ᛫ ᛚ ᛫ ᚨ ᛫ ᚾ ᛫ ᛏ ᛫ ᛖ ᛫ ᚱ ᛫ ᚾ</div>
                <div class="hero-buttons">
                    <a href="#technology" class="btn btn-primary" data-link>Explore the Platform</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View $FAI</a>
                </div>
            </div>
        </div>
    </section>
    `;
};
