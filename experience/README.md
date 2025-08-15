# Experience Directory

This directory contains all your work experience entries in JSON format. Each experience is stored as a separate JSON file for easy management and updates.

## 📁 File Structure

```
experience/
├── README.md              # This file
├── template.json          # Template for new experience entries
├── software-engineer.json
└── junior-developer.json
```

## 🚀 Adding a New Experience Entry

### Step 1: Copy the Template
```bash
cp template.json your-company-name.json
```

### Step 2: Edit the Experience File
Open your new JSON file and update the following fields:

```json
{
  "title": "Your Job Title",
  "company": "Your Company Name",
  "date": "2023 - Present",
  "description": "Brief description of your role and responsibilities",
  "achievements": [
    "Key achievement or responsibility 1",
    "Key achievement or responsibility 2",
    "Key achievement or responsibility 3"
  ],
  "technologies": ["Technology1", "Technology2", "Technology3"],
  "location": "City, State/Country",
  "type": "full-time",
  "featured": true,
  "companyUrl": "https://company-website.com",
  "logo": "company-logo.png"
}
```

### Step 3: Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Your job title | "Software Engineer" |
| `company` | Company name | "Google" |
| `date` | Employment period | "2022 - Present", "Jan 2022 - Dec 2023", "01/2022 - 12/2023" |
| `description` | Brief role description | "Full-stack developer..." |
| `achievements` | Array of key achievements | `["Built scalable apps", "Led team of 5"]` |
| `technologies` | Technologies used | `["React", "Node.js", "MongoDB"]` |
| `location` | Work location | "San Francisco, CA" |
| `type` | Employment type | "full-time", "part-time", "contract", "internship" |
| `featured` | Show on homepage (true/false) | `true` |
| `companyUrl` | Company website | "https://company.com" |
| `logo` | Company logo filename | "google-logo.png" |

### Step 4: Employment Types
- `full-time` - Full-time employment
- `part-time` - Part-time employment
- `contract` - Contract work
- `internship` - Internship
- `freelance` - Freelance work

### Step 5: Adding Company Logos

1. **Create an `assets/companies/` directory** (if it doesn't exist)
2. **Add company logo** to that directory
3. **Update the `logo` field** in your JSON file to match the filename

Example:
```
assets/companies/
├── google-logo.png
├── microsoft-logo.png
└── your-company-logo.png
```

## 🔄 Updating Existing Experience

Simply edit the JSON file for any experience entry to update its information. The website will automatically reflect the changes.

## 📱 Experience Display

Experience entries are automatically loaded and displayed on your portfolio website in chronological order (newest first).

## 💡 Tips for Writing Experience

1. **Use action verbs** at the beginning of achievements
2. **Quantify achievements** when possible (e.g., "Increased performance by 50%")
3. **Focus on impact** rather than just responsibilities
4. **Keep descriptions concise** but informative
5. **Use relevant technologies** that match the job

### Example Achievement Statements:
- "Led development of a React-based dashboard that improved user engagement by 40%"
- "Collaborated with cross-functional teams to deliver 3 major features ahead of schedule"
- "Optimized database queries resulting in 60% faster page load times"
- "Mentored 2 junior developers and conducted code reviews for team of 8"

## 🔧 Troubleshooting

- **Experience not showing**: Check that `featured` is set to `true`
- **Logo not displaying**: Check the file path in `assets/companies/`
- **JSON errors**: Validate your JSON syntax using a JSON validator
- **Date format**: Use "YYYY - Present" for current jobs, "YYYY - YYYY" for past jobs

## 📅 Date Formats

The system supports various date formats for flexible experience tracking:

### **Supported Formats:**
- `"2022 - Present"` - Current job (year only)
- `"2021 - 2022"` - Past job (year range)
- `"Jan 2022 - Present"` - Current job with month
- `"January 2022 - Dec 2023"` - Full month names
- `"01/2022 - 12/2023"` - Month/Year format
- `"2022-01 - 2023-12"` - ISO-like format
- `"2022.01 - 2023.12"` - Alternative format

### **Sorting Logic:**
- Experience is automatically sorted by end date (newest first)
- "Present" is treated as current date
- Year-only dates are treated as end of year
- Month formats are parsed correctly for accurate sorting

## 📊 Best Practices

1. **Keep it current**: Update experience regularly
2. **Be specific**: Include metrics and specific technologies
3. **Show progression**: Demonstrate career growth
4. **Highlight achievements**: Focus on impact, not just tasks
5. **Use consistent formatting**: Follow the template structure
6. **Use detailed dates**: Include months for more precise timeline
