# Projects Directory

This directory contains all your portfolio projects in JSON format. Each project is stored as a separate JSON file for easy management and updates.

## 📁 File Structure

```
projects/
├── README.md              # This file
├── template.json          # Template for new projects
├── ecommerce-platform.json
├── task-manager.json
├── weather-dashboard.json
├── portfolio-website.json
├── blog-platform.json
└── chat-application.json
```

## 🚀 Adding a New Project

### Step 1: Copy the Template
```bash
cp template.json your-project-name.json
```

### Step 2: Edit the Project File
Open your new JSON file and update the following fields:

```json
{
  "title": "Your Project Title",
  "description": "Describe what your project does, what problems it solves, and what makes it special.",
  "technologies": ["Technology1", "Technology2", "Technology3"],
  "github": "https://github.com/keshavvyas/your-project",
  "live": "https://your-project-demo.com",
  "icon": "fas fa-code",
  "featured": true,
  "date": "YYYY-MM-DD",
  "category": "web-app",
  "image": "project-screenshot.jpg",
  "tags": ["tag1", "tag2", "tag3"]
}
```

### Step 3: Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Project name | "E-Commerce Platform" |
| `description` | Brief project description | "A full-stack e-commerce application..." |
| `technologies` | Array of technologies used | `["React", "Node.js", "MongoDB"]` |
| `github` | Link to GitHub repository | "https://github.com/keshavvyas/project" |
| `live` | Link to live demo | "https://project-demo.com" |
| `icon` | Font Awesome icon class | "fas fa-shopping-cart" |
| `featured` | Show on homepage (true/false) | `true` |
| `date` | Project completion date | "2024-12-19" |
| `category` | Project category | "web-app", "mobile", "website" |
| `image` | Screenshot filename | "project-screenshot.jpg" |
| `tags` | Array of tags for filtering | `["frontend", "backend"]` |

### Step 4: Available Icons
Use any Font Awesome icon. Common ones:
- `fas fa-code` - General coding
- `fas fa-shopping-cart` - E-commerce
- `fas fa-tasks` - Task management
- `fas fa-cloud-sun` - Weather/API
- `fas fa-user` - Portfolio/Personal
- `fas fa-blog` - Blog/CMS
- `fas fa-comments` - Chat/Messaging
- `fas fa-mobile-alt` - Mobile app
- `fas fa-gamepad` - Game
- `fas fa-chart-line` - Analytics/Dashboard

### Step 5: Categories
- `web-app` - Web applications
- `mobile` - Mobile applications
- `website` - Static websites
- `api` - API/Backend services
- `game` - Games
- `tool` - Developer tools

## 🎨 Adding Project Images

1. **Create an `assets/projects/` directory** (if it doesn't exist)
2. **Add your project screenshot** to that directory
3. **Update the `image` field** in your JSON file to match the filename

Example:
```
assets/projects/
├── ecommerce-screenshot.jpg
├── task-manager-screenshot.jpg
└── your-project-screenshot.jpg
```

## 🔄 Updating Existing Projects

Simply edit the JSON file for any project to update its information. The website will automatically reflect the changes.

## 📱 Project Display

Projects are automatically loaded and displayed on your portfolio website. Featured projects appear on the homepage, and all projects are available in the projects section.

## 🏷️ Filtering by Tags

You can filter projects by tags. Common tags include:
- `frontend` - Frontend projects
- `backend` - Backend projects
- `fullstack` - Full-stack projects
- `api` - API projects
- `mobile` - Mobile applications
- `responsive` - Responsive design
- `real-time` - Real-time features
- `ecommerce` - E-commerce projects

## 💡 Tips

1. **Keep descriptions concise** but informative
2. **Use relevant tags** for better organization
3. **Update dates** when you make significant changes
4. **Add screenshots** to make projects more appealing
5. **Use descriptive filenames** for JSON files

## 🔧 Troubleshooting

- **Project not showing**: Check that `featured` is set to `true`
- **Icon not displaying**: Verify the Font Awesome class name
- **Image not loading**: Check the file path in `assets/projects/`
- **JSON errors**: Validate your JSON syntax using a JSON validator
