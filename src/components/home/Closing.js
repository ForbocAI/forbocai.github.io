import { TEAM } from '../company/team.js';

const FACTS = [
    ['Why game-specific infrastructure', 'Generative AI is already part of how games are made. Characters need more than a general chat service offers: responses and actions shaped for a game, generated from its context, and kept inside its rules. Building that layer is the opportunity.'],
    ['How the business works', 'Studios pay for the hosted service from the first call, on subscription tiers that grow with the size of their cast; publishers with many titles take enterprise terms. Every character turn runs through our runtime, so revenue grows as games use more characters.'],
    ['What we have built', 'Hosted character models, the runtime that serves them, SDKs for TypeScript and Unreal Engine 5, and test worlds where it all runs today.'],
    ['What comes next', 'Integrations with our first partner studios, and production-ready playtesting and playable characters. We’re raising a seed round to qualify the SDK, API and billing path and deliver those integrations.'],
];

const PATHS = [
    ['Investors', 'Request an introduction', 'mailto:hello@forboc.ai?subject=Investor%20introduction'],
    ['Game studios', 'Bring one character to life', 'mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life'],
    ['Partners', 'Start a conversation', 'mailto:hello@forboc.ai?subject=Partnership'],
];

export const Closing = () => `
    <section id="contact" class="closing theme-dark" aria-labelledby="contact-title">
        <div class="wrap">
            <div class="closing-head">
                <p class="eyebrow">The company</p>
                <h2 id="contact-title" class="title">AI infrastructure for game developers.</h2>
                <p class="closing-lead">ForbocAI is building the infrastructure that helps game developers bring AI-driven character interactions into their games. Our focus is on character models, runtime systems, and developer tools that work within the rules and systems of a game.</p>
            </div>

            <dl class="closing-facts">
                ${FACTS.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
            </dl>

            <div class="closing-grid">
                <div>
                    <ul class="closing-team" aria-label="Team">
                        ${TEAM.map((p) => `<li><strong>${p.name}</strong><span>${p.role}</span></li>`).join('')}
                    </ul>
                    <p class="closing-line">ForbocAI, Inc. · Founded 2026 · Seed round open</p>
                    <a href="#company" class="button button-secondary">Company &amp; investor overview</a>
                </div>
                <ul class="contact-paths">
                    ${PATHS.map(([who, cta, href]) => `
                    <li><a href="${href}"><span>${who}</span><strong>${cta}</strong></a></li>`).join('')}
                    <li class="contact-mail">Or write to <a href="mailto:hello@forboc.ai">hello@forboc.ai</a></li>
                </ul>
            </div>
        </div>
    </section>
`;
