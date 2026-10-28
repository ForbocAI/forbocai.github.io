const select = (tabs, next, { focus = true } = {}) => {
    tabs.forEach((tab) => {
        const on = tab === next;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
    });
    if (focus) next.focus();
};

export const setupTabs = () => {
    document.querySelectorAll('[data-tabs]').forEach((group) => {
        const tabs = [...group.querySelectorAll('[role="tab"]')];
        if (!tabs.length) return;

        tabs.forEach((tab) => tab.addEventListener('click', () => select(tabs, tab, { focus: false })));

        group.querySelector('[role="tablist"]')?.addEventListener('keydown', (event) => {
            const at = tabs.indexOf(document.activeElement);
            if (at < 0) return;
            const to = {
                ArrowRight: (at + 1) % tabs.length,
                ArrowDown: (at + 1) % tabs.length,
                ArrowLeft: (at - 1 + tabs.length) % tabs.length,
                ArrowUp: (at - 1 + tabs.length) % tabs.length,
                Home: 0,
                End: tabs.length - 1,
            }[event.key];
            if (to === undefined) return;
            event.preventDefault();
            select(tabs, tabs[to]);
        });
    });
};
