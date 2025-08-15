#!/bin/bash

# Portfolio Update Script
# This script automates the process of updating your portfolio website
# Usage: ./update.sh [commit_message]

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to validate JSON files
validate_json_files() {
    print_status "Validating JSON files..."
    
    # Check if jq is available for JSON validation
    if command_exists jq; then
        local json_files=()
        
        # Find all JSON files in projects and experience directories
        if [ -d "projects" ]; then
            json_files+=($(find projects -name "*.json" -type f))
        fi
        
        if [ -d "experience" ]; then
            json_files+=($(find experience -name "*.json" -type f))
        fi
        
        local has_errors=false
        
        for file in "${json_files[@]}"; do
            if ! jq empty "$file" 2>/dev/null; then
                print_error "Invalid JSON in $file"
                has_errors=true
            else
                print_success "✓ $file"
            fi
        done
        
        if [ "$has_errors" = true ]; then
            print_error "JSON validation failed. Please fix the errors above."
            exit 1
        fi
    else
        print_warning "jq not found. Skipping JSON validation."
        print_warning "Install jq for JSON validation: brew install jq (macOS) or apt-get install jq (Ubuntu)"
    fi
}

# Function to check for new project files
check_new_files() {
    print_status "Checking for new project and experience files..."
    
    # Check for new project files
    if [ -d "projects" ]; then
        local project_files=($(find projects -name "*.json" -type f))
        local project_count=${#project_files[@]}
        print_success "Found $project_count project files"
        
        # List project files
        for file in "${project_files[@]}"; do
            echo "  - $file"
        done
    fi
    
    # Check for new experience files
    if [ -d "experience" ]; then
        local experience_files=($(find experience -name "*.json" -type f))
        local experience_count=${#experience_files[@]}
        print_success "Found $experience_count experience files"
        
        # List experience files
        for file in "${experience_files[@]}"; do
            echo "  - $file"
        done
    fi
}

# Function to update script.js with new files
update_script_files() {
    print_status "Checking if script.js needs updates..."
    
    local needs_update=false
    local script_content=$(cat script.js)
    
    # Check for new project files
    if [ -d "projects" ]; then
        local project_files=($(find projects -name "*.json" -type f -exec basename {} \;))
        
        for file in "${project_files[@]}"; do
            if ! grep -q "'projects/$file'" script.js; then
                print_warning "Project file 'projects/$file' not found in script.js"
                needs_update=true
            fi
        done
    fi
    
    # Check for new experience files
    if [ -d "experience" ]; then
        local experience_files=($(find experience -name "*.json" -type f -exec basename {} \;))
        
        for file in "${experience_files[@]}"; do
            if ! grep -q "'experience/$file'" script.js; then
                print_warning "Experience file 'experience/$file' not found in script.js"
                needs_update=true
            fi
        done
    fi
    
    if [ "$needs_update" = true ]; then
        print_warning "Please update script.js to include new files in the arrays:"
        print_warning "  - Add new project files to 'projectFiles' array in loadProjectsFromFiles()"
        print_warning "  - Add new experience files to 'experienceFiles' array in loadExperienceFromFiles()"
    else
        print_success "All JSON files are properly referenced in script.js"
    fi
}

# Function to check git status
check_git_status() {
    print_status "Checking git status..."
    
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not a git repository. Please initialize git first."
        exit 1
    fi
    
    local status=$(git status --porcelain)
    
    if [ -z "$status" ]; then
        print_success "Working directory is clean"
        return 0
    else
        print_status "Changes detected:"
        echo "$status"
        return 1
    fi
}

# Function to build and test
build_and_test() {
    print_status "Building and testing..."
    
    # Check if index.html exists
    if [ ! -f "index.html" ]; then
        print_error "index.html not found"
        exit 1
    fi
    
    # Check if script.js exists
    if [ ! -f "script.js" ]; then
        print_error "script.js not found"
        exit 1
    fi
    
    # Check if styles.css exists
    if [ ! -f "styles.css" ]; then
        print_error "styles.css not found"
        exit 1
    fi
    
    print_success "All required files found"
    
    # Check for common issues
    local issues=0
    
    # Check for broken links in HTML
    if command_exists linkchecker; then
        print_status "Checking for broken links..."
        if linkchecker --no-status --no-warnings index.html > /dev/null 2>&1; then
            print_success "No broken links found"
        else
            print_warning "Some links might be broken"
            ((issues++))
        fi
    fi
    
    # Check file sizes
    local html_size=$(stat -f%z index.html 2>/dev/null || stat -c%s index.html 2>/dev/null || echo 0)
    local css_size=$(stat -f%z styles.css 2>/dev/null || stat -c%s styles.css 2>/dev/null || echo 0)
    local js_size=$(stat -f%z script.js 2>/dev/null || stat -c%s script.js 2>/dev/null || echo 0)
    
    print_status "File sizes:"
    echo "  - index.html: $((html_size / 1024))KB"
    echo "  - styles.css: $((css_size / 1024))KB"
    echo "  - script.js: $((js_size / 1024))KB"
    
    if [ $issues -eq 0 ]; then
        print_success "Build validation passed"
    else
        print_warning "Build validation completed with $issues warnings"
    fi
}

# Function to commit and push
commit_and_push() {
    local commit_message="$1"
    
    if [ -z "$commit_message" ]; then
        commit_message="Update portfolio with latest changes"
    fi
    
    print_status "Committing changes..."
    git add .
    
    if git diff --cached --quiet; then
        print_warning "No changes to commit"
        return 0
    fi
    
    git commit -m "$commit_message"
    print_success "Changes committed"
    
    print_status "Pushing to GitHub..."
    if git push origin main; then
        print_success "Successfully pushed to GitHub"
    else
        print_error "Failed to push to GitHub"
        exit 1
    fi
}

# Function to show deployment status
show_deployment_status() {
    print_status "Deployment Status:"
    echo "  - GitHub Pages: https://keshavvyas.github.io"
    echo "  - Repository: https://github.com/keshavvyas/keshavvyas.github.io"
    echo ""
    print_success "Your portfolio should be updated in a few minutes!"
    echo ""
    echo "Next steps:"
    echo "  1. Visit https://keshavvyas.github.io to see your changes"
    echo "  2. Test all sections (Projects, Experience, Contact)"
    echo "  3. Check mobile responsiveness"
    echo "  4. Verify all links work correctly"
}

# Main execution
main() {
    echo "🚀 Portfolio Update Script"
    echo "=========================="
    echo ""
    
    local commit_message="$1"
    
    # Validate JSON files
    validate_json_files
    echo ""
    
    # Check for new files
    check_new_files
    echo ""
    
    # Update script.js if needed
    update_script_files
    echo ""
    
    # Build and test
    build_and_test
    echo ""
    
    # Check git status
    if check_git_status; then
        print_warning "No changes detected. Nothing to commit."
        show_deployment_status
        exit 0
    fi
    echo ""
    
    # Commit and push
    commit_and_push "$commit_message"
    echo ""
    
    # Show deployment status
    show_deployment_status
}

# Help function
show_help() {
    echo "Portfolio Update Script"
    echo ""
    echo "Usage: ./update.sh [commit_message]"
    echo ""
    echo "This script will:"
    echo "  1. Validate all JSON files"
    echo "  2. Check for new project/experience files"
    echo "  3. Verify script.js references"
    echo "  4. Build and test the website"
    echo "  5. Commit and push changes to GitHub"
    echo "  6. Show deployment status"
    echo ""
    echo "Examples:"
    echo "  ./update.sh"
    echo "  ./update.sh \"Add new project and update experience\""
    echo ""
    echo "Prerequisites:"
    echo "  - Git repository initialized"
    echo "  - GitHub remote configured"
    echo "  - jq (optional, for JSON validation)"
    echo "  - linkchecker (optional, for link validation)"
}

# Check for help flag
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_help
    exit 0
fi

# Run main function
main "$1"
