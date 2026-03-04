# Quick Customization Guide

A fast reference for updating your portfolio with your own information.

## 🎯 Essential Updates (5-10 minutes)

### 1. Your Name & Title
**File**: `components/sections/hero.tsx` (Line 23-25)
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
  Hi, I'm <span className="text-accent">YOUR NAME HERE</span>
</h1>
<p className="text-xl sm:text-2xl text-muted-foreground font-medium">
  YOUR JOB TITLE HERE
</p>
```

### 2. Professional Summary
**File**: `components/sections/hero.tsx` (Line 30-32)
```tsx
<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
  YOUR 2-3 SENTENCE PROFESSIONAL SUMMARY HERE
</p>
```

### 3. Skills
**File**: `components/sections/about.tsx` (Line 7-8)
```typescript
const skills = ['SKILL1', 'SKILL2', 'SKILL3', 'SKILL4', 'SKILL5', 'SKILL6']
```

### 4. Add Your Resume
1. Create your resume as PDF
2. Save as `resume.pdf`
3. Place in `/public` folder

---

## 🚀 Important Updates (10-20 minutes)

### 5. About Me Section
**File**: `components/sections/about.tsx` (Line 14-19)
```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  YOUR ABOUT PARAGRAPH 1 (3-4 sentences about yourself)
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  YOUR ABOUT PARAGRAPH 2 (3-4 sentences about your background)
</p>
```

### 6. Statistics
**File**: `components/sections/about.tsx` (Line 38-49)
Update the numbers and labels:
```tsx
<div className="text-3xl font-bold text-accent mb-2">5+</div>
<p className="text-muted-foreground">YOUR LABEL 1</p>
```

### 7. Add Your Projects
**File**: `components/sections/projects.tsx` (Line 5-24)
```typescript
const projects = [
  {
    title: 'Your Project 1',
    description: 'What does this project do?',
    technologies: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
  },
  // ... repeat for each project (3-4 recommended)
]
```

### 8. Experience Section
**File**: `components/sections/resume.tsx` (Line 25-45)
Update job titles, companies, and dates:
```tsx
<CardTitle className="text-lg text-accent">Your Job Title</CardTitle>
<CardDescription>Your Company | 2022 - Present</CardDescription>
<CardContent className="space-y-2 text-muted-foreground">
  <p>• Achievement 1</p>
  <p>• Achievement 2</p>
  <p>• Achievement 3</p>
</CardContent>
```

### 9. Contact Information
**File**: `components/sections/contact.tsx` (Line 58-75)
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/YOUR_USERNAME',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/YOUR_PROFILE',
  },
  // ... update other links
]
```

Also update:
**File**: `components/sections/contact.tsx` (Line 174)
```tsx
<p>your.email@example.com</p>
```

### 10. Page Metadata
**File**: `app/layout.tsx` (Line 10-11)
```typescript
title: 'YOUR NAME - Software Developer',
description: 'YOUR PROFESSIONAL SUMMARY for SEO',
```

---

## 🎨 Optional: Theme Colors

To change the accent color (blue/purple), edit **`app/globals.css`**:

Replace accent color values:
```css
:root {
  --accent: oklch(0.65 0.185 251); /* Change this */
}

.dark {
  --accent: oklch(0.65 0.185 251); /* And this */
}
```

Color values (OKLch format):
- Blue: `oklch(0.65 0.185 251)` ← Current
- Purple: `oklch(0.60 0.18 310)`
- Green: `oklch(0.70 0.20 160)`
- Orange: `oklch(0.68 0.20 60)`

---

## 📋 Checklist

Use this to track your updates:

- [ ] Update name and title in hero section
- [ ] Update professional summary in hero
- [ ] Update skills list
- [ ] Write your about me section
- [ ] Add your projects (minimum 3)
- [ ] Update experience/education
- [ ] Add your resume PDF
- [ ] Update social media links
- [ ] Update email and contact info
- [ ] Update page title and description
- [ ] Test all links work
- [ ] Check responsive design on mobile
- [ ] Deploy to Vercel

---

## 🔗 Where to Find Things

| Component | File | Lines |
|-----------|------|-------|
| Hero Section | `components/sections/hero.tsx` | 1-80 |
| About & Skills | `components/sections/about.tsx` | 1-60 |
| Projects | `components/sections/projects.tsx` | 1-105 |
| Resume & Experience | `components/sections/resume.tsx` | 1-120 |
| Contact Form | `components/sections/contact.tsx` | 1-200 |
| Footer | `components/sections/footer.tsx` | 1-30 |
| Page Meta | `app/layout.tsx` | 10-11 |
| Theme Colors | `app/globals.css` | 1-80 |

---

## 💾 Saving Changes

All changes are automatically saved. The preview updates instantly!

## 🚢 Deploying

When ready, click **"Publish"** button to deploy your portfolio to Vercel.

---

**That's it! Your professional portfolio is ready to customize.** 🎉
