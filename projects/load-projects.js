// Utility script to automatically discover project files
// This can be used to dynamically load all JSON files in the projects directory

async function discoverProjectFiles() {
    // In a real implementation, you would need a server-side solution
    // to list directory contents. For now, we'll use a predefined list
    // that gets updated when you add new projects.
    
    const projectFiles = [
        'projects/ecommerce-platform.json',
        'projects/task-manager.json',
        'projects/weather-dashboard.json',
        'projects/portfolio-website.json',
        'projects/blog-platform.json',
        'projects/chat-application.json'
    ];
    
    return projectFiles;
}

// Function to add a new project file to the list
function addProjectFile(filename) {
    // Add the new file to the projectFiles array in loadProjectsFromFiles()
    console.log(`Add 'projects/${filename}' to the projectFiles array in script.js`);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { discoverProjectFiles, addProjectFile };
}
