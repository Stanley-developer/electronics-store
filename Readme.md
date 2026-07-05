# Electronics Store

## Overview

This repository contains an electronics storefront project with a React + Vite frontend under `client/` and a backend scaffold under `server/`.

### What collaborators need to know

- The main UI is built in `client/src/` using React components.
- The current reusable components include `Header`, `Footer`, `UIButton`, and `UICard`.
- Global design tokens and typography are defined in `client/src/index.css`.
- Pages are located in `client/src/pages/`.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Stanley-developer/electronics-store
cd electronics-store
```


### Install dependencies

Install the frontend dependencies from the `client` directory:

```bash
cd client
npm install
```

If a backend exists later in `server/`, install its dependencies there as well, Ignore if you're assigned front end:

```bash
cd ../server
npm install
```

### Run the frontend locally

```bash
cd client
npm run dev
```

Open the displayed local URL in your browser.

```

---

## Branch and Collaboration Guidelines

### Branching workflow

Use feature branches for all work:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Commit conventions

Keep commits small and focused. Use descriptive commit messages:

- `Add reusable UIButton component`
- `Fix header spacing issue on laptop screens`
- `Update footer background to black`

### Push changes

After making changes locally:

```bash
git add .
git commit -m "Describe the change clearly"
git push origin feature/your-feature-name or git push origin HEAD
```

Then create a pull request from your branch into `main`.

### Updating your branch

If the base branch changes while you are working:

```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
```

Resolve any conflicts, test locally, then commit and push.

---

## Component Usage Guidelines

### Reusable UI components

The project already includes shared UI components for consistent styling:

- `client/src/components/UIButton.jsx`
- `client/src/components/UIButton.css`
- `client/src/components/UICard.jsx`
- `client/src/components/UICard.css`

Use these components for buttons and cards instead of adding new, inconsistent markup.

Example usage:

```jsx
import UIButton from "../components/UIButton";
import UICard from "../components/UICard";

function Example() {
  return (
    <UICard eyebrow="Featured" title="Card title">
      <p>Some description text.</p>
      <UIButton>Primary action</UIButton>
    </UICard>
  );
}
```

### Typography and design tokens

Headings use `DM Sans` globally, and brand colors are defined in `client/src/index.css`.

Use CSS variables where possible:

- `--primary-button-background`
- `--primary-button-hover-background`
- `--card-background`
- `--heading-text-color`
- `--body-text-color`

This keeps the look consistent across the app.

---


## Notes for Reviewers

- Verify the component styling matches the current design system.
- Check that the new font and button/card styles are applied consistently.
- Confirm the app builds successfully with `npm run build`.

---

## Useful Commands

From the `client/` directory:

- `npm install` — install node dependencies
- `npm run dev` — run local development server
- `npm run build` — build production files
- `npm run lint` — run ESLint checks

---

## Future Improvements

- Add backend routes and database integration in `server/`
- Implement full product and cart pages
- Add tests for components and pages
- Add improved documentation for the API if the backend is completed

