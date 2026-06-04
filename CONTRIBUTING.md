# Contributing to AWS SAA Notes

Thank you for your interest in contributing to this AWS SAA-C03 study notes repository! We welcome contributions from the community to help improve the quality and completeness of these exam preparation materials.

## Ways to Contribute

- 📝 **Improve existing notes** - Fix typos, clarify explanations, add examples
- ✨ **Add new AWS services** - Document services not yet covered
- 🔧 **Enhance functionality** - Improve the site design, search, or navigation
- 🐛 **Report issues** - Found a bug or inaccuracy? Let us know
- 💡 **Suggest improvements** - Have ideas for better organization or content?

## Getting Started

### Prerequisites

- Git and GitHub account
- Node.js (v18 or higher)
- Basic knowledge of Markdown
- Familiarity with AWS services (for content contributions)

### Setup Your Development Environment

1. **Fork the repository**
   - Click the "Fork" button on the GitHub repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/aws-sa-notes.git
   cd aws-sa-notes
   ```

3. **Add upstream remote** (to sync with the main repo)
   ```bash
   git remote add upstream https://github.com/Techikrish/aws-sa-notes.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your changes live

## Contribution Workflow

### For Content Changes

1. **Create a feature branch**
   ```bash
   git checkout -b improve/service-name-or-topic
   ```

2. **Make your changes**
   - Edit or create Markdown files in `docs/`
   - Follow the structure guidelines below
   - Test locally with `npm run dev`

3. **Build and verify**
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit with descriptive messages**
   ```bash
   git add .
   git commit -m "Add: EC2 Advanced Configuration guide" 
   # or
   git commit -m "Fix: Clarify VPC peering limitations"
   # or
   git commit -m "Improve: Add more S3 bucket policy examples"
   ```

5. **Push to your fork**
   ```bash
   git push origin improve/service-name-or-topic
   ```

6. **Create a Pull Request**
   - Go to GitHub and click "Compare & pull request"
   - Provide a clear title and description of your changes
   - Reference any related issues if applicable

### For Code/Design Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feat/feature-name
   ```

2. **Make changes to:**
   - `src/components/` - UI components
   - `src/layouts/` - Page layouts
   - `src/styles/` - CSS styling
   - `astro.config.mjs` - Build configuration

3. **Follow existing patterns and best practices**

4. **Test thoroughly** before submitting

5. **Submit PR** with details about the changes

## Content Guidelines

### Markdown File Structure

When creating new service documentation, use this template:

```markdown
# AWS Service Name

## Overview
Brief description of the service, its purpose, and when to use it for SAA-C03.

## Key Concepts
- **Concept 1**: Definition and relevance
- **Concept 2**: Definition and relevance

## Common Use Cases
1. Use case 1
2. Use case 2
3. Use case 3

## Important Features
- Feature 1 with details
- Feature 2 with details
- Feature 3 with details

## Exam Tips
Key points to remember for the SAA-C03 exam:
- Point 1
- Point 2
- Point 3

## Comparison with Similar Services
| Feature | Service A | Service B |
|---------|-----------|-----------|
| Feature 1 | ✓ | ✗ |
| Feature 2 | ✓ | ✓ |

## Important Limitations
- Limitation 1
- Limitation 2

## Related Services
- [Related Service 1](../related-category/service-1.md)
- [Related Service 2](../related-category/service-2.md)
```

### File Organization

Files are organized by AWS service categories in `docs/`:
```
docs/
├── Compute/
├── Storage/
├── Database/
├── Networking and Content Delivery/
├── Security, Identity, and Compliance/
├── Application Integration/
├── Management and Governance/
├── Analytics/
└── ... (other categories)
```

### Writing Best Practices

1. **Be concise** - Use clear, concise language
2. **Focus on exam-relevant content** - Include SAA-C03 exam tips
3. **Use examples** - Add practical examples where helpful
4. **Add comparisons** - Compare similar services
5. **Highlight important points** - Use bold for key concepts
6. **Include exam tips** - Mark content specifically for exam prep
7. **Use tables** - Organize feature comparisons in tables
8. **Link related content** - Cross-reference related services

### Markdown Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`code snippets`

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](url)

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## Coding Standards

### Astro Components

- Use descriptive component names
- Add JSDoc comments for component props
- Follow existing component patterns
- Ensure responsive design

### CSS

- Use existing utility classes when possible
- Follow BEM naming convention for new classes
- Ensure accessibility (color contrast, etc.)
- Test on mobile and desktop

### TypeScript/JavaScript

- Use meaningful variable names
- Add comments for complex logic
- Follow the existing code style
- No console.log statements in production code

## Testing Your Changes

Before submitting a PR:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Check for broken links** - Review internal links work correctly

4. **Test search functionality** - Verify new content is searchable

5. **Test on mobile** - Ensure responsive design works

6. **Spell check** - Review for typos and grammar

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
Add: New feature or content
Fix: Bug fix or typo correction
Improve: Enhancement or optimization
Refactor: Code restructuring
Docs: Documentation changes
Style: Code style changes (formatting, etc.)
```

Example:
```
git commit -m "Add: AWS Lambda advanced patterns and best practices"
git commit -m "Fix: Correct S3 replication configuration details"
git commit -m "Improve: Enhance VPC routing table documentation"
```

## Pull Request Process

1. **Keep PRs focused** - One feature or fix per PR
2. **Write clear descriptions** - Explain what and why
3. **Reference issues** - Link related GitHub issues
4. **Be responsive** - Respond to review feedback
5. **Keep updated** - Sync with main before submitting

## Review Process

PRs will be reviewed for:
- ✅ Content accuracy
- ✅ Alignment with exam objectives
- ✅ Code quality and style
- ✅ Proper formatting and structure
- ✅ No broken links or formatting

Reviewers may request changes or improvements before merging.

## Questions or Need Help?

- 📖 Check existing documentation
- 🔍 Search GitHub issues for similar questions
- 💬 Open a GitHub discussion
- 🐛 Report bugs as GitHub issues

## Code of Conduct

- Be respectful and constructive
- Provide constructive feedback
- Welcome diverse perspectives
- No harassment or discriminatory behavior
- Focus on the quality of ideas, not the person

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to make AWS SAA exam preparation better for everyone! 🙏
