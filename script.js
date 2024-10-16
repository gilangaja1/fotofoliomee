document.addEventListener('DOMContentLoaded', () => {
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

    // Burger Menu Toggle
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Data Proyek
    const projects = [
        { 
            title: "C++", 
            description: "Saya pertama kali belajar bahasa pemrograman C++ di sekolah saya dan saya semakin tertarik belajar tentang pemrograman.",
            image: "https://via.placeholder.com/300x200?text=C++Project"
        },
        { 
            title: "PHP", 
            description: "Ini adalah bahasa pemrograman ke-2 yang saya latih pada saat saya mengikuti program PKL di Telkom Renon.",
            image: "https://via.placeholder.com/300x200?text=PHPProject"
        },
        { 
            title: "JavaScript", 
            description: "JavaScript memungkinkan saya untuk membuat website yang interaktif dan dinamis.",
            image: "https://via.placeholder.com/300x200?text=JavaScriptProject"
        }
    ];
    
    // Display Projects
    function displayProjects() {
        const projectList = document.getElementById('project-list');
        if (!projectList) return;

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            projectList.appendChild(card);
        });
    }

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
    
    // Animate Navbar Scroll
    function handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        } else {
            navbar.style.backgroundColor = 'var(--dark-color)';
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

    // GSAP Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    
        // Header Animation
        gsap.from('#header h1, #header p, #header .btn', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3
        });

        // Section Animations
        gsap.from('.section', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.section',
                start: 'top 80%'
            }
        });

        // Project Card Animations
        gsap.from('.project-card', {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 80%'
            }
        });

        // Skill Item Animations
        gsap.from('.skill-item', {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 80%'
            }
        });

        // Floating Shape Animations
        gsap.to('.shape', {
            y: 'random(-20, 20)',
            x: 'random(-20, 20)',
            rotation: 'random(-15, 15)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
                amount: 2,
                from: 'random'
            }
        });

        // Adding Hover Effects
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { scale: 1.05, duration: 0.3 });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { scale: 1, duration: 0.3 });
            });
        });

        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                gsap.to(skill, { scale: 1.05, duration: 0.3 });
            });
            skill.addEventListener('mouseleave', () => {
                gsap.to(skill, { scale: 1, duration: 0.3 });
            });
        });
    } else {
        console.warn('GSAP atau ScrollTrigger tidak terdeteksi. Animasi tidak akan dijalankan.');
    }
});
