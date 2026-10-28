let onScroll = null;

export const setupHeaderState = () => {
    if (onScroll) window.removeEventListener('scroll', onScroll);

    const header = document.querySelector('.site-header');
    if (!header) return;

    const overImage = Boolean(document.querySelector('.hero-stage'));
    onScroll = () => header.classList.toggle('is-solid', !overImage || window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
};
