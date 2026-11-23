# Development & Deployment Reference Guide

This guide details the development workflows, build processes, and deployment setup for Forge Solutions Lab.

---

## 1. Prerequisites

- **Node.js**: v18.x or v20.x LTS
- **npm** (or **pnpm**)
- **Git**

---

## 2. Local Setup & Workflow

```bash
# Clone the repository
git clone https://github.com/Forge-Solutions-Lab/Forge-Solutions-Lab.github.io.git
cd Forge-Solutions-Lab.github.io

# Install project dependencies
npm install

# Start development server on http://localhost:5173
npm run dev
```

---

## 3. Code Quality & Verification

Before submitting changes or opening a Pull Request, ensure all checks pass:

```bash
# Type check TypeScript files without generating output
npm run typecheck

# Run ESLint to verify code quality and style
npm run lint

# Verify production build compilation
npm run build
```

---

## 4. Deployment to GitHub Pages

This project is deployed to GitHub Pages automatically via GitHub Actions:
- **Workflow File**: `.github/workflows/main.yml`
- **Trigger**: Every push or merge to the `main` branch
- **Build Output**: Generates static assets into `dist/` and publishes to GitHub Pages

---

## 5. Branching Strategy

Follow the guidelines in [Git Workflow Guidelines](GIT_WORKFLOW.md):
- **Never push directly to `main`**.
- Always branch off `main` with descriptive feature branches (e.g., `feature/...`, `fix/...`, `docs/...`).
- Open a Pull Request for review and merge via GitHub UI.
