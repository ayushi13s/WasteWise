window.addEventListener("scroll", () => {
    const topPerformerSection = document.querySelector('.top-performer');
    const scrollPosition = window.scrollY;

    // Control the opacity and translateY for a smooth fade-out on scroll
    topPerformerSection.style.opacity = Math.max(1 - scrollPosition / 300, 0);
    topPerformerSection.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
