// The memory ledger writes itself in once. Firing that on load meant it played
// to nobody on a phone, where the panel starts three quarters of the way down
// the first screen. Fire it the first time the panel is actually seen.
let panelWatcher = null;

export const setupMemoryEntrance = () => {
    panelWatcher?.disconnect();

    const panel = document.querySelector('.memory-panel');
    if (!panel) return;

    if (typeof IntersectionObserver === 'undefined') {
        panel.classList.add('is-remembering');
        return;
    }

    panelWatcher = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-remembering');
                observer.unobserve(entry.target);
            });
        },
        // 0.2, not 0.55. At 0.55 the memory card had to be more than half in
        // view before its lines began to write, and on a 390px phone only 24%
        // of it is on the first screen — so the first thing a phone reader saw
        // under "What Servitor™ is weighing" was nothing, and the proof the
        // hero exists to show arrived 240px of scroll and 2.3 seconds later.
        { threshold: 0.2 },
    );

    panelWatcher.observe(panel);
};
