document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            // Ambil nilai dari input form
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            // Buat pesan yang akan dikirim ke WhatsApp
            const whatsappMessage = `Halo, saya ${name} (${email}). ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const phoneNumber = "6285163011367"; // Nomor WhatsApp kamu
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Arahkan ke WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }
});

// Data proyek
const projects = [
    { 
        title: "C++", 
        description: "Saya pertama kali belajar bahasa pemrograman C++ di sekolah saya dan saya semakin tertarik belajar tentang pemrograman.",
        image: "https://via.placeholder.com/300x200?text=C++Project"
    },
    { 
        title: "PHP", 
        description: "Ini adalah bahasa pemrograman ke-2 yang saya latih pada saat saya mengikuti program PKL di Telkom Renon. Saya sangat ingin mengembangkan kemampuan saya untuk membuat website yang dinamis dan modern menggunakan bahasa pemrograman ini.",
        image: "https://via.placeholder.com/300x200?text=PHPProject"
    },
    { 
        title: "JavaScript", 
        description: "Ini adalah bahasa pemrograman ke-3 yang ingin saya kuasai dan pelajari sepenuhnya. JavaScript memungkinkan saya untuk membuat website yang interaktif dan dinamis.",
        image: "https://via.placeholder.com/300x200?text=JavaScriptProject"
    }
];

// Fungsi untuk menampilkan proyek
function displayProjects() {
    const projectList = document.getElementById('project-list');
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

// Fungsi untuk membuat bentuk-bentuk mengambang
function createFloatingShapes() {
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
    const floatingShapes = document.querySelector('.floating-shapes');

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

// Fungsi untuk animasi navbar saat scroll
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        navbar.style.backgroundColor = 'var(--dark-color)';
    }
}

// Fungsi untuk tombol scroll-to-top
function handleScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

// Event listener untuk scroll
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleScrollToTop();
});

// Event listener untuk tombol scroll-to-top
document.getElementById('scrollTopBtn').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Event listener untuk form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim formulir
    alert('Terima kasih! Pesan Anda telah dikirim.');
    e.target.reset();
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    createFloatingShapes();

    // Animasi menggunakan GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#header h1, #header p, #header .btn', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });

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

    // Animasi bentuk-bentuk mengambang
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
});
