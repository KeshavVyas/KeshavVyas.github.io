# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 Quick Deployment Options

### 1. GitHub Pages (Recommended)

**Best for**: Free hosting, easy setup, automatic deployments

#### Steps:
1. **Create GitHub Repository**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial portfolio website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `yourusername.github.io` (for custom domain) or any name
   - Make it public
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"

5. **Your site will be live at**: `https://yourusername.github.io`

### 2. Netlify (Recommended for Custom Domain)

**Best for**: Custom domains, form handling, advanced features

#### Steps:
1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

2. **Deploy**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - Go to Site settings > Domain management
   - Add custom domain
   - Follow DNS instructions

### 3. Vercel

**Best for**: Fast deployments, serverless functions

#### Steps:
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to existing project or create new
   - Choose settings
   - Deploy

## 🔧 Pre-Deployment Checklist

Before deploying, make sure to:

### 1. Update Personal Information
- [ ] Change name in `index.html`
- [ ] Update email in contact section
- [ ] Add your actual GitHub/LinkedIn links
- [ ] Update project links in `script.js`

### 2. Test Locally
- [ ] Open `index.html` in browser
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test on mobile device
- [ ] Check all projects load correctly

### 3. Optimize for Production
- [ ] Compress images (if any)
- [ ] Minify CSS/JS (optional)
- [ ] Test loading speed
- [ ] Check browser compatibility

## 🌐 Custom Domain Setup

### GitHub Pages with Custom Domain

1. **Buy Domain**
   - Purchase domain from Namecheap, GoDaddy, etc.

2. **Add Custom Domain**
   - Go to repository Settings > Pages
   - Add custom domain
   - Check "Enforce HTTPS"

3. **Configure DNS**
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

### Netlify with Custom Domain

1. **Add Domain**
   - Site settings > Domain management
   - Add custom domain

2. **Configure DNS**
   - Follow Netlify's DNS instructions
   - Usually involves changing nameservers

## 📧 Contact Form Setup

### Option 1: EmailJS (Easiest)

1. **Sign up at EmailJS**
   - Go to [emailjs.com](https://emailjs.com)
   - Create account

2. **Add to HTML**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

3. **Update JavaScript**
   ```javascript
   emailjs.init("YOUR_USER_ID");
   ```

### Option 2: Netlify Forms

1. **Update Form**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. **Add Hidden Input**
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

### Option 3: Formspree

1. **Sign up at Formspree**
   - Go to [formspree.io](https://formspree.io)

2. **Update Form Action**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🔍 SEO Optimization

### 1. Update Meta Tags
- [ ] Title tag
- [ ] Description
- [ ] Keywords
- [ ] Open Graph tags
- [ ] Twitter Card tags

### 2. Add Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Submit sitemap

## 🚨 Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check file paths, ensure images are in correct folders

### Issue: Contact form not working
**Solution**: Verify EmailJS/Netlify setup, check console for errors

### Issue: Mobile menu not working
**Solution**: Check JavaScript console, ensure all IDs match

### Issue: Slow loading
**Solution**: Compress images, minify CSS/JS, use CDN

## 📱 Mobile Testing

Test your site on:
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad Safari
- [ ] Various screen sizes

## 🔄 Continuous Deployment

### GitHub Pages
- Automatic deployment on push to main branch

### Netlify
- Automatic deployment on push to main branch
- Preview deployments for pull requests

### Vercel
- Automatic deployment on push
- Preview deployments for branches

## 📊 Performance Monitoring

### Tools to Use:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

### Target Metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🛡️ Security Considerations

- [ ] Use HTTPS (automatic with most platforms)
- [ ] Validate form inputs
- [ ] Sanitize user data
- [ ] Keep dependencies updated
- [ ] Use security headers

## 📈 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking code to `<head>`
3. Set up goals/conversions

### Other Options:
- Plausible Analytics
- Fathom Analytics
- Simple Analytics

---

**Need Help?**
- Check the main README.md
- Create an issue on GitHub
- Contact: sanjay.vyas@example.com
