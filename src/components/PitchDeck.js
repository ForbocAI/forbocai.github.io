/**
 * Pitch Deck Component
 * A slide-based presentation deck for investors.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

const slides = [
    {
        id: 1,
        title: "The Problem",
        content: `
            <h3>Game AI is <span class="highlight-red">Static</span>.</h3>
            <h3>Generative AI is <span class="highlight-red">Chaotic</span>.</h3>
            <div class="spacer"></div>
            <p class="impact-statement">Neither are persistent. Neither are alive.</p>
        `
    },
    {
        id: 2,
        title: "The Solution",
        content: `
            <h3>The Forboc Engine</h3>
            <p>Neuro-symbolic. Deterministic. Owned.</p>
            <ul class="feature-list">
                <li><strong>Local Inference:</strong> Zero latency, privacy-first.</li>
                <li><strong>ECS Architecture:</strong> predictable state management.</li>
                <li><strong>Persistent Memory:</strong> Agents that remember everything.</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "The Tech Moat",
        content: `
            <div class="moat-grid">
                <div class="moat-item">
                    <h4>ECS + Redux</h4>
                    <p>Mathematical purity in game state.</p>
                </div>
                <div class="moat-item">
                    <h4>Local SLMs</h4>
                    <p>Optimized for consumer hardware.</p>
                </div>
                <div class="moat-item">
                    <h4>Ghost Agents</h4>
                    <p>Automated QA testing at 100x speed.</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "The Roadmap",
        content: `
            <ol class="roadmap-steps">
                <li><strong>Phase 1:</strong> Game Release (Proof of Fun)</li>
                <li><strong>Phase 2:</strong> Engine Licensing (B2B)</li>
                <li><strong>Phase 3:</strong> Agent Economy (Protocol)</li>
            </ol>
        `
    },
    {
        id: 5,
        title: "The Ask",
        content: `
            <h3>Seed Round</h3>
            <p>Raising capital for core team expansion and protocol development.</p>
            <div class="contact-box">
                <p>CONTACT</p>
                <a href="mailto:forbocai@sdin.dev" class="btn btn-primary">forbocai@sdin.dev</a>
            </div>
        `
    }
];

export const PitchDeck = (state) => {
    const currentSlide = selectPitchSlide(state);
    const totalSlides = slides.length;
    
    // Ensure slide index is valid
    const safeSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
    const slide = slides.find(s => s.id === safeSlideIndex);
    
    const prevLink = safeSlideIndex > 1 ? `#pitch/${safeSlideIndex - 1}` : '#';
    const nextLink = safeSlideIndex < totalSlides ? `#pitch/${safeSlideIndex + 1}` : '#';

    return `
    <section class="pitch-deck">
        <div class="container">
            <div class="deck-frame">
                <div class="deck-header">
                    <div class="slide-counter">SLIDE ${safeSlideIndex.toString().padStart(2, '0')} / ${totalSlides.toString().padStart(2, '0')}</div>
                    <div class="deck-controls">
                        <a href="${prevLink}" class="btn-control ${safeSlideIndex === 1 ? 'disabled' : ''}">PREV</a>
                        <a href="${nextLink}" class="btn-control ${safeSlideIndex === totalSlides ? 'disabled' : ''}">NEXT</a>
                    </div>
                </div>
                
                <div class="slide-content">
                    <h2 class="slide-title">${slide.title}</h2>
                    <div class="slide-body">
                        ${slide.content}
                    </div>
                </div>

                <div class="deck-footer">
                    <div class="confidential-mark">FORBOC INTELLIGENCE // CONFIDENTIAL</div>
                </div>
            </div>
        </div>
    </section>
    `;
};
