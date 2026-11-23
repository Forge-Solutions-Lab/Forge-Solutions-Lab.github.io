# Application Components Guide

This document provides an overview of the UI components in `src/components/` and their respective responsibilities in the Forge Solutions Lab landing page.

---

## Component Architecture Overview

The single-page application is composed in `src/App.tsx` wrapped with `ThemeProvider`. Each section is sequentially rendered with scroll-reveal animations.

```text
App
├── ThemeProvider (context)
│   ├── Navbar
│   └── <main>
│       ├── Hero
│       ├── About
│       ├── Services
│       ├── Projects
│       ├── TechStack
│       ├── Team
│       └── Contact
│   └── Footer
```

---

## Detailed Component Breakdown

### 1. Navigation & Shell
* **`Navbar.tsx`**: Fixed top navigation bar. Includes organization brand mark, navigation links with smooth scrolling to anchor IDs, theme switcher button (light/dark mode toggle), and mobile hamburger menu.
* **`Footer.tsx`**: Global page footer containing org details, quick links, social media/GitHub links, and copyright info.

### 2. Main Sections
* **`Hero.tsx`**: High-impact above-the-fold hero section. Features company tagline, call-to-action buttons ("Explore Projects", "Contact Us"), and dynamic stats counter.
* **`About.tsx`**: Company profile and mission statement explaining the student-led engineering focus, university startup context, and core philosophies.
* **`Services.tsx`**: Grid of services offered (Web Application Development, Algorithmic Solutions, AI/ML Engineering, System Architecture).
* **`Projects.tsx`**: Showcase of flagship software projects and research experiments, including tech tags, descriptions, and repository links.
* **`TechStack.tsx`**: Visual presentation of technologies, frameworks, and programming languages utilized across projects.
* **`Team.tsx`**: Team member roster cards with photos, roles, student IDs, and social links.
* **`Contact.tsx`**: Contact form and direct communication channels.

### 3. Supporting Sections
* **`Problem.tsx` & `Solution.tsx`**: Outlines pain points and how Forge Solutions Lab addresses them through engineering precision.
* **`KeyFeatures.tsx` & `TrustedStandards.tsx`**: Highlights code quality standards, CI/CD practices, and engineering methodologies.
* **`Stats.tsx`**: Numerical highlights animated using the `useCountUp` hook.
