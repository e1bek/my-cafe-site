document.addEventListener("scroll", () => {
    document.querySelectorAll(".about, .contact").forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
});
