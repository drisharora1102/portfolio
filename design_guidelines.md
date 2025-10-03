# Portfolio Website Design Guidelines - Drishti Arora

## Design Approach: Design System Foundation
**Selected System**: Material Design 3 with Linear-inspired minimalism
**Rationale**: Portfolio showcases technical expertise requiring clean, professional presentation with subtle interactive elements that demonstrate technical sophistication.

## Core Design Principles
- **Dark Minimalism**: Sophisticated dark theme with strategic use of light
- **Technical Precision**: Sharp edges, clean typography, data-driven aesthetics
- **Dynamic Presence**: Subtle animations and interactive states without distraction
- **Information Density**: Efficient space usage while maintaining breathing room

## Color Palette

**Dark Mode (Primary)**
- Background Primary: 222 15% 10%
- Background Secondary: 222 15% 14%
- Background Tertiary: 222 15% 18%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Text Tertiary: 0 0% 50%
- Primary Accent: 260 85% 65% (Modern purple for CTAs, links)
- Secondary Accent: 195 85% 60% (Cyan for highlights, data viz)
- Success/Highlight: 155 70% 55%
- Border: 222 15% 25%

**Interactive States**
- Hover overlays: white at 5% opacity
- Active states: Primary accent at 20% opacity backgrounds

## Typography

**Font Stack**
- Primary: 'Inter' (Google Fonts) - Body text, UI elements
- Display: 'Space Grotesk' (Google Fonts) - Headings, section titles  
- Monospace: 'JetBrains Mono' (Google Fonts) - Technical tags, code snippets, data

**Scale**
- Hero Title: text-5xl md:text-7xl, font-bold (Space Grotesk)
- Section Headers: text-3xl md:text-4xl, font-semibold (Space Grotesk)
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Captions/Tags: text-sm, tracking-wide (JetBrains Mono for technical terms)

## Layout System

**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections

**Grid System**
- Navigation: Full-width sticky header with contained content
- Home/Hero: Asymmetric layout - 60/40 split (content/visual element)
- Experience/Projects: Card grid - grid-cols-1 md:grid-cols-2 gap-6
- Skills: Multi-column pill layout - grid-cols-2 md:grid-cols-4
- Publications: Single column stacked cards with expand interactions

## Navigation Design

**Tab Navigation Bar**
- Fixed top position with backdrop-blur-lg effect
- Height: h-16, bg-background-primary/80
- Tabs: Horizontal flex layout with border-b-2 active state (primary accent)
- Smooth scroll to sections on click
- Active indicator: Animated underline slide transition
- Mobile: Hamburger converts to slide-out drawer

## Component Library

**Hero Section (Home)**
- Large name display with gradient text effect (primary to secondary accent)
- Animated typed tagline: "Data Scientist | ML Researcher | AI Innovator"
- Particle.js background (subtle geometric network pattern)
- CTA buttons: "View Projects" (filled), "Download Resume" (outlined with blur bg)
- Stats ticker: Publications count, Projects count, Years experience (animated counters)

**Experience Cards**
- Glass-morphism cards: backdrop-blur-md, bg-white/5, border border-white/10
- Timeline connector on left (vertical line with dots)
- Company logo placeholder (circle, 48px)
- Role, duration, location in header
- Bullet achievements with check icons (Heroicons)
- Hover: Subtle lift (translate-y-1), glow border effect

**Project Cards**
- Grid layout with featured project spotlight (larger card)
- Tech stack pills (monospace font, outlined style)
- Expandable description on hover/click
- GitHub icon link, external link for demos
- Background: Gradient mesh subtle pattern

**Skills Section**
- Categorized pill groups: Domain, Technical, Tools, Soft Skills
- Interactive filter buttons above
- Pills: Rounded-full, px-4 py-2, bg-tertiary, hover scale effect
- Proficiency indicator: Border thickness variation (1px basic, 2px proficient, 3px expert)

**Publications List**
- Chronological stacked cards
- Journal/Conference badge (different colors)
- Expandable abstract on click
- Co-authors count badge
- Download/link icons (Heroicons: arrow-down-tray, link)

**Contact Section**
- Two-column: Form + Info
- Form: Floating label inputs, focus glow effect
- Social links: Icon grid with hover color shifts
- Background: Subtle gradient overlay

## Dynamic Components

**Animations (Framer Motion patterns)**
- Page load: Stagger fade-up for sections (delay 100ms each)
- Tab transitions: Slide content, 300ms ease-out
- Card hovers: Scale 1.02, shadow intensity increase
- Counter animations: Number increment on scroll into view
- Typing effect: Hero tagline with cursor blink
- Scroll progress indicator: Thin line at top showing read progress

**Interactive Elements**
- Skill filter: Instant fade in/out based on category
- Publication expand: Height auto transition, rotate chevron icon
- Experience timeline: Pulse animation on active item
- Theme particles: Mouse-follow parallax effect (subtle)

## Images Strategy

**Hero Section**: Abstract data visualization or neural network graphic (1920x1080, positioned right side)
**Project Cards**: Screenshot placeholders for each project (600x400)
**No traditional photos** - focus on abstract tech visuals, data patterns, or geometric illustrations

## Accessibility & Performance

- Focus states: 2px outline in primary accent, offset 2px
- ARIA labels on all interactive elements
- Reduced motion query: Disable animations for users who prefer
- Dark mode optimized contrast ratios (minimum WCAG AA)
- Lazy load images below fold
- Preload critical fonts

## Key Differentiators

- **Technical aesthetic**: Monospace accents, data-driven visual language
- **Sophisticated dark theme**: Not pure black, layered grays with colored accents
- **Interactive depth**: Glass-morphism, blur effects, subtle particle systems
- **Information architecture**: Tab navigation instead of scroll-heavy layout
- **Dynamic storytelling**: Animated counters, expandable content, filtered views