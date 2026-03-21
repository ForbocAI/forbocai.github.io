/**
 * Technology Component
 * Represents the platform overview section.
 */
export const Technology = () => {
    return `
    <h2>What We Build</h2>
    <p>Think of ForbocAI as a well-tended hearth for living worlds. Beneath the moss and lamplight there is serious craft, but what people feel is simple: characters who remember, rules that hold, and paths that can be walked before anyone gets lost.</p>
    <div class="runic-glyph">ᚠ ᛫ ᚢ ᛫ ᚦ ᛫ ᚨ ᛫ ᚱ ᛫ ᚲ</div>
    
    <div class="section-divider"><span>The Hearth</span></div>
    
    <div class="grid">
        <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 9h8M7 9l1 10h8l1-10H7z"/>
                <path d="M10 9V5h4v4"/>
                <path d="M12 2v3"/>
                <circle cx="12" cy="15" r="2"/>
            </svg>
            <span class="runic">ᛗ ᛖ ᛗ ᛟ ᚱ ᛁ ᛫ ᚲ ᛖ ᛏ ᛏ ᛚ ᛖ</span>
            <h3>Characters Who Remember</h3>
            <p>Companions, neighbors, and NPCs keep their little habits, loyalties, and shared stories, so they feel like someone you have traveled with instead of a line generator you rented for a minute.</p>
            <span class="tech-note">Local-first inference · Zero per-token cost · Persistent memory</span>
        </div>
        <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 16c4-4 12-4 16 0"/>
                <path d="M4 16v4"/>
                <path d="M20 16v4"/>
                <path d="M9 13v7"/>
                <path d="M15 13v7"/>
            </svg>
            <span class="runic">ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛫ ᚱ ᚢ ᛚ ᛖ ᛋ</span>
            <h3>Rules That Still Hold</h3>
            <p>ForbocAI gives characters room to surprise you without letting them tumble through the floorboards. The world stays authored, playable, and coherent even when the people inside it feel alive.</p>
            <span class="tech-note">Neuro-symbolic validation · No hallucinated actions · Game-agnostic protocol</span>
        </div>
        <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4a5 5 0 0 0-5 5v9l2-2 2 2 2-2 2 2 2-2V9a5 5 0 0 0-5-5z"/>
                <path d="M9 10h.01"/>
                <path d="M15 10h.01"/>
            </svg>
            <span class="runic">ᚷ ᚺ ᛟ ᛋ ᛏ ᛫ ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛋ</span>
            <h3>Ghost Scouts On The Path</h3>
            <p>Our ghost scouts wander ahead with a lantern in hand, checking paths, quests, and social loops before the village opens its gates to players.</p>
            <span class="tech-note">Headless QA · Automated playtesting · Coverage metrics</span>
        </div>
    </div>
    `;
};

