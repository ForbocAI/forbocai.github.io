/**
 * Hero Component
 */
export const Hero = () => {
    return `
    <section class="hero-container">
        <!-- Decorative indentations for the screen area -->
        <div class="hero">
            <!-- Registration Marks -->
            <div class="registration-mark reg-offset-tl"><span></span></div>
            <div class="registration-mark reg-offset-tr"><span></span></div>
            <div class="registration-mark reg-offset-bl"><span></span></div>
            <div class="registration-mark reg-offset-br"><span></span></div>

            <!-- Sector Label -->
            <div class="sector-label sector-label-right">SECTOR 01 // CORE</div>
            
            <span class="diagnostic-label diagnostic-flicker pos-tl">SYS.ONLINE // 2026.01</span>
            <span class="diagnostic-label diagnostic-flicker pos-br">MEM.ACTIVE // CORTEX.READY</span>
            <div class="hero-content">
                <div class="recessed-label" data-macro-scramble data-text="System_01 // Ready">System_01 // Ready</div>
                <span class="runic encrypted-text" data-text="Architect_Init // Boot_Séquence">Architect_Init // Boot_Séquence</span>
                <h1><span class="gradient-text glitch-text" data-macro-scramble data-text="Architected Agents.">Architected Agents.</span><br>Synthetic Souls.</h1>
                <p>We are bridging the gap between Scripted Lore and Artificial Life. ForbocAI provides the neural architecture for the next generation of living, breathing digital worlds.</p>
                <div class="runic-divider">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</div>
                <div class="hero-buttons">
                    <!-- Round action buttons simulation -->
                    <a href="#technology" class="btn btn-primary" data-link>Initialize</a>
                    <a href="mailto:forbocai@sdin.dev" class="btn btn-secondary">Contact</a>
                </div>
            </div>
        </div>
    </section>
    `;
};
