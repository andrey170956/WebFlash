document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        cardObserver.observe(card);
    });
});