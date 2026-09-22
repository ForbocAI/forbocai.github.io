// Mobile Menu State
let mobileMenuOpen = false;

// Setup Mobile Menu Event Listeners
//
// The drawer covers the page, so while it is open it owns the keyboard. Three
// things were missing and each one stranded somebody: focus stayed on the
// toggle after opening, so a keyboard user opened a menu and was still outside
// it; Escape did nothing, which is the one key everybody tries; and Tab ran
// straight past the links into the page underneath the sheet.
export const setupMobileMenu = () => {
    const toggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;

    const links = () => [...mobileNav.querySelectorAll('a[href]')];

    const setOpen = (open, { restoreFocus = true } = {}) => {
        mobileMenuOpen = open;
        toggle.classList.toggle('active', open);
        mobileNav.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        mobileNav.setAttribute('aria-hidden', String(!open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        // The page behind the sheet should not scroll under it.
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) {
            links()[0]?.focus();
        } else if (restoreFocus) {
            toggle.focus();
        }
    };

    toggle.addEventListener('click', () => setOpen(!mobileMenuOpen));

    // A link closes the drawer, but the destination should keep the focus it is
    // about to receive rather than have it yanked back to the toggle.
    mobileNav.addEventListener('click', (event) => {
        if (event.target.closest('a[href]')) setOpen(false, { restoreFocus: false });
    });

    document.addEventListener('keydown', (event) => {
        if (!mobileMenuOpen) return;
        if (event.key === 'Escape') {
            setOpen(false);
            return;
        }
        if (event.key !== 'Tab') return;
        // Hold the tab ring inside the sheet: the toggle is the last stop, so
        // the cycle runs first link -> last link -> toggle -> first link.
        const stops = [...links(), toggle];
        if (!stops.length) return;
        const first = stops[0];
        const last = stops[stops.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    });
};
