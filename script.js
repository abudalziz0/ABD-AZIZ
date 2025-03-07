document.addEventListener("DOMContentLoaded", function() {
    console.log("Cyber Security Hub Loaded Successfully!");

    let elements = document.querySelectorAll(".fade-in");
    function fadeInOnScroll() {
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

window.onscroll = function() {
    document.getElementById("scrollTop").style.display = (window.scrollY > 300) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
