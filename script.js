// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.querySelector('.timeline');
const contactForm = document.getElementById('contact-form');

// Projects will be loaded dynamically from JSON files
let projects = [];

// Experience will be loaded dynamically from JSON files
let experience = [];

// Load projects from JSON files
async function loadProjectsFromFiles() {
    try {
        const projectFiles = [
            'projects/ecommerce-platform.json',
            'projects/task-manager.json',
            'projects/weather-dashboard.json',
            'projects/portfolio-website.json',
            'projects/blog-platform.json',
            'projects/chat-application.json'
        ];

        const projectPromises = projectFiles.map(async (file) => {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    return await response.json();
                } else {
                    console.warn(`Failed to load ${file}`);
                    return null;
                }
            } catch (error) {
                console.warn(`Error loading ${file}:`, error);
                return null;
            }
        });

        const loadedProjects = await Promise.all(projectPromises);
        projects = loadedProjects.filter(project => project !== null);
        
        // Sort projects by date (newest first)
        projects.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        console.log('Projects loaded:', projects.length);
    } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to sample projects if loading fails
        projects = getFallbackProjects();
    }
}

// Load experience from JSON files
async function loadExperienceFromFiles() {
    try {
        const experienceFiles = [
            'experience/software-engineer.json',
            'experience/junior-developer.json'
        ];

        const experiencePromises = experienceFiles.map(async (file) => {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    return await response.json();
                } else {
                    console.warn(`Failed to load ${file}`);
                    return null;
                }
            } catch (error) {
                console.warn(`Error loading ${file}:`, error);
                return null;
            }
        });

        const loadedExperience = await Promise.all(experiencePromises);
        experience = loadedExperience.filter(exp => exp !== null);
        
        // Sort experience by date (newest first)
        experience.sort((a, b) => {
            const dateA = a.date.includes('Present') ? new Date() : new Date(a.date.split(' - ')[1]);
            const dateB = b.date.includes('Present') ? new Date() : new Date(b.date.split(' - ')[1]);
            return dateB - dateA;
        });
        
        console.log('Experience loaded:', experience.length);
    } catch (error) {
        console.error('Error loading experience:', error);
        // Fallback to sample experience if loading fails
        experience = getFallbackExperience();
    }
}

// Fallback experience in case JSON loading fails
function getFallbackExperience() {
    return [
        {
            title: "Software Engineer",
            company: "Tech Company",
            date: "2022 - Present",
            description: "Full-stack software engineer responsible for developing and maintaining scalable web applications",
            achievements: [
                "Developed and maintained scalable web applications",
                "Collaborated with cross-functional teams to deliver high-quality software",
                "Implemented best practices for code quality and performance"
            ],
            technologies: ["React", "Node.js", "MongoDB", "AWS"],
            location: "San Francisco, CA",
            type: "full-time",
            featured: true,
            companyUrl: "https://techcompany.com",
            logo: "tech-company-logo.png"
        },
        {
            title: "Junior Developer",
            company: "Startup",
            date: "2021 - 2022",
            description: "Frontend developer focused on creating responsive user interfaces and optimizing application performance",
            achievements: [
                "Built responsive user interfaces using modern frameworks",
                "Optimized application performance and user experience",
                "Participated in agile development processes"
            ],
            technologies: ["JavaScript", "React", "CSS3", "HTML5"],
            location: "Remote",
            type: "full-time",
            featured: true,
            companyUrl: "https://startup.com",
            logo: "startup-logo.png"
        }
    ];
}

// Fallback projects in case JSON loading fails
function getFallbackProjects() {
    return [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/keshavvyas/ecommerce-platform",
            live: "https://ecommerce-demo.com",
            icon: "fas fa-shopping-cart",
            featured: true,
            date: "2024-12-01",
            category: "web-app",
            tags: ["fullstack", "ecommerce", "payment"]
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
            github: "https://github.com/keshavvyas/task-manager",
            live: "https://task-manager-demo.com",
            icon: "fas fa-tasks",
            featured: true,
            date: "2024-11-15",
            category: "web-app",
            tags: ["collaboration", "real-time", "productivity"]
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
            github: "https://github.com/keshavvyas/weather-dashboard",
            live: "https://weather-demo.com",
            icon: "fas fa-cloud-sun",
            featured: true,
            date: "2024-10-20",
            category: "web-app",
            tags: ["api", "visualization", "frontend"]
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and professional design.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
            github: "https://github.com/keshavvyas/portfolio",
            live: "https://keshavvyas.github.io",
            icon: "fas fa-user",
            featured: true,
            date: "2024-12-19",
            category: "website",
            tags: ["portfolio", "responsive", "design"]
        },
        {
            title: "Blog Platform",
            description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
            technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
            github: "https://github.com/keshavvyas/blog-platform",
            live: "https://blog-demo.com",
            icon: "fas fa-blog",
            featured: true,
            date: "2024-09-10",
            category: "web-app",
            tags: ["cms", "markdown", "fullstack"]
        },
        {
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
            technologies: ["React", "Socket.io", "Express", "MongoDB"],
            github: "https://github.com/keshavvyas/chat-app",
            live: "https://chat-demo.com",
            icon: "fas fa-comments",
            featured: true,
            date: "2024-08-25",
            category: "web-app",
            tags: ["real-time", "messaging", "websockets"]
        }
    ];
}

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
async function loadProjects() {
    if (!projectsGrid) return;

    // Load projects from JSON files first
    await loadProjectsFromFiles();
    
    // Filter to show only featured projects on homepage
    const featuredProjects = projects.filter(project => project.featured);
    
    featuredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Load experience dynamically
async function loadExperience() {
    if (!experienceTimeline) return;

    // Load experience from JSON files first
    await loadExperienceFromFiles();
    
    // Clear existing timeline content
    experienceTimeline.innerHTML = '';
    
    // Create timeline items for each experience entry
    experience.forEach(exp => {
        const timelineItem = createTimelineItem(exp);
        experienceTimeline.appendChild(timelineItem);
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

// Create timeline item element
function createTimelineItem(exp) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item fade-in-up';
    
    timelineItem.innerHTML = `
        <div class="timeline-content">
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="timeline-date">${exp.date}</p>
            <p class="timeline-description">${exp.description}</p>
            <ul>
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
            <div class="timeline-tech">
                ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    return timelineItem;
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
    loadProjects().catch(console.error);
    loadExperience().catch(console.error);
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
