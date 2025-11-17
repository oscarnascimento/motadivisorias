# FlyonUI + Astro — Restaurant Landing Page

A modern, responsive business landing page built with [Astro](https://astro.build/) and [FlyonUI](https://flyonui.com/), a free Tailwind CSS component library.

This project showcases a complete business website with sections for hero, about us, services, team, testimonials, FAQ, contact, and call-to-action components.

## ✨ Features

- 🚀 **Built with Astro 5** - Fast, modern static site generation
- 🎨 **FlyonUI Components** - Beautiful, ready-to-use Tailwind CSS components
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Theme Customizer** - Built-in theme customization options
- ⚡ **Optimized Performance** - Fast page loads and excellent SEO
- 🔧 **TypeScript Support** - Type-safe configuration and development
- 💅 **Prettier Integration** - Automatic code formatting with Tailwind class sorting
- 🌙 **Tailwind CSS 4** - Latest Tailwind with modern features

## 🏗️ Project Structure

```text
astro-free-landing/
├── public/
│   └── assets/
│       └── img/              # Images and favicon
├── src/
│   ├── components/           # Astro components
│   │   ├── about-us.astro
│   │   ├── hero.astro
│   │   ├── navbar.astro
│   │   ├── footer.astro
│   │   ├── services.astro
│   │   ├── team.astro
│   │   ├── testimonial-main.astro
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── cta.astro
│   │   └── shared/           # Reusable components
│   ├── layouts/
│   │   └── layout.astro      # Base layout
│   ├── pages/
│   │   └── index.astro       # Landing page
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript types
│   ├── utils/                # Utility functions
│   └── config.ts             # Site configuration
├── astro.config.mjs          # Astro configuration
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18, 20, or 22+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:4321`

3. **Build for production:**

   ```bash
   pnpm run build
   ```

   The built site will be in the `dist/` folder with relative asset paths for easy deployment.

4. **Preview the production build:**

   ```bash
   pnpm run preview
   ```

## 🧞 Available Commands

All commands are run from the root of the project:

| Command                   | Action                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `pnpm install`            | Installs dependencies                                       |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`                 |
| `pnpm run build`          | Build production site with type-checking and relative paths |
| `pnpm run build:production` | Production build (with NODE_ENV=production)              |
| `pnpm run build:preview`  | Build for preview mode                                      |
| `pnpm run preview`        | Build and preview production site locally                   |
| `pnpm run format`         | Format all files with Prettier                              |
| `pnpm run format:check`   | Check if files are formatted correctly                      |
| `pnpm run astro ...`      | Run Astro CLI commands                                      |

## 🎨 Code Formatting

This project uses **Prettier** for code formatting with the following features:

- **Automatic formatting on save** in VS Code
- **Tailwind CSS class sorting** - Classes are automatically sorted in the recommended order
- **Extra space removal** - Trailing whitespace and extra spaces are removed
- **Consistent code style** - Enforced across all `.astro`, `.js`, `.ts`, `.html`, `.css`, and `.json` files

### Setup

1. **Install recommended VS Code extensions** (you'll be prompted when opening the project):
   - Prettier - Code formatter
   - Astro
   - Tailwind CSS IntelliSense
   - EditorConfig for VS Code

2. **Formatting will work automatically** on save thanks to:
   - `.prettierrc` - Prettier configuration
   - `.editorconfig` - Editor settings
   - `.vscode/settings.json` - VS Code workspace settings

3. **Manual formatting:**

   ```bash
   pnpm run format        # Format all files
   pnpm run format:check  # Check formatting without changing files
   ```

### Prettier Configuration

The project is configured with:

- **Print width**: 100 characters
- **Tab width**: 2 spaces
- **Single quotes** for strings
- **No semicolons**
- **LF line endings** (Unix style)
- **Tailwind CSS class sorting** enabled automatically

## ⚙️ Configuration

Edit `src/config.ts` to customize your site:

```typescript
export const siteConfig = {
  creatorName: 'FlyonUI',
  demoName: 'Restaurant',
  templateName: 'Restaurant Landing Page',
  // ... more settings
};
```

## 📦 Dependencies

### Main Dependencies

- **Astro 5.5+** - Static site generator
- **FlyonUI 2.4+** - Tailwind CSS component library
- **Tailwind CSS 4.1+** - Utility-first CSS framework
- **TypeScript 5.9+** - Type safety

### Key Plugins

- **@iconify/tailwind4** - Icon system
- **tailwindcss-motion** - Animation utilities
- **tailwindcss-intersect** - Intersection observer utilities
- **prettier-plugin-tailwindcss** - Automatic class sorting

## 🌐 Deployment

The production build creates static files with relative asset paths, making it easy to deploy to:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static hosting service**

Simply upload the contents of the `dist/` folder after running `pnpm run build`.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [FlyonUI Documentation](https://flyonui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Support

- [FlyonUI Support](https://flyonui.com/support)
- [Discord Community](https://discord.com/invite/kBHkY7DekX)
- [GitHub Issues](https://github.com/themeselection/flyonui)

## 📄 License

This project is licensed under the MIT License. See the [FlyonUI License](https://flyonui.com/license/) for more details.

## 🔗 Links

- [FlyonUI Website](https://flyonui.com)
- [More Templates](https://flyonui.com/templates)
- [Twitter](https://x.com/flyonui)
- [GitHub](https://github.com/themeselection/flyonui)
