document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const title = document.querySelector('.title-toggle');
    console.log("Script is running!"); // This will check if your script is loaded

    if (title) {
        console.log("Title element found"); // This will check if the title is selected
        setInterval(() => {
            title.classList.toggle('hidden');
            console.log("Toggled title visibility"); // Log when toggling happens
        }, 3000); // 3 seconds interval
    } else {
        console.log("Title element not found");
    }

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

    // Skill Chart (Chart.js)
    const ctx = document.getElementById('programmingSkillsChart').getContext('2d');
    const programmingSkillsChart = new Chart(ctx, {
        type: 'bar', // atau 'radar', 'pie', dll.
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'SQL'],
            datasets: [{
                label: 'Tingkat Keahlian',
                data: [90, 80, 85, 70, 75, 65], // Atur sesuai tingkat keahlian
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
        },
        { 
            title: "PHP", 
            description: "Ini adalah bahasa pemrograman ke-2 yang saya latih pada saat saya mengikuti program PKL di Telkom Renon.",
        },
        { 
            title: "JavaScript", 
            description: "JavaScript adalah bahasa pemograman yang memungkinkan saya untuk membuat website yang interaktif dan dinamis.",
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

        // Header Animation
        gsap.from('#header h1, #header p, #header .btn', {
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.2,
        });

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
