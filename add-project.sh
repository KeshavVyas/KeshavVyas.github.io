#!/bin/bash

# Script to add a new project to your portfolio
# Usage: ./add-project.sh "Project Name"

if [ $# -eq 0 ]; then
    echo "Usage: ./add-project.sh \"Project Name\""
    echo "Example: ./add-project.sh \"My Awesome App\""
    exit 1
fi

PROJECT_NAME="$1"
FILENAME=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-\|-$//g')

echo "Creating new project: $PROJECT_NAME"
echo "Filename: $FILENAME.json"

# Copy template
cp projects/template.json "projects/$FILENAME.json"

echo ""
echo "✅ Project file created: projects/$FILENAME.json"
echo ""
echo "📝 Next steps:"
echo "1. Edit projects/$FILENAME.json with your project details"
echo "2. Add 'projects/$FILENAME.json' to the projectFiles array in script.js"
echo "3. Add project screenshot to assets/projects/ (optional)"
echo "4. Commit and push your changes"
echo ""
echo "🎯 Template fields to update:"
echo "  - title: \"$PROJECT_NAME\""
echo "  - description: Brief project description"
echo "  - technologies: [\"Tech1\", \"Tech2\"]"
echo "  - github: Your GitHub repo URL"
echo "  - live: Your live demo URL"
echo "  - icon: Font Awesome icon class"
echo "  - featured: true/false"
echo "  - date: YYYY-MM-DD"
echo "  - category: web-app/mobile/website"
echo "  - tags: [\"tag1\", \"tag2\"]"
