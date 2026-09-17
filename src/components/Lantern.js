/**
 * Lantern Component
 *
 * The night half was measurably unlit — 800px of it with nothing across the
 * full width above L=0.040 — because the glow was four radial gradients with no
 * object casting them. A pool of light with no lamp in it is just a lighter
 * patch. This is the lamp: the glow falls from it.
 *
 * `size` scales the whole fitting; `tone` picks honey or the brighter lantern
 * cream for the one at the end of the path.
 */
export const Lantern = ({ className = '', size = 1, tone = 'honey' } = {}) => `
    <span class="lantern lantern-${tone} ${className}" style="--lantern-scale:${size}" aria-hidden="true">
        <svg class="lantern-body" viewBox="0 0 40 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0v18" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/>
            <path d="M14 22h12l-1.5-4h-9z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M20 18a4 4 0 0 1 0-4" stroke="currentColor" stroke-width="1.2"/>
            <path d="M12.5 24h15l1.5 38a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
            <path d="M16 24v42M24 24v42" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
            <path d="M12 70h16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M20 40c2.6 2.4 3.8 4.6 3.8 6.8A3.8 3.8 0 0 1 20 50.6a3.8 3.8 0 0 1-3.8-3.8c0-2.2 1.2-4.4 3.8-6.8z" class="lantern-flame"/>
        </svg>
        <span class="lantern-halo"></span>
    </span>
`;
