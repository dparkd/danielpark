const isMobile = window.matchMedia('(max-width: 768px)').matches; // Mobile screen check


if (isMobile) {
    // JavaScript to make the div behave like sticky
    const stickyDiv = document.getElementById('sticky');
    const initialTop = stickyDiv.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > initialTop) {
        // Keep it at the top if scrolled past its initial position
        stickyDiv.style.top = `${window.scrollY}px`;
        } else {
        // Reset to original absolute position when scrolled above
        stickyDiv.style.top = `${initialTop}px`;
        }
    });
} else {
    return;
}
