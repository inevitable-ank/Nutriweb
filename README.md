# 🌿 Nutri - AI-Powered Nutrition Analysis

<div align="center">

![Nutri Logo](https://img.shields.io/badge/Nutri-AI%20Nutrition-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**Your personal nutrition assistant powered by AI. Photograph any food and get instant insights about calories, nutrients, and health scores.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Design & UI](#-design--ui)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**Nutri** is a modern, AI-powered nutrition analysis platform that helps users make smarter food choices. Built with cutting-edge web technologies, Nutri provides instant nutritional insights through Google Gemini AI, offering a seamless experience across all devices.

### Key Highlights

- 🤖 **AI-Powered Analysis** - Powered by Google Gemini AI for accurate food identification
- 📱 **Cross-Platform** - Works seamlessly on iOS, Android, and web
- 🔒 **Privacy First** - Your data stays on your device
- ⚡ **Lightning Fast** - Instant results with optimized performance
- 🎨 **Modern UI** - Beautiful 3D effects and smooth animations
- 📊 **Health Scores** - Get 0-100 health ratings with AI recommendations

---

## ✨ Features

### Core Functionality

- **Multiple Input Methods**
  - Capture photos with camera
  - Upload images
  - Type food names for analysis

- **AI-Powered Analysis**
  - Google Gemini AI identifies foods
  - Detailed nutritional breakdowns
  - Instant calorie and nutrient information

- **History Tracking**
  - Local history of all analyses
  - Monitor nutrition over time
  - Privacy-focused data storage

- **Health Scoring**
  - 0-100 health ratings
  - AI-powered recommendations
  - Better food choice suggestions

### User Experience

- **3D Interactive Elements** - Immersive 3D phone mockup with mouse tracking
- **Smooth Animations** - Floating icons, gradient effects, and transitions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Touch-Friendly** - Optimized interactions for mobile devices
- **Modern Design** - Glassmorphism, gradients, and depth effects

---

## 🛠 Tech Stack

### Core Technologies

- **[Next.js 16.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Libraries

- **[lucide-react](https://lucide.dev/)** - Beautiful icon library
- **[tw-animate-css](https://github.com/nextui-org/tw-animate-css)** - Animation utilities

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast, disk space efficient package manager

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/inevitable-ank/Nutri.git
   cd Nutri/nutri
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

---

## 📁 Project Structure

```
nutri/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md               # This file
```

### Key Files

- **`app/page.tsx`** - Main landing page with all sections
- **`app/globals.css`** - Custom animations and 3D effects
- **`app/layout.tsx`** - Root layout with metadata

---

## 🎨 Design & UI

### Design Principles

- **Modern & Clean** - Minimalist design with focus on content
- **3D Effects** - Interactive 3D transforms for depth
- **Smooth Animations** - Carefully crafted transitions
- **Responsive** - Mobile-first approach
- **Accessible** - Proper contrast and touch targets

### Color Scheme

- **Primary**: Green tones for nutrition/health theme
- **Accent**: Complementary colors for highlights
- **Background**: Light/dark mode support
- **Gradients**: Smooth color transitions

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Performance Optimizations

- **Touch Detection** - 3D effects only on desktop
- **Lazy Animations** - Optimized for mobile devices
- **Efficient Rendering** - CSS transforms for smooth performance
- **Optimized Assets** - Next.js automatic optimization

---

## ⚡ Performance

### Optimizations Implemented

- ✅ **Code Splitting** - Automatic with Next.js
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Font Optimization** - Next.js font optimization
- ✅ **CSS Optimization** - Tailwind CSS purging
- ✅ **Touch Optimization** - Disabled heavy effects on mobile
- ✅ **Animation Performance** - GPU-accelerated transforms

### Lighthouse Scores

The site is optimized for:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

---

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/inevitable-ank/Nutri)

### Other Platforms

**Netlify**
```bash
npm run build
# Deploy the .next folder
```

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

No environment variables required for the landing page. For the full app functionality, you may need:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Test on multiple devices
- Follow existing code style

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful AI capabilities
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For beautiful icons
- **Vercel** - For hosting and deployment

---

## 📞 Contact & Support

- **GitHub**: [@inevitable-ank](https://github.com/inevitable-ank)
- **Repository**: [Nutri on GitHub](https://github.com/inevitable-ank/Nutri)
- **Issues**: [Report an Issue](https://github.com/inevitable-ank/Nutri/issues)

---

<div align="center">

**Made with ❤️ using Next.js, React, and TypeScript**

⭐ Star this repo if you find it helpful!

</div>
