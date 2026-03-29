// Scroll animation for navbar
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Form submission (demo)
function handleSubmit(event) {
    event.preventDefault();
    alert("Service booked successfully! We will contact you soon.");
}