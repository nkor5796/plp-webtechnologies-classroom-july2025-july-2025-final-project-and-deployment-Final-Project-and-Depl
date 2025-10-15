<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script id="app-script">
document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       1. Initialize AOS Animation
    =============================== */
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    });

    /* ===============================
       2. Mobile Navigation Toggle
    =============================== */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.innerHTML = navMenu.classList.contains("active")
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    /* ===============================
       3. Scroll Effects & Navigation
    =============================== */
    const header = document.getElementById("header");
    const backToTop = document.getElementById("backToTop");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        // Highlight active nav link
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href").substring(1) === current
            );
        });

        // Header background on scroll
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 100);
        }

        // Show/hide back-to-top button
        if (backToTop) {
            backToTop.classList.toggle("show", window.scrollY > 300);
        }
    });

    /* ===============================
       4. Back to Top Button
    =============================== */
    if (backToTop) {
        backToTop.addEventListener("click", e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ===============================
       5. Smooth Scrolling for Anchors
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });

    /* ===============================
       6. Contact Form Validation
    =============================== */
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            if (!name || !email || !message) {
                alert("⚠️ Please fill in all fields.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            alert("✅ Thank you for your message! I’ll get back to you soon.");
            contactForm.reset();
        });
    }
});
</script>
