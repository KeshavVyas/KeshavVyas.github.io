// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const contactForm = document.getElementById('contact-form');

// Sample projects data - you can replace this with your actual projects
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/sanjayvyas/ecommerce-platform",
        live: "https://ecommerce-demo.com",
        icon: "fas fa-shopping-cart"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
        github: "https://github.com/sanjayvyas/task-manager",
        live: "https://task-manager-demo.com",
        icon: "fas fa-tasks"
    },
    {
        title: "Weather Dashboard",
        description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
        github: "https://github.com/sanjayvyas/weather-dashboard",
        live: "https://weather-demo.com",
        icon: "fas fa-cloud-sun"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and professional design.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
        github: "https://github.com/sanjayvyas/portfolio",
        live: "https://sanjayvyas.github.io",
        icon: "fas fa-user"
    },
    {
        title: "Blog Platform",
        description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
        github: "https://github.com/sanjayvyas/blog-platform",
        live: "https://blog-demo.com",
        icon: "fas fa-blog"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
        technologies: ["React", "Socket.io", "Express", "MongoDB"],
        github: "https://github.com/sanjayvyas/chat-app",
        live: "https://chat-demo.com",
        icon: "fas fa-comments"
    }
];

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load projects dynamically
function loadProjects() {
    if (!projectsGrid) return;

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in-up';
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${project.icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="${project.live}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Live
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Contact form handling
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        contactForm.classList.add('loading');
        
        try {
            // Simulate form submission (replace with actual form handling)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.classList.remove('loading');
        }
    });
}

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    // Insert before contact form
    const contactSection = document.querySelector('.contact-form');
    if (contactSection) {
        contactSection.insertBefore(messageElement, contactSection.firstChild);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.timeline-item, .skill-item, .stat');
    animateElements.forEach(el => observer.observe(el));
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Skills animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });
}

// Smooth scroll for all anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme toggle (if you want to add dark mode later)
function initThemeToggle() {
    // This can be expanded later for dark/light mode toggle
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // You can add theme toggle functionality here
    console.log('Theme system initialized');
}

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Analytics tracking (if needed)
function initAnalytics() {
    // You can add Google Analytics or other tracking here
    console.log('Analytics initialized');
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website initialized');
    
    // Initialize all functionality
    initNavigation();
    loadProjects();
    initContactForm();
    initAnimations();
    initTypingEffect();
    initSkillsAnimation();
    initSmoothScroll();
    initThemeToggle();
    initLazyLoading();
    initAnalytics();
    initErrorHandling();
    
    // Add some CSS for the scrolled navbar state
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    `;
    document.head.appendChild(style);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize if screen becomes larger
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add loading animation for page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove loading screen if you have one
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Export functions for potential external use
window.PortfolioApp = {
    showMessage,
    loadProjects,
    initContactForm
};
