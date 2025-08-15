# Keshav Vyas - Professional Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. This website showcases professional experience, projects, skills, and provides a contact form for potential collaborations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Dynamic Projects**: JavaScript-powered project showcase
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: WCAG compliant design patterns

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download**

   ```bash
   git clone https://github.com/sanjayvyas/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**

   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

3. **Local Development Server** (Optional)

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── .gitignore          # Git ignore file
├── README.md           # This file
├── add-project.sh      # Script to add new projects
├── projects/           # Project JSON files
│   ├── README.md       # Project documentation
│   ├── template.json   # Template for new projects
│   ├── ecommerce-platform.json
│   ├── task-manager.json
│   └── ...             # More project files
└── assets/             # Images and other assets
    ├── favicon.ico     # Website favicon
    ├── profile.jpg     # Profile image (optional)
    └── projects/       # Project screenshots (optional)
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

- **Hero Section**: Update name, title, and description
- **About Section**: Modify personal description and statistics
- **Experience Section**: Add your work experience
- **Contact Section**: Update email and social media links

### 2. Projects

#### Quick Add (Recommended)

Use the provided script to add new projects:

```bash
./add-project.sh "Your Project Name"
```

This will:

1. Create a new JSON file in the `projects/` directory
2. Use the template with all required fields
3. Generate a proper filename automatically

#### Manual Add

1. **Copy the template**:

   ```bash
   cp projects/template.json projects/your-project-name.json
   ```

2. **Edit the project file** with your details:

   ```json
   {
     "title": "Your Project Name",
     "description": "Project description here...",
     "technologies": ["React", "Node.js", "MongoDB"],
     "github": "https://github.com/keshavvyas/project",
     "live": "https://your-project.com",
     "icon": "fas fa-code",
     "featured": true,
     "date": "2024-12-19",
     "category": "web-app",
     "tags": ["frontend", "backend"]
   }
   ```

3. **Add to script.js**: Add your new file to the `projectFiles` array in `loadProjectsFromFiles()`

#### Project Images

Add project screenshots to `assets/projects/` and reference them in the `image` field.

### 3. Skills

Modify the skills section in `index.html`:

```html
<div class="skill-item">
  <i class="fab fa-react"></i>
  <span>React</span>
</div>
```

### 4. Colors and Styling

Customize the color scheme in `styles.css`:

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --accent-color: #06b6d4; /* Accent color */
  --text-primary: #1e293b; /* Primary text color */
  /* ... other variables */
}
```

### 5. Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS** (Recommended for simple setup):

   ```javascript
   // Add EmailJS script to index.html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>;

   // Initialize in script.js
   emailjs.init("YOUR_USER_ID");

   // Update contact form submission
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData);
   ```

2. **Netlify Forms** (If hosting on Netlify):

   ```html
   <form name="contact" method="POST" data-netlify="true"></form>
   ```

3. **Custom Backend**: Implement your own form handling

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create Repository**

   - Create a new repository on GitHub
   - Name it `yourusername.github.io` for custom domain or any name for project pages

2. **Push Code**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select source branch (usually `main`)
   - Your site will be available at `https://yourusername.github.io`

### Netlify

1. **Drag and Drop**

   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area

2. **Git Integration**
   - Connect your GitHub repository
   - Automatic deployments on push

### Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Advanced Customization

### Adding Dark Mode

1. **Add CSS Variables**

   ```css
   :root {
     /* Light theme colors */
   }

   [data-theme="dark"] {
     /* Dark theme colors */
     --background: #1a1a1a;
     --text-primary: #ffffff;
   }
   ```

2. **Add Toggle Button**

   ```html
   <button id="theme-toggle" class="theme-toggle">
     <i class="fas fa-moon"></i>
   </button>
   ```

3. **JavaScript Implementation**
   ```javascript
   const themeToggle = document.getElementById("theme-toggle");
   themeToggle.addEventListener("click", () => {
     document.documentElement.setAttribute(
       "data-theme",
       document.documentElement.getAttribute("data-theme") === "dark"
         ? "light"
         : "dark"
     );
   });
   ```

### Adding Blog Section

1. **Create blog.html**
2. **Add navigation link**
3. **Implement blog post system** (static or dynamic)

### Adding Portfolio Gallery

1. **Create gallery section**
2. **Add lightbox functionality**
3. **Organize projects by category**

## 📱 Mobile Optimization

The website is already mobile-optimized with:

- Responsive grid layouts
- Mobile-first navigation
- Touch-friendly buttons
- Optimized typography
- Fast loading times

## 🔍 SEO Optimization

The website includes:

- Meta tags for social sharing
- Structured data markup
- Semantic HTML
- Optimized images
- Fast loading times
- Mobile-friendly design

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization:

- Create an issue on GitHub
- Email: keshav.vyas@example.com
- LinkedIn: [Keshav Vyas](https://linkedin.com/in/keshavvyas)

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Inter](https://rsms.me/inter/) font family
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) for code

---

**Made with ❤️ by Keshav Vyas**

_Last updated: December 2024_
