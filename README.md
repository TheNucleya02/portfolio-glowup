# Aman's Modern Portfolio

A cutting-edge, production-ready portfolio website that redefines personal branding for developers and tech professionals. Built with modern web technologies and designed with meticulous attention to detail.

🌐 **Live Link**: [https://lovable.dev/projects/9f9aff1a-72b4-4f7f-9a03-bd1afb2eed12
](https://shiny-portfolio-glow-up.lovable.app)
---

## 🌟 Features

### Interactive Design
- **Animated Storytelling**: Carefully crafted animations and transitions
- **Dynamic Theme Switching**: Seamless light and dark mode transitions
- **Responsive Design**: Beautiful adaptation from mobile to desktop
- **Modern Aesthetics**: Meticulous attention to detail and user experience

### Technical Excellence
- **React 18 with TypeScript**: Type-safe, component-based architecture
- **Vite**: Lightning-fast build tool and development server
- **Modern CSS Architecture**: Tailwind CSS with custom design tokens
- **Component Library**: shadcn/ui for accessibility and consistency
- **Performance Optimized**: Fast loading and smooth interactions

### Professional Showcase
- **Impact-Driven Content**: Showcases measurable achievements and real-world impact
- **Interactive Project Cards**: GitHub links and detailed project breakdowns
- **Certification Display**: Professional certifications and technical expertise
- **Contact Integration**: Professional contact information and social links

### User Experience
- **Smooth Navigation**: Scroll-based navigation with intuitive menu
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized assets and lazy loading

---

## 🛠️ Built With

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Components** | shadcn/ui |
| **Icons** | Lucide React |
| **Theme** | next-themes |
| **Router** | React Router v6 |
| **State Management** | TanStack Query |
| **Deployment** | Lovable Platform |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable shadcn/ui components
│   │   ├── Navigation.tsx   # Header navigation with theme toggle
│   │   ├── Hero.tsx         # Hero section with typing animation
│   │   ├── About.tsx        # About section with bio
│   │   ├── Projects.tsx     # Project showcase cards
│   │   ├── Skills.tsx       # Technical skills display
│   │   ├── Certifications.tsx # Certifications and achievements
│   │   ├── Contact.tsx      # Contact form and social links
│   │   ├── Footer.tsx       # Footer component
│   │   └── ThemeProvider.tsx # Theme context provider
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx     # 404 error page
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── assets/              # Static images and media
│   ├── index.css            # Global styles and CSS variables
│   ├── App.tsx              # Root application component
│   └── main.tsx             # Application entry point
├── public/                  # Static public assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Custom gradient with HSL variables
- **Secondary**: Neutral grays with proper contrast ratios
- **Accent Colors**: Category-specific theme colors
- **Background**: Adaptive light/dark mode support

### Typography
- **Font Stack**: System fonts for optimal performance
- **Hierarchy**: Consistent sizing with proper line heights
- **Weights**: Regular, medium, semibold, bold

### Spacing
- **System**: Tailwind's spacing scale for consistency
- **Layout**: Responsive grid system with proper breakpoints
- **Containers**: Max-width containers for optimal readability

---

## 🔧 Customization

### Personal Information

Update the following components with your information:

1. **`src/components/Hero.tsx`** - Name, tagline, and call-to-action
2. **`src/components/About.tsx`** - Personal bio and technical interests
3. **`src/components/Projects.tsx`** - Project showcase and GitHub links
4. **`src/components/Skills.tsx`** - Technical skills and frameworks
5. **`src/components/Certifications.tsx`** - Professional certifications
6. **`src/components/Contact.tsx`** - Contact form and social media links

### Styling

- **Global Styles**: Modify `src/index.css` for CSS variables and theme colors
- **Tailwind Config**: Update `tailwind.config.ts` for design tokens and animations
- **Component Styles**: Customize individual component styles using Tailwind classes

### Content

- Replace images in `src/assets/` with your own
- Update social media links in Contact component
- Modify project descriptions and technologies
- Add your resume link

---

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile** (< 768px): Optimized for touch interactions and compact layout
- **Tablet** (768px - 1024px): Balanced layout with improved spacing
- **Desktop** (> 1024px): Full-featured experience with enhanced visuals

---

## ⚡ Performance

- **Fast Build Times**: Vite's lightning-fast HMR and build optimization
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Assets**: Compressed images and lazy loading
- **Type Safety**: Full TypeScript support for reliability

---

## 🌐 Deployment

### Lovable Platform (Recommended)

1. Open your [Lovable Project](https://lovable.dev/projects/9f9aff1a-72b4-4f7f-9a03-bd1afb2eed12)
2. Click **Share → Publish**
3. Your site will be live with automatic HTTPS

### Custom Domain

1. Navigate to **Project > Settings > Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration steps

Learn more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

### Alternative Hosting

The project can be deployed to any static hosting platform:

- **Vercel**: `npm run build` + deploy `dist/`
- **Netlify**: Connect repository with build command `npm run build`
- **GitHub Pages**: Use GitHub Actions to build and deploy

---

## 🤝 Use Cases

This portfolio template can be adapted for:

- **Software Engineers** building their personal brand
- **Freelancers** showcasing their work
- **Students** displaying academic projects
- **Tech Professionals** highlighting expertise
- **Job Seekers** creating a compelling online presence

---

## 🎯 Key Highlights

✅ **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS  
✅ **Dark Mode Support**: Seamless theme switching with persistence  
✅ **Fully Responsive**: Mobile-first design approach  
✅ **Type-Safe**: Full TypeScript coverage  
✅ **Component Library**: Pre-built shadcn/ui components  
✅ **Performance Optimized**: Fast loading and smooth animations  
✅ **SEO Ready**: Semantic HTML and meta tags  
✅ **Accessible**: ARIA labels and keyboard navigation  

---

## 📝 Development with Lovable

### Using Lovable AI
Simply visit the [Lovable Project](https://lovable.dev/projects/9f9aff1a-72b4-4f7f-9a03-bd1afb2eed12) and start prompting to make changes. All modifications are automatically committed.

### Using Your IDE
Clone the repository and push changes. Changes pushed to GitHub will sync to Lovable automatically.

### GitHub Integration
Connect to GitHub via **Project Settings** for:
- Automatic version control
- Collaboration support
- CI/CD integration
- Branch management

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful, accessible component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the comprehensive icon set
- **Vite** for the blazing-fast build tool
- **Lovable** for the seamless development and deployment platform

---

**Built with ❤️ using modern web technologies**

*Powered by [Lovable](https://lovable.dev) - The AI-powered web development platform*
