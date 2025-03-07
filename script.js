document.addEventListener("DOMContentLoaded", function() {
    console.log("Cyber Security Hub Loaded Successfully!");
});

window.onscroll = function() {
    document.getElementById("scrollTop").style.display = (window.scrollY > 300) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
