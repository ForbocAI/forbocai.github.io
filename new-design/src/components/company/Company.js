import { TEAM, initialsOf } from './team.js';
import {
    THESIS, SIGNALS, MARKET, SHIPPED, BUILDING, MILESTONES, DIFFERENCE, MODEL,
} from './sections.js';

const CONTENTS = [
    ['co-thesis', 'Thesis'],
    ['co-opportunity', 'Opportunity'],
    ['co-product', 'Product'],
    ['co-difference', 'Difference'],
    ['co-model', 'Business model'],
    ['co-team', 'Team'],
    ['co-roadmap', 'Roadmap'],
    ['co-contact', 'Contact'],
];

const INVESTOR_MAIL = 'mailto:hello@forboc.ai?subject=Investor%20introduction';

const Band = ({ id, eyebrow, title, intro = '', tone = '', body }) => `
    <section id="${id}" class="co-band${tone ? ` co-band-${tone}` : ''}${tone === 'dark' ? ' theme-dark' : ''}" aria-labelledby="${id}-title">
        <div class="wrap">
            <header class="co-head">
                <p class="eyebrow">${eyebrow}</p>
                <h2 id="${id}-title" class="co-title">${title}</h2>
                ${intro ? `<p class="co-intro">${intro}</p>` : ''}
            </header>
            ${body}
        </div>
    </section>
`;

const num = (i) => String(i + 1).padStart(2, '0');

const Cards = (rows) => `
    <ol class="co-cards">
        ${rows.map(([t, d], i) => `
        <li class="co-card">
            <span class="co-num">${num(i)}</span>
            <h3>${t}</h3>
            <p>${d}</p>
        </li>`).join('')}
    </ol>
`;

export const Company = () => `
    <section class="co-hero theme-dark" aria-labelledby="co-title">
        <div class="wrap co-hero-grid">
            <div>
                <p class="eyebrow">ForbocAI, Inc.</p>
                <h1 id="co-title" class="display co-display">Character intelligence is a new layer in games. We are building it.</h1>
                <p class="lead">ForbocAI builds AI infrastructure for game characters: Servitor™, a language model trained for characters; the runtime that serves it; and SDKs that connect it to a game — with the game’s own rules always in charge.</p>
                <div class="actions">
                    <a href="${INVESTOR_MAIL}" class="button button-primary">Request an investor introduction</a>
                    <a href="#pitch/1" class="button button-secondary">Open the vision deck</a>
                </div>
            </div>
            <aside class="co-glance" aria-label="At a glance">
                <p class="co-glance-title">At a glance</p>
                <dl>
                    <div><dt>Founded</dt><dd>2026</dd></div>
                    <div><dt>Product</dt><dd>Servitor™ and the NPC Protocol</dd></div>
                    <div><dt>Shipped SDKs</dt><dd>TypeScript, Unreal Engine 5</dd></div>
                    <div><dt>Stage</dt><dd>Seed round open</dd></div>
                </dl>
            </aside>
        </div>
    </section>

    <nav class="co-contents" aria-label="On this page">
        <div class="wrap">
            ${CONTENTS.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
        </div>
    </nav>

    ${Band({
        id: 'co-thesis',
        eyebrow: 'Mission and thesis',
        title: 'Give every character the ability to meet the unexpected — and still be themselves.',
        intro: 'Studios should be able to ship characters who decide as the people their writers authored, remember what players did, and act only within the game’s rules.',
        body: Cards(THESIS),
    })}

    ${Band({
        id: 'co-opportunity',
        tone: 'tint',
        eyebrow: 'Why now',
        title: 'Generative AI is already in the studio. The character layer is still open.',
        body: `
            <ul class="co-stats co-stats-3">
                ${SIGNALS.map(([fig, text, src]) => `
                <li><strong class="co-figure">${fig}</strong><span>${text}</span><small>${src}</small></li>`).join('')}
            </ul>
            <h3 class="co-subhead">The market it opens into</h3>
            <ul class="co-stats co-stats-4">
                ${MARKET.map(([fig, text]) => `
                <li><strong class="co-figure">${fig}</strong><span>${text}</span></li>`).join('')}
            </ul>
            <p class="co-fine">Third-party estimates; each figure links to its source.</p>`,
    })}

    ${Band({
        id: 'co-product',
        eyebrow: 'Product and maturity',
        title: 'A working layer, inside our own worlds today.',
        body: `
            <div class="co-maturity">
                <div class="co-panel">
                    <p class="co-panel-head"><span class="status status-live">Shipped</span></p>
                    <ul class="co-list">${SHIPPED.map((s) => `<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="co-panel">
                    <p class="co-panel-head"><span class="status status-building">In development</span></p>
                    <ul class="co-list co-list-dev">${BUILDING.map((s) => `<li>${s}</li>`).join('')}</ul>
                </div>
            </div>
            <p class="co-fine">Hosted cognition needs a network connection. Studios keep their game-owned world state and SDK-local memory; NPC cognition remains a ForbocAI service.</p>`,
    })}

    ${Band({
        id: 'co-difference',
        tone: 'dark',
        eyebrow: 'Differentiation',
        title: 'Character intelligence that connects to gameplay.',
        body: Cards(DIFFERENCE),
    })}

    ${Band({
        id: 'co-model',
        eyebrow: 'Business model',
        title: 'Paid from the first call.',
        body: `
            <dl class="co-terms">
                ${MODEL.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
            </dl>
            <p class="co-fine">Public pricing is published once the release contract is in place. <a href="#wp-gates">Read the Standard’s terms</a>.</p>`,
    })}

    ${Band({
        id: 'co-team',
        tone: 'tint',
        eyebrow: 'Team',
        title: 'The team.',
        body: `
            <ul class="co-team">
                ${TEAM.map((p) => `
                <li class="co-person">
                    <span class="avatar co-avatar" aria-hidden="true">${initialsOf(p.name)}</span>
                    <h3 class="co-name">${p.name}</h3>
                    <p class="co-role">${p.role}</p>
                    <p class="co-bio">${p.bio}</p>
                    <a class="co-profile" href="${p.href}" target="_blank" rel="noopener noreferrer" aria-label="${p.name} on LinkedIn">LinkedIn <span aria-hidden="true">↗</span></a>
                </li>`).join('')}
            </ul>
            <p class="co-join"><a class="arrow-link" href="https://wellfound.com/company/forboc-ai" target="_blank" rel="noopener noreferrer">Join the team</a></p>`,
    })}

    ${Band({
        id: 'co-roadmap',
        eyebrow: 'Roadmap',
        title: 'From partner integration to production games.',
        body: `
            <ol class="co-timeline">
                ${MILESTONES.map(([t, d], i) => `
                <li>
                    <span class="co-step" aria-hidden="true">${i + 1}</span>
                    <h3>${t}</h3>
                    <p>${d}</p>
                </li>`).join('')}
            </ol>
            <div class="co-round theme-dark">
                <div>
                    <h3>The seed round is open</h3>
                    <p>We are raising a seed round to complete partner integrations, support the first external game launch, and establish the infrastructure and commercial terms needed to serve game studios in production.</p>
                </div>
                <a href="${INVESTOR_MAIL}" class="button button-primary">Request an introduction</a>
            </div>`,
    })}

    ${Band({
        id: 'co-contact',
        tone: 'dark',
        eyebrow: 'Contact',
        title: 'Talk to the founders.',
        body: `
            <div class="co-contact">
                <ul class="co-contact-list">
                    <li><a href="${INVESTOR_MAIL}"><span>Investors</span><strong>Request an introduction</strong></a></li>
                    <li><a href="mailto:hello@forboc.ai?subject=Partnership"><span>Studios and partners</span><strong>Discuss a partnership</strong></a></li>
                    <li><a href="mailto:hello@forboc.ai"><span>Everything else</span><strong>hello@forboc.ai</strong></a></li>
                </ul>
                <div class="co-contact-side">
                    <p>Read more about the product and the standard we hold it to.</p>
                    <div class="actions">
                        <a href="#pitch/1" class="button button-primary">Open the vision deck</a>
                        <a href="#whitepaper" class="button button-secondary">Read the whitepaper</a>
                    </div>
                </div>
            </div>`,
    })}
`;
