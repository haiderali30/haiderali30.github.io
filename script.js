// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(".project-card, .research-card, .skill-card");
    
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});

// Contact form handling (simplified for client-side)
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector("input[type=\"text\"]").value;
        const email = contactForm.querySelector("input[type=\"email\"]").value;
        const message = contactForm.querySelector("textarea").value;
        
        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        
        alert("Thank you for your message! I\"ll get back to you soon.");
        contactForm.reset();
    });
}

// Add active class to current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveNavItem);

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: var(--secondary-color) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

