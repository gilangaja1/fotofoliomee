document.addEventListener('DOMContentLoaded', () => {
    // --- Dark mode toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });

        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }
    }

    // --- Kode Baru: Ripple Button Effect (Tambahkan di sini, di bawah Dark Mode Toggle) ---
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${e.clientX - this.offsetLeft}px`;
            ripple.style.top = `${e.clientY - this.offsetTop}px`;
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }
    }

    // Particle System for Header
function createParticles() {
    const header = document.querySelector('#header');
    if (!header) return;  // Prevent error if header is not found

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation
        particle.style.animation = `
            float ${5 + Math.random() * 10}s linear infinite,
            fade ${3 + Math.random() * 2}s ease-in-out infinite alternate
        `;

        header.appendChild(particle);
    }
}

// Smooth Reveal for Skills
function revealSkills() {
    const skills = document.querySelectorAll('.skill-item');
    if (!skills.length) return;  // Prevent error if no skill items found

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    skills.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(50px)';
        skill.style.transition = 'all 0.6s ease-out';
        observer.observe(skill);
    });
}

// Typing Effect for Header Title
function typeEffect() {
    const title = document.querySelector('#gilang-aditya');
    if (!title) return;  // Prevent error if title is not found

    const text = title.textContent;
    title.textContent = '';

    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Tilt effect for project cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;  // Prevent error if no project cards found

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Initialize Enhancements
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    revealSkills();
    typeEffect();
    addTiltEffect();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

    // Handle Submit Button for WhatsApp
    const submitButton = document.getElementById('submitButton');

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                alert('Mohon lengkapi semua field sebelum mengirim.');
                return;
            }

            const whatsappMessage = `Halo, saya ${name} (${email}). ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const phoneNumber = "6285163011367";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        if (header) {
            const scrollPosition = window.pageYOffset;
            header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });

    // --- Skill Chart (Chart.js) ---
    const ctx = document.getElementById('programmingSkillsChart').getContext('2d');
    const programmingSkillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'SQL'],
            datasets: [{
                label: 'Tingkat Keahlian',
                data: [90, 80, 85, 70, 75, 65],
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // --- Kode Baru: Scroll Animations (Tambahkan di sini, di bawah Skill Chart) ---
    const scrollElements = document.querySelectorAll('.scroll-element');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });
    scrollElements.forEach(el => scrollObserver.observe(el));

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.75) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load

    // Burger Menu Toggle (Improved for Mobile)
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Add smooth slide-in animation for mobile
            gsap.fromTo(navLinks, { x: '-100%' }, { x: '0%', duration: 0.5, ease: 'power2.inOut' });
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

     // Animasi untuk chart saat muncul (GSAP + ScrollTrigger)
     if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('#programmingSkillsChart', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#skills-chart',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Data Proyek
const projects = [
    { 
        title: "C++", 
        description: "Saya pertama kali belajar bahasa pemrograman C++ di sekolah saya dan saya semakin tertarik belajar tentang pemrograman.",
        image: "c++.jpg" // Gambar untuk C++ misalnya cpp.jpg di folder images
    },
    { 
        title: "PHP", 
        description: "Ini adalah bahasa pemrograman ke-2 yang saya latih pada saat saya mengikuti program PKL di Telkom Renon.",
        image: "php.jpg" // Gambar untuk PHP misalnya php.jpg di folder images
    },
    { 
        title: "JavaScript", 
        description: "JavaScript adalah bahasa pemograman yang memungkinkan saya untuk membuat website yang interaktif dan dinamis.",
        image: "javascript.jpg" // Gambar untuk JavaScript misalnya javascript.jpg di folder images
    }
];

    // Fungsi untuk menampilkan proyek
    function displayProjects() {
        const projectList = document.getElementById('project-list');
        if (!projectList) return;

        // Menambahkan setiap proyek sebagai slide
        projects.forEach(project => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';  // Harus "swiper-slide" agar Swiper dapat mengenali elemen ini sebagai slide

            slide.innerHTML = `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
            projectList.appendChild(slide);
        });

        // Inisialisasi Swiper setelah proyek ditambahkan ke dalam DOM
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }
        });
    }

    // Panggil fungsi untuk menampilkan proyek saat halaman dimuat
    window.onload = displayProjects;

    // Create Floating Shapes
    function createFloatingShapes() {
        const shapes = ['circle', 'square', 'triangle'];
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
        const floatingShapes = document.querySelector('.floating-shapes');

        if (!floatingShapes) return;

        for (let i = 0; i < 20; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape', shapes[Math.floor(Math.random() * shapes.length)]);
            shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.width = `${Math.random() * 30 + 10}px`;
            shape.style.height = shape.style.width;
            floatingShapes.appendChild(shape);
        }
    }

    // Animate Navbar Scroll (Sticky Navbar for Mobile)
    function handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
            navbar.classList.add('sticky');
        } else {
            navbar.style.backgroundColor = 'var(--dark-color)';
            navbar.classList.remove('sticky');
        }
    }

    // Scroll to Top Button
    function handleScrollToTop() {
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (!scrollTopBtn) return;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }

    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleScrollToTop();
    });

    // Scroll to Top Button Action
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim.');
            contactForm.reset();
        });
    }

    // Initialize Functions
    displayProjects();
    createFloatingShapes();

    // GSAP Animations (Optimized for Mobile)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Mobile-specific animations
        const isMobile = window.innerWidth <= 768;

         // --- GSAP Scroll Animations ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('#header h1, #header p, #header .btn', {
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.2,
        });

        // --- Parallax Animations ---
        gsap.utils.toArray('.parallax-element').forEach((el) => {
            gsap.to(el, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        });
    }

        // Floating Shapes Animation (Slower for mobile to reduce performance impact)
        const shapeSpeed = isMobile ? 15 : 10;

        gsap.to('.floating-shapes .shape', {
            y: 'random(-20, 20)',
            x: 'random(-20, 20)',
            duration: shapeSpeed,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });

        // Animate on Scroll
        gsap.utils.toArray('.fade-in').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }

});

// Tambahkan kode ini di JavaScript Anda
function createSnowfall() {
    const header = document.querySelector('#header');
    if (!header) return;

    const snowflakeCount = 30;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        header.appendChild(snowflake);
    }
}

// Panggil fungsi di dalam event listener
document.addEventListener('DOMContentLoaded', function() {
    createSnowfall();
    // Panggilan fungsi atau kode lain yang sudah ada sebelumnya
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-item .progress');
    skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-skill');
        bar.style.width = `${width}%`;
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.boxShadow = '0px 0px 10px rgba(0, 255, 255, 0.7)';
    });
}

// Panggil fungsi di dalam ScrollTrigger atau event scroll
document.addEventListener('DOMContentLoaded', function() {
    // Panggilan fungsi createSnowfall dan lainnya...
    animateSkillBars();
});

function startConfetti() {
    const confettiCount = 100;
    const contactSection = document.querySelector('#kontak');
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        contactSection.appendChild(confetti);
    }
}

// Event listener scroll untuk memicu confetti di bagian Kontak
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', () => {
        const contactPosition = document.querySelector('#kontak').getBoundingClientRect().top;
        if (contactPosition < window.innerHeight) {
            startConfetti();
        }
    });
});

