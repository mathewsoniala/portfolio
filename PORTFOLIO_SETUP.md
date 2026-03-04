# Mathews Oniala - Professional Portfolio

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features a dark theme with smooth animations and a professional design optimized for software developers.

## 🎨 Features

- **Hero Section**: Eye-catching introduction with CTA buttons
- **About Section**: Professional summary with skills showcase and statistics
- **Projects Section**: Featured project cards with descriptions, tech stacks, and links
- **Resume Section**: Professional resume display with download functionality
- **Contact Section**: Contact form with social media links
- **Dark Theme**: Modern dark mode with subtle blue/purple accent colors
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll animations and hover effects
- **SEO Optimized**: Proper metadata and semantic HTML

## 📁 Project Structure

```
components/
  └── sections/          # All page sections
      ├── hero.tsx       # Hero/Landing section
      ├── about.tsx      # About me section
      ├── projects.tsx   # Projects showcase
      ├── resume.tsx     # Resume section
      ├── contact.tsx    # Contact form & social links
      └── footer.tsx     # Footer with copyright
  └── ui/                # Pre-built UI components (shadcn/ui)

app/
  ├── layout.tsx         # Root layout with metadata
  ├── page.tsx           # Main page composition
  └── globals.css        # Global styles & theme tokens

public/
  ├── resume.pdf         # Your PDF resume (add this)
  └── hero-bg.jpg        # Hero section background

```

## 🚀 Getting Started

### 1. Installation

The project uses pnpm. Dependencies are automatically installed when you make changes.

### 2. Customization

#### Update Your Information

**Edit `/app/layout.tsx`:**
- Change the `title` to your name
- Update the `description` with your professional summary

**Edit `/components/sections/hero.tsx`:**
- Update heading: "Hi, I'm Mathews Oniala"
- Update subheading: "Software Developer"
- Customize the professional summary text

**Edit `/components/sections/about.tsx`:**
- Update the "About Me" paragraph
- Modify the `skills` array with your technologies
- Adjust the stats (years of experience, projects, etc.)

**Edit `/components/sections/projects.tsx`:**
- Replace the sample projects with your actual projects
- Update project titles, descriptions, and technologies
- Add real GitHub links and demo URLs

**Edit `/components/sections/contact.tsx`:**
- Update social media links (GitHub, LinkedIn, Twitter)
- Change email address to yours
- Update location information

#### Add Your Resume

1. Create your resume as a PDF (using Word, Google Docs, Canva, etc.)
2. Save it as `resume.pdf`
3. Place it in the `/public` folder
4. The download button will automatically work

#### Update Skills

In `/components/sections/about.tsx`, modify the skills array:
```typescript
const skills = ['React', 'Next.js', 'JavaScript', 'Python', 'MySQL', 'Prisma']
```

#### Update Projects

In `/components/sections/projects.tsx`, replace the projects array with your projects:
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of what it does',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  // ... more projects
]
```

## 🎨 Theme Customization

The portfolio uses a dark theme with blue/purple accent colors. The theme is defined in `/app/globals.css` using CSS custom properties.

### Color Tokens

- **Background**: Deep navy/black
- **Foreground**: Off-white/light gray
- **Accent**: Blue/purple (#A78BFA equivalent)
- **Cards**: Slightly lighter background
- **Borders**: Subtle gray tones

### Modifying Colors

Edit the CSS variables in `/app/globals.css`:

```css
:root {
  --accent: oklch(0.65 0.185 251); /* Blue/purple accent */
  /* ... other colors */
}

.dark {
  --accent: oklch(0.65 0.185 251);
  /* ... other dark mode colors */
}
```

## 📱 Responsive Behavior

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px (stacked layout)
- **Tablet**: 640px - 1024px (2-column grids)
- **Desktop**: > 1024px (full layouts)

## 🔧 Technologies Used

- **Next.js 16**: App Router with React Server Components
- **React 19**: Latest React features
- **Tailwind CSS 4**: Utility-first styling
- **shadcn/ui**: Pre-built accessible components
- **Lucide React**: Beautiful icons
- **TypeScript**: Type safety

## 📝 Sections Details

### Hero Section
- Large bold heading with accent color
- Professional tagline
- Two CTA buttons: "View Projects" (smooth scroll) and "Download Resume"
- Animated scroll indicator

### About Me
- Professional bio
- Skill badges with accent styling
- Statistics cards (years, projects, satisfaction)
- Clean card-based layout

### Projects
- Grid of project cards (responsive 1-2 columns)
- Project title, description, and tech stack
- GitHub and Demo buttons for each project
- Hover effects with color transitions

### Resume
- Experience section with job details
- Education section
- Sidebar with download/preview options
- Sticky sidebar on desktop

### Contact
- Email contact form with validation
- Social media links with hover effects
- Quick contact info card
- Form submission feedback via toast notifications

### Footer
- Copyright notice with current year
- Links (Privacy, Terms, Sitemap)
- Subtle styling

## 🎯 Next Steps

1. **Update all personal information** following the customization guide above
2. **Add your resume PDF** to `/public/resume.pdf`
3. **Upload project images** (optional - add to projects section)
4. **Test on mobile** using the preview responsive view
5. **Deploy to Vercel** using the publish button or GitHub

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 💡 Tips

- Keep your skills list focused on 6-8 key technologies
- Include 3-4 of your best projects
- Update your resume PDF regularly
- Test form submissions before deploying
- Customize social media links to your actual profiles

## 🚢 Deployment

Click the "Publish" button in v0 to deploy to Vercel. Your portfolio will be live and accessible globally!

---

**Created with v0** - Build beautiful web apps with AI
