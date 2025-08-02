// Skills data for Abhay's portfolio
const skillsData = {
    cloud: [
        { title: "Azure", img: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
        { title: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
        { title: "Docker", img: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
        { title: "Kubernetes", img: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
        { title: "Terraform", img: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
        { title: "Linux", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" }
    ],
    development: [
        { title: "Jenkins", img: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg" },
        { title: "Git", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { title: "GitHub", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
        { title: "GitHub Actions", img: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" },
        { title: "Ansible", img: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg" },
        { title: "Bash", img: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
        { title: "Prometheus", img: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" },
        { title: "Grafana", img: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" },
        { title: "PowerShell", img: "https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_64.svg" }
    ]
};

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSkills();
    initializeNavigation();
    initializeScrollAnimations();
    initializeTypingEffect();
    initializeThemeToggle();
    initializeParallaxEffects();
    initializeResumeDownloads();
});

// Skills initialization
function initializeSkills() {
    const cloudSkillsContainer = document.getElementById('cloud-skills');
    const devSkillsContainer = document.getElementById('dev-skills');

    if (cloudSkillsContainer) {
        // Populate cloud skills
        skillsData.cloud.forEach(skill => {
            const skillElement = createSkillElement(skill);
            cloudSkillsContainer.appendChild(skillElement);
        });
    }

    if (devSkillsContainer) {
        // Populate development skills
        skillsData.development.forEach(skill => {
            const skillElement = createSkillElement(skill);
            devSkillsContainer.appendChild(skillElement);
        });
    }
}

// Create skill element
function createSkillElement(skill) {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';
    skillDiv.innerHTML = `
        <div class="skill-icon">
            <img src="${skill.img}" alt="${skill.title}" loading="lazy">
        </div>
        <span class="skill-name">${skill.title}</span>
    `;
    return skillDiv;
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
    } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.card, .skill-item, .project-card, .experience-item, .certification-card').forEach(el => {
        observer.observe(el);
    });
}

// Typing effect for hero section
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
        'DevOps Engineer',
        'Cloud Architect',
        'Infrastructure Specialist',
        'Automation Expert'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// Parallax effects
function initializeParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Contact form handling (if needed)
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Here you would typically send the form data to your backend
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload images
function preloadImages() {
    const imageUrls = [
        ...skillsData.cloud.map(skill => skill.img),
        ...skillsData.development.map(skill => skill.img)
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
preloadImages();
// Resume download functionality
function downloadResume() {
    const fileName = 'CV_Abhay_Patil.pdf';
    const downloadName = 'Abhay_Patil_DevOps_Resume.pdf';
    
    const link = document.createElement('a');
    link.href = `./public/${fileName}`;
    link.download = downloadName;
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show notification
    showNotification('Resume PDF download started', 'success');
}

// Initialize resume download buttons
function initializeResumeDownloads() {
    document.querySelectorAll('[data-resume-download]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const format = button.getAttribute('data-resume-download');
            downloadResume(format);
        });
    });
}
