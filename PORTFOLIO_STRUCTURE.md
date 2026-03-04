# Portfolio Structure & Page Flow

## 📊 Visual Site Map

```
┌─────────────────────────────────────────────────────────────────┐
│                     MATHEWS ONIALA PORTFOLIO                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │           HERO SECTION (Hero Banner)                    │    │
│  │  • Large heading: "Hi, I'm Mathews Oniala"              │    │
│  │  • Subheading: "Software Developer"                     │    │
│  │  • Professional summary (2-3 lines)                     │    │
│  │  • CTA Buttons:                                         │    │
│  │    - "View Projects" (scrolls to projects)              │    │
│  │    - "Download Resume" (downloads PDF)                  │    │
│  │  • Animated scroll indicator                            │    │
│  │  • Background gradient effects                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │           ABOUT SECTION (About Me)                      │    │
│  │  • Title: "About Me"                                    │    │
│  │  • Professional bio paragraph                           │    │
│  │  • Additional background paragraph                      │    │
│  │  • Subheading: "Skills & Technologies"                  │    │
│  │  • 6 skill badges (React, Next.js, JS, Python, etc)    │    │
│  │  • 3 Statistics cards:                                  │    │
│  │    - Years of Experience (5+)                           │    │
│  │    - Projects Completed (20+)                           │    │
│  │    - Client Satisfaction (100%)                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │      PROJECTS SECTION (Featured Projects)               │    │
│  │  • Title: "Featured Projects"                           │    │
│  │  • Grid of 4 project cards (2 columns on desktop)       │    │
│  │  • Each card contains:                                  │    │
│  │    - Project title                                      │    │
│  │    - Project description                                │    │
│  │    - Technology stack badges                            │    │
│  │    - "Code" button (GitHub link)                        │    │
│  │    - "Demo" button (Live demo link)                     │    │
│  │    - Hover effects & transitions                        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │         RESUME SECTION (Resume & Experience)            │    │
│  │  • Title: "Resume"                                      │    │
│  │  • 2-Column layout on desktop:                          │    │
│  │    Left side (2/3 width):                               │    │
│  │      - "Experience" heading                             │    │
│  │      - Job 1 card (Senior Dev, 2022-Present)           │    │
│  │      - Job 2 card (Full Stack Dev, 2020-2022)          │    │
│  │      - "Education" heading                              │    │
│  │      - Degree card (B.S. Computer Science)              │    │
│  │    Right side (1/3 width):                              │    │
│  │      - Resume Download Card (sticky)                    │    │
│  │      - Download PDF button                              │    │
│  │      - View Preview button                              │    │
│  │      - Preview area (if enabled)                        │    │
│  │  • Responsive: Stacked on mobile                        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │        CONTACT SECTION (Get In Touch)                   │    │
│  │  • Title: "Get In Touch"                                │    │
│  │  • 2-Column layout on desktop:                          │    │
│  │    Left side - Contact Form:                            │    │
│  │      - Name input                                       │    │
│  │      - Email input                                      │    │
│  │      - Message textarea                                 │    │
│  │      - Send Message button                              │    │
│  │      - Form validation                                  │    │
│  │      - Success/error notifications (toast)              │    │
│  │    Right side - Social & Info:                          │    │
│  │      - Social Links Card:                               │    │
│  │        • GitHub link                                    │    │
│  │        • LinkedIn link                                  │    │
│  │        • Twitter link                                   │    │
│  │        • Email link                                     │    │
│  │      - Quick Contact Info Card:                         │    │
│  │        • Email address                                  │    │
│  │        • Location (remote available)                    │    │
│  │        • Response time (24 hours)                       │    │
│  │  • Responsive: Stacked on mobile                        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              FOOTER (Copyright & Links)                 │    │
│  │  • Copyright: © 2026 Mathews Oniala. All rights reserved│    │
│  │  • Links: Privacy | Terms | Sitemap                     │    │
│  │  • Subtle styling matching dark theme                   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```
┌──────────────┐
│   HERO       │ → Full screen, stacked layout
├──────────────┤
│   ABOUT      │ → Single column skills
├──────────────┤
│  PROJECTS    │ → 1 project per row
├──────────────┤
│   RESUME     │ → Stacked: experience, sidebar
├──────────────┤
│  CONTACT     │ → Form on top, socials below
├──────────────┤
│   FOOTER     │ → Stacked links
└──────────────┘
```

### Tablet (640px - 1024px)
```
┌────────────────────────┐
│        HERO            │ → Adjusted font sizes
├────────────────────────┤
│       ABOUT            │ → Single column, full width
├────────────────────────┤
│     PROJECTS           │ → 2 columns
│  [P1]  [P2]            │
│  [P3]  [P4]            │
├────────────────────────┤
│   RESUME               │ → Mostly stacked
│ Experience | Sidebar   │
├────────────────────────┤
│ CONTACT                │ → Form | Social
│ Form | Social          │
├────────────────────────┤
│       FOOTER           │ → Single row
└────────────────────────┘
```

### Desktop (> 1024px)
```
┌────────────────────────────────────┐
│            HERO (Full Width)       │ → Large bold fonts
├────────────────────────────────────┤
│        ABOUT (Full Width)          │ → Stats in 3 columns
├────────────────────────────────────┤
│      PROJECTS (Full Width)         │ → 2-column grid
│  [P1]              [P2]            │
│  [P3]              [P4]            │
├────────────────────────────────────┤
│          RESUME (2-Column)         │ → Sticky sidebar
│ Experience (2/3) | Sidebar (1/3)   │
├────────────────────────────────────┤
│         CONTACT (2-Column)         │ → Form | Social
│ Form (1/2)         | Social (1/2)  │
├────────────────────────────────────┤
│            FOOTER                  │ → Spread layout
└────────────────────────────────────┘
```

## 🎨 Component Hierarchy

```
app/page.tsx (Main)
├── HeroSection
│   ├── Button (View Projects)
│   └── Button (Download Resume)
│
├── AboutSection
│   ├── Badge (Skills)
│   └── Stat Cards
│
├── ProjectsSection
│   └── ProjectCard (repeated)
│       ├── Badge (Tech)
│       ├── Button (GitHub)
│       └── Button (Demo)
│
├── ResumeSection
│   ├── ExperienceCard (repeated)
│   ├── EducationCard
│   └── ResumeDownloadCard
│
├── ContactSection
│   ├── ContactForm
│   │   ├── Input (Name)
│   │   ├── Input (Email)
│   │   └── Textarea (Message)
│   └── SocialLinks
│       └── SocialLink (repeated)
│
└── Footer
```

## 🔄 User Flow

```
User lands on page
    ↓
[HERO] Sees name, title, summary
    ↓ (scroll down or click "View Projects")
[ABOUT] Reads about, sees skills & stats
    ↓ (scroll down)
[PROJECTS] Views featured work
    ↓ (may click GitHub/Demo)
    ├→ (External GitHub link opens)
    └→ (External demo link opens)
    ↓ (scroll down)
[RESUME] Sees experience & education
    ↓ (may click download or preview)
    ├→ (Downloads resume.pdf)
    └→ (Shows preview if enabled)
    ↓ (scroll down)
[CONTACT] Explores ways to get in touch
    ├→ (Fills out contact form)
    ├→ (Clicks social media links)
    └→ (Sees contact info)
    ↓ (scroll down)
[FOOTER] Sees copyright & additional links
```

## 📊 Data Structure Examples

### Projects Array
```typescript
const projects = [
  {
    title: string,           // Project name
    description: string,     // What it does
    technologies: string[],  // Tech stack array
    github: string,          // GitHub repo URL
    demo: string,            // Live demo URL
  },
  // ... more projects
]
```

### Experience Object
```typescript
// In resume section
{
  jobTitle: string,         // Job title
  company: string,          // Company name
  dates: string,            // "2022 - Present"
  achievements: string[],   // Array of achievements
}
```

### Social Links
```typescript
const socialLinks = [
  {
    name: string,           // "GitHub", "LinkedIn", etc
    icon: IconComponent,    // Lucide icon
    url: string,            // Link URL
  },
  // ... more links
]
```

## 🎯 Key Sections & Their Purposes

| Section | Purpose | Key Data |
|---------|---------|----------|
| **Hero** | First impression, motivation to explore | Name, title, CTA |
| **About** | Build credibility, show capabilities | Bio, skills, stats |
| **Projects** | Prove you can deliver | Real project examples |
| **Resume** | Document experience & education | Jobs, education, dates |
| **Contact** | Enable outreach | Form, socials, email |
| **Footer** | Professionalism, navigation | Copyright, links |

## 🎨 Color Zones

```
Dark Background (Entire page)
├── Hero Section
│   ├── Text: White/Off-white
│   ├── Accent: Blue/Purple
│   └── Background: Dark + gradients
├── About Section
│   ├── Cards: Slightly lighter dark
│   ├── Badges: Accent color
│   └── Text: White/Gray
├── Projects Section
│   ├── Cards: Dark with borders
│   ├── Buttons: Accent color
│   └── Hover: Subtle accent
├── Resume Section
│   ├── Cards: Lighter dark
│   ├── Titles: Accent color
│   └── Text: White/Gray
├── Contact Section
│   ├── Form: Dark inputs
│   ├── Buttons: Accent
│   └── Links: Hover accent
└── Footer
    ├── Background: Card color
    └── Text: Gray/White
```

## 📈 Performance Characteristics

- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 90+ (target)

---

**This structure ensures:**
✅ Clear visual hierarchy  
✅ Intuitive navigation  
✅ Professional presentation  
✅ Responsive on all devices  
✅ Accessible to all users  
✅ Fast loading and performance
