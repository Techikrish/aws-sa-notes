# AWS SAA Study Notes

Welcome to a comprehensive collection of **AWS Certified Solutions Architect – Associate (SAA-C03)** exam study notes built with **Astro**. This site provides detailed, well-organized notes covering all AWS services required for the certification exam.

🌐 **[View the Site](https://techikrish.github.io/aws-sa-notes/)**

## About This Project

This is a modern, fast, and searchable documentation site for AWS SAA-C03 exam preparation. The notes are organized by AWS service categories and include:

- ✅ **Comprehensive Coverage**: All major AWS services relevant to the SAA-C03 exam
- 🔍 **Full-Text Search**: Powered by Pagefind for instant content discovery
- ⚡ **Built with Astro**: Fast static site generation with minimal bundle size
- 📱 **Responsive Design**: Optimized for desktop and mobile viewing
- 🎯 **Exam-Focused**: Content aligned with AWS certification exam domains

## Features

- **Organized Categories**: Services grouped by AWS service domains (Compute, Storage, Database, Networking, Security, etc.)
- **Interactive Search**: Full-text search across all documentation
- **Table of Contents**: Easy navigation within each document
- **GitHub Pages Hosting**: Automatically deployed and always up-to-date
- **Contribution-Ready**: Open for community contributions and improvements

## Content Coverage

The notes cover all five exam domains:
1. **Secure Architectures** - Identity, encryption, compliance
2. **Resilient Architectures** - High availability, disaster recovery
3. **High-Performing Architectures** - Performance optimization
4. **Cost-Optimized Architectures** - Cost management and optimization
5. **Operational Excellence** - Monitoring, automation, management

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

This starts a local development server at `http://localhost:3000` with hot reload enabled.

### Production Build

```bash
npm run build
npm run preview
```

The build process:
- Reads Markdown files from the `docs/` directory
- Generates static HTML pages
- Creates a Pagefind full-text search index in `dist/pagefind`

### Deployment

The site is automatically deployed to **GitHub Pages** via GitHub Actions on every push to `main`. The deployment workflow:
1. Builds the Astro site
2. Generates the search index
3. Deploys to GitHub Pages

In the repository settings, **GitHub Actions** is configured as the Pages source.

## Project Structure

```
├── docs/                 # Markdown source files organized by category
├── src/
│   ├── components/       # Astro components (Header, Sidebar, SearchModal, etc.)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Dynamic page generation
│   └── styles/           # Global CSS styles
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── package.json          # Dependencies and scripts
```

## Creating New Notes

To add new content:

1. Create a Markdown file in the appropriate `docs/` subdirectory
2. Use standard Markdown syntax with proper frontmatter
3. Submit a pull request (see [CONTRIBUTING.md](CONTRIBUTING.md))

## How These Notes Were Created

- **AWS Documentation**: Official sources for technical accuracy
- **SAA-C03 Exam Guide**: Content aligns with exam requirements
- **AI Assistance**: Created with Claude Sonnet 3.7, Gemini 2.5, and Grok 3
- **Community Contributions**: Welcomed and appreciated

## License

This project is open source and available for educational purposes. See LICENSE for details.

## Contributing

Contributions are welcome! Whether you want to:
- Fix typos or improve existing notes
- Add new AWS service documentation
- Enhance the site design or functionality
- Report issues

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and steps to contribute.

## Support

If you find these notes helpful, please star ⭐ this repository and share it with others preparing for the AWS SAA certification!
