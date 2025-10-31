# Drishti Arora - Portfolio Website

## Overview

This is a personal portfolio website for Drishti Arora, a Data Scientist and Machine Learning Researcher. The application showcases professional experience, research projects, publications, skills, and educational background in the field of AI, Deep Learning, and Computer Vision. The site features a modern, dark-themed single-page application with smooth scrolling navigation between sections including Home, About, Experience, Projects, Publications, Skills, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application pattern)

**Design System & Styling**
- **Shadcn/ui** component library with Radix UI primitives for accessible, composable UI components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Material Design 3** principles combined with Linear-inspired minimalism
- Custom dark theme with sophisticated color palette (purple primary accent, cyan secondary accent)
- Typography: Inter (body), Space Grotesk (headings), JetBrains Mono (technical elements)
- **Framer Motion** for animations and interactive transitions

**State Management & Data Fetching**
- **TanStack React Query** (v5) for server state management and caching
- Custom query client configuration with credentials-based API requests
- Local component state using React hooks

**UI Component Library**
- Comprehensive Radix UI component collection including: dialogs, dropdowns, tooltips, accordions, carousels, charts, forms, navigation menus, and more
- Custom-styled components extending base Radix primitives
- React Hook Form with Zod validation for form handling

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js for HTTP server
- TypeScript for type-safe server-side code
- Custom middleware for request/response logging with duration tracking

**Development Environment**
- Vite middleware integration for development HMR
- Separate development and production build configurations
- Replit-specific plugins for development banner and error overlays

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as placeholder
- Interface-based design (`IStorage`) allowing easy swap to database backend
- User entity with UUID-based primary keys

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for development/prototyping
- User entity schema defined with username/password fields

**Database Configuration (Prepared but Not Implemented)**
- **Drizzle ORM** configured for PostgreSQL integration
- **Neon Database** serverless PostgreSQL driver included
- Schema definition in `shared/schema.ts` using Drizzle's pgTable
- Migration support configured via `drizzle-kit`
- Connection string expected via `DATABASE_URL` environment variable

**Rationale**: The application is currently static portfolio content without dynamic user data requirements. Database infrastructure is configured for future features like contact form persistence, analytics, or admin capabilities.

### Authentication and Authorization

**Current State**: No authentication implemented - this is a public portfolio site

**Prepared Infrastructure**:
- User schema with password field suggests future authentication capability
- Session storage package (`connect-pg-simple`) included for PostgreSQL-backed sessions
- Storage interface includes user lookup methods by username

### External Dependencies

**Third-Party UI Libraries**
- Radix UI primitives (@radix-ui/*) - Accessible component primitives
- Shadcn/ui - Pre-styled component collection
- Framer Motion - Animation library
- Embla Carousel - Touch-enabled carousel
- CMDK - Command menu component
- Recharts - Charting library

**Development Tools**
- Replit-specific plugins for development experience
- TSX for TypeScript execution in development
- ESBuild for production server bundling

**Google Fonts Integration**
- Inter, Space Grotesk, and JetBrains Mono loaded via Google Fonts CDN
- Preconnect optimization for font loading performance

**Potential Future Integrations**
- Email service for contact form (currently client-side only)
- Analytics platform for visitor tracking
- CMS for dynamic content management