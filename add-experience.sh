#!/bin/bash

# Script to add a new experience entry to your portfolio
# Usage: ./add-experience.sh "Company Name"

if [ $# -eq 0 ]; then
    echo "Usage: ./add-experience.sh \"Company Name\""
    echo "Example: ./add-experience.sh \"Google\""
    exit 1
fi

COMPANY_NAME="$1"
FILENAME=$(echo "$COMPANY_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-\|-$//g')

echo "Creating new experience entry: $COMPANY_NAME"
echo "Filename: $FILENAME.json"

# Copy template
cp experience/template.json "experience/$FILENAME.json"

echo ""
echo "✅ Experience file created: experience/$FILENAME.json"
echo ""
echo "📝 Next steps:"
echo "1. Edit experience/$FILENAME.json with your job details"
echo "2. Add 'experience/$FILENAME.json' to the experienceFiles array in script.js"
echo "3. Add company logo to assets/companies/ (optional)"
echo "4. Commit and push your changes"
echo ""
echo "🎯 Template fields to update:"
echo "  - title: \"Your Job Title\""
echo "  - company: \"$COMPANY_NAME\""
echo "  - date: \"YYYY - Present\" or \"YYYY - YYYY\""
echo "  - description: Brief role description"
echo "  - achievements: [\"Achievement 1\", \"Achievement 2\"]"
echo "  - technologies: [\"Tech1\", \"Tech2\"]"
echo "  - location: \"City, State/Country\""
echo "  - type: full-time/part-time/contract/internship"
echo "  - featured: true/false"
echo "  - companyUrl: \"https://company-website.com\""
echo "  - logo: \"company-logo.png\""
