# Missing Images Reference

This document lists all missing images referenced in the codebase that need to be generated or provided.

## Overview

The portfolio site references several images that are currently missing. This document provides specifications and generation prompts for each image.

---

## 1. SEO/Open Graph Images

### 1.1 Default OG Image
- **File Path**: `/public/og-image.png`
- **Referenced In**: `src/components/seo/SEO.tsx:24` (default value)
- **Dimensions**: 1200x630px (standard OG image size)
- **Format**: PNG or JPG
- **Purpose**: Default Open Graph image for social media sharing when page-specific OG images aren't provided
- **Usage**: Used by all pages that don't specify a custom `ogImage` prop

**Generation Prompt:**
```
Create a professional portfolio website Open Graph image, 1200x630 pixels. 
The image should feature a modern, clean design with a developer/tech theme. 
Include subtle coding elements or tech icons. Use a dark theme with accent colors. 
The image should be suitable for social media sharing and represent a professional developer portfolio.
Style: Modern, minimalist, professional, tech-focused, dark theme with vibrant accents.
```

**Alternative Prompt (More Specific):**
```
Design a 1200x630px Open Graph image for a developer portfolio website. 
Background: Dark gradient (dark blue to dark purple). 
Foreground: Abstract code brackets or terminal elements in subtle glow. 
Center: Professional developer workspace silhouette or abstract tech shapes. 
Color scheme: Dark background with cyan/blue accent colors. 
Style: Modern, clean, professional, suitable for LinkedIn/Twitter sharing.
```

---

## 2. Hero Section Image

### 2.1 Landing Page Hero Image
- **File Path**: `/public/hero-image.jpg` (or `.png`, `.webp`)
- **Referenced In**: `src/components/sections/HeroSection.tsx:13` (accepts `image` prop)
- **Current Status**: `LandingPage.tsx` doesn't pass an `image` prop to `HeroSection`
- **Dimensions**: 800x800px to 1200x1200px (square or slightly rectangular)
- **Format**: JPG, PNG, or WebP (WebP recommended for performance)
- **Purpose**: Hero image displayed alongside the hero text on the landing page

**Generation Prompt:**
```
Create a professional developer hero image, 1000x1000 pixels. 
The image should show a modern developer workspace, coding setup, or abstract tech visualization. 
Style: Clean, professional, modern. Include elements like:
- Laptop/desktop with code editor
- Subtle code snippets or terminal
- Modern workspace aesthetic
- Dark theme with accent lighting
- Professional, approachable tone
Color scheme: Dark background with warm or cool accent lighting.
Avoid: Cluttered scenes, overly technical jargon, distracting elements.
```

**Alternative Prompt (Abstract Style):**
```
Design an abstract, modern hero image for a developer portfolio, 1000x1000px.
Style: Minimalist, geometric shapes representing code or technology.
Elements: Floating code brackets, abstract network connections, or geometric patterns.
Color: Dark background (charcoal/black) with vibrant accent colors (cyan, blue, or purple).
Mood: Professional, innovative, tech-forward, clean.
```

---

## 3. Project Images

### 3.1 Portfolio Website Project Image
- **File Path**: `/public/projects/portfolio-website.jpg` (or similar)
- **Referenced In**: `src/data/projects.ts` - Project with id "project-1"
- **Current Status**: Project has `image?: string` but no path defined
- **Dimensions**: 1920x1080px (16:9 aspect ratio, standard for project screenshots)
- **Format**: JPG or WebP
- **Purpose**: Project card and detail modal image for "Portfolio Website" project

**Generation Prompt:**
```
Create a project showcase image for a portfolio website project, 1920x1080 pixels.
The image should show a modern, responsive portfolio website design.
Include: Clean layout, hero section, project cards, modern UI elements.
Style: Professional, modern web design, showcasing a portfolio site.
Color scheme: Dark theme with vibrant accent colors.
Show: Responsive design elements, modern typography, clean navigation.
Mood: Professional, polished, modern web development showcase.
```

### 3.2 E-Commerce Platform Project Image
- **File Path**: `/public/projects/ecommerce-platform.jpg` (or similar)
- **Referenced In**: `src/data/projects.ts` - Project with id "project-2"
- **Current Status**: Project has `image?: string` but no path defined
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG or WebP
- **Purpose**: Project card and detail modal image for "E-Commerce Platform" project

**Generation Prompt:**
```
Create a project showcase image for an e-commerce platform project, 1920x1080 pixels.
The image should show a modern e-commerce website interface.
Include: Product grid, shopping cart, checkout flow, modern UI.
Style: Professional e-commerce design, clean product listings.
Color scheme: Modern e-commerce palette (whites, grays, accent colors).
Show: Product cards, shopping interface, modern checkout design.
Mood: Professional, trustworthy, modern online shopping experience.
```

**Note**: After generating images, update `src/data/projects.ts` to include image paths:
```typescript
{
  id: "project-1",
  // ... other fields
  image: "/projects/portfolio-website.jpg",
},
{
  id: "project-2",
  // ... other fields
  image: "/projects/ecommerce-platform.jpg",
}
```

---

## 4. Testimonial Avatars

### 4.1 John Doe Avatar
- **File Path**: `/public/testimonials/john-doe.jpg` (or similar)
- **Referenced In**: `src/data/testimonials.ts` - Testimonial with id "testimonial-1"
- **Current Status**: `avatar?: string` is `undefined`
- **Dimensions**: 200x200px (square, will be displayed as 48x48px circle)
- **Format**: JPG or PNG (PNG recommended for transparency support)
- **Purpose**: Avatar image for testimonial author "John Doe, Senior Developer at Tech Corp"

**Generation Prompt:**
```
Create a professional headshot avatar, 200x200 pixels, square format.
Subject: Professional male developer, friendly and approachable.
Style: Professional headshot, clean background or subtle gradient.
Expression: Friendly, confident, professional smile.
Appearance: Business casual or professional attire.
Background: Neutral or subtle gradient (avoid busy backgrounds).
Mood: Professional, trustworthy, approachable.
Note: Image will be cropped to circle, so keep important elements centered.
```

### 4.2 Jane Smith Avatar
- **File Path**: `/public/testimonials/jane-smith.jpg` (or similar)
- **Referenced In**: `src/data/testimonials.ts` - Testimonial with id "testimonial-2"
- **Current Status**: `avatar?: string` is `undefined`
- **Dimensions**: 200x200px (square)
- **Format**: JPG or PNG
- **Purpose**: Avatar image for testimonial author "Jane Smith, Product Manager at Startup Inc"

**Generation Prompt:**
```
Create a professional headshot avatar, 200x200 pixels, square format.
Subject: Professional female product manager, friendly and confident.
Style: Professional headshot, clean background or subtle gradient.
Expression: Friendly, confident, professional smile.
Appearance: Business casual or professional attire.
Background: Neutral or subtle gradient (avoid busy backgrounds).
Mood: Professional, trustworthy, approachable.
Note: Image will be cropped to circle, so keep important elements centered.
```

### 4.3 Mike Johnson Avatar
- **File Path**: `/public/testimonials/mike-johnson.jpg` (or similar)
- **Referenced In**: `src/data/testimonials.ts` - Testimonial with id "testimonial-3"
- **Current Status**: `avatar?: string` is `undefined`
- **Dimensions**: 200x200px (square)
- **Format**: JPG or PNG
- **Purpose**: Avatar image for testimonial author "Mike Johnson, CTO at Innovation Labs"

**Generation Prompt:**
```
Create a professional headshot avatar, 200x200 pixels, square format.
Subject: Professional male CTO/executive, confident and authoritative.
Style: Professional headshot, clean background or subtle gradient.
Expression: Confident, professional, approachable.
Appearance: Business professional attire.
Background: Neutral or subtle gradient (avoid busy backgrounds).
Mood: Professional, authoritative, trustworthy.
Note: Image will be cropped to circle, so keep important elements centered.
```

**Note**: After generating avatars, update `src/data/testimonials.ts` to include avatar paths:
```typescript
{
  id: "testimonial-1",
  // ... other fields
  avatar: "/testimonials/john-doe.jpg",
},
// ... repeat for other testimonials
```

**Alternative**: If you prefer not to use real person images, consider:
- Abstract avatars with initials
- Icon-based avatars
- Geometric/abstract professional avatars
- AI-generated professional headshots

---

## 5. Resume PDF

### 5.1 Resume PDF Document
- **File Path**: `/public/resume.pdf`
- **Referenced In**: `src/pages/ResumePage.tsx:14` and `src/components/shared/ResumeTimeline.tsx:42`
- **Current Status**: File doesn't exist
- **Format**: PDF
- **Purpose**: Downloadable resume document for visitors

**Note**: This is not an image but a PDF document. You'll need to:
1. Create your professional resume in PDF format
2. Place it in the `/public/` directory as `resume.pdf`
3. Ensure it's optimized for web (reasonable file size, <2MB recommended)

**Resume Content Should Include**:
- Contact information
- Professional summary
- Work experience
- Education
- Skills
- Projects (optional)
- Certifications (optional)

**Tools for Creating Resume PDF**:
- LaTeX (professional, typography-focused)
- Google Docs / Microsoft Word (export as PDF)
- Online resume builders
- Design tools (Figma, Canva) - export as PDF

---

## 6. Favicon

### 6.1 Custom Favicon
- **File Path**: `/public/favicon.ico` or `/public/favicon.svg`
- **Referenced In**: `index.html:5` (currently uses `/vite.svg`)
- **Current Status**: Using default Vite favicon
- **Dimensions**: 
  - ICO: 16x16, 32x32, 48x48 (multi-size)
  - SVG: Scalable vector
- **Format**: ICO or SVG (SVG recommended for modern browsers)
- **Purpose**: Browser tab icon and bookmark icon

**Generation Prompt:**
```
Create a modern favicon for a developer portfolio website.
Style: Minimalist, professional, tech-focused.
Elements: Code brackets, terminal symbol, abstract developer icon, or initials.
Color: Dark background with vibrant accent (cyan, blue, or purple).
Size: Must be recognizable at 16x16 pixels (test at small size).
Format: SVG for scalability, or ICO for multi-size support.
Mood: Professional, modern, tech-forward.
```

**Alternative**: Use a simple monogram or initials in a modern font.

**Note**: After creating favicon, update `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<!-- Or for ICO: -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## Image Optimization Guidelines

### Before Adding Images:

1. **Optimize File Sizes**:
   - Use WebP format when possible (better compression)
   - Compress JPG/PNG images (aim for <200KB per image)
   - Use tools like:
     - [Squoosh](https://squoosh.app/)
     - [TinyPNG](https://tinypng.com/)
     - [ImageOptim](https://imageoptim.com/)

2. **Responsive Images**:
   - Consider providing multiple sizes for different screen densities
   - Use `srcset` for responsive images (if needed)

3. **Lazy Loading**:
   - Most images already use `loading="lazy"` (except hero images)
   - Hero images use `loading="eager"` (correct for above-the-fold content)

4. **Alt Text**:
   - Ensure all images have descriptive alt text (already implemented in components)

5. **File Organization**:
   - Place images in `/public/` directory
   - Organize by type: `/public/projects/`, `/public/testimonials/`, etc.

---

## Summary Checklist

- [ ] Generate `/public/og-image.png` (1200x630px)
- [ ] Generate `/public/hero-image.jpg` (1000x1000px) - Optional, if adding hero image
- [ ] Generate `/public/projects/portfolio-website.jpg` (1920x1080px)
- [ ] Generate `/public/projects/ecommerce-platform.jpg` (1920x1080px)
- [ ] Generate `/public/testimonials/john-doe.jpg` (200x200px)
- [ ] Generate `/public/testimonials/jane-smith.jpg` (200x200px)
- [ ] Generate `/public/testimonials/mike-johnson.jpg` (200x200px)
- [ ] Create `/public/resume.pdf` (PDF document)
- [ ] Generate `/public/favicon.svg` or `/public/favicon.ico` (16x16+)
- [ ] Update `src/data/projects.ts` with image paths
- [ ] Update `src/data/testimonials.ts` with avatar paths
- [ ] Update `src/pages/LandingPage.tsx` to pass hero image (if adding)
- [ ] Update `index.html` with custom favicon (if replacing)
- [ ] Optimize all images for web (compress, WebP when possible)
- [ ] Test images load correctly in development and production builds

---

## Image Generation Tools

### AI Image Generation:
- **Midjourney**: High-quality, artistic images
- **DALL-E 3**: Good for specific prompts
- **Stable Diffusion**: Open-source, customizable
- **Leonardo.ai**: Good for professional images
- **Canva AI**: Easy to use, good for simple designs

### Stock Photo Alternatives:
- **Unsplash**: Free stock photos (for hero images, project screenshots)
- **Pexels**: Free stock photos
- **Pixabay**: Free images and vectors

### Avatar Generation:
- **This Person Does Not Exist**: AI-generated faces
- **Generated Photos**: Professional headshots
- **Avatar generators**: Abstract/icon-based avatars

---

## Notes

- All images should be optimized for web performance
- Consider using WebP format for better compression
- Test images on both light and dark themes (if applicable)
- Ensure images are accessible (proper alt text, contrast)
- Keep file sizes reasonable (<200KB per image when possible)
- Use descriptive file names for better organization

