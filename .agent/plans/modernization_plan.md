# Portfolio Modernization Plan (Granular - Tailwind CSS Edition)

## Goal Description

Modernize the Angular portfolio application to reflect a highly professional, tech-focused brand. The transition involves completely removing PrimeNG to rely heavily on **Tailwind CSS** for rapid, utility-first styling, alongside HTML and Angular. Font Awesome will be used for icons. Custom SCSS will only be used when strictly necessary.

This plan is optimized for **multiple releases over a long period**, breaking the work down into very small, atomic tasks that can be safely developed, reviewed, and released incrementally.

## Phase 1: Foundation (Release 1)

Focus: Stripping out PrimeNG and firmly establishing the Tailwind CSS foundation, including dark mode support.

### Task 1.1: PrimeNG Package Cleanup

- **What**: Run `npm uninstall primeng @primeuix/themes`.
- **Why**: Removes third-party bloat, making the bundle lighter and setting the stage for a pure Tailwind UI.
- **How**: Use terminal commands and remove references in `package.json`. Keep existing Tailwind dependencies.

### Task 1.2: Angular Configuration Cleanup

- **What**: Clean up `angular.json`.
- **Why**: Ensures no ghost configurations remain that might break the build.
- **How**: Remove PrimeNG script/style arrays in `angular.json`.

### Task 1.3: Tailwind Configuration & Theme Setup

- **What**: Configure Tailwind's theme variables (colors, fonts).
- **Why**: Centralizes brand colors and typography for easy utility-class usage.
- **How**: Update the Tailwind configuration file to include primary/secondary brand colors and modern font families. Ensure dark mode is configured (e.g., `darkMode: 'class'`).

### Task 1.4: Base Styling & Resets

- **What**: Clean up `src/styles.scss`.
- **Why**: Ensures consistent base rendering using Tailwind's preflight.
- **How**: Add Tailwind imports (`@tailwind base; @tailwind components; @tailwind utilities;`) and any essential global styles.

### Task 1.5: Theme Logic Foundation

- **What**: Create a basic ThemeService.
- **Why**: Prepares the app for light/dark mode toggling.
- **How**: Implement an Angular service to toggle a `dark` CSS class on the `<html>` or `<body>` tag, enabling Tailwind's `dark:` utility variants.

## Phase 2: App Shell & Navigation (Release 2)

Focus: Establishing the layout wrapper and top navigation using Tailwind flexbox and spacing utilities.

### Task 2.1: App Layout Container

- **What**: Style `<main>` in `app.component.html`.
- **Why**: Keeps the footer at the bottom and prevents content from sliding under the fixed navbar.
- **How**: Use Tailwind classes like `min-h-screen flex flex-col`.

### Task 2.2: Desktop Navigation Bar

- **What**: Build the horizontal navbar for larger screens.
- **Why**: Allows users to navigate the portfolio.
- **How**: Use Tailwind `flex`, `justify-between`, `items-center`, and `sticky top-0 z-50` classes.

### Task 2.3: Mobile Hamburger Menu

- **What**: Implement responsive mobile nav.
- **Why**: Ensures usability on phones.
- **How**: Use Tailwind responsive prefixes (`md:hidden`) and Angular `(click)` binding to toggle a menu overlay.

### Task 2.4: Theme Toggle Button

- **What**: Add a sun/moon button to the navbar.
- **Why**: Allows users to switch themes immediately.
- **How**: Use Font Awesome icons and Tailwind hover utility classes (`hover:text-primary`).

## Phase 3: Hero & About (Release 3)

Focus: The crucial first impression and background info built with Tailwind layout utilities.

### Task 3.1: Hero Layout

- **What**: Structure the 2-column grid in `home.component.html`.
- **Why**: Best layout for text + image.
- **How**: Use Tailwind `grid md:grid-cols-2 gap-8`.

### Task 3.2: Hero Typography & Styling

- **What**: Apply large headers and modern styling.
- **Why**: To look highly professional and tech-focused.
- **How**: Use Tailwind `text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r`.

### Task 3.3: Hero Call-to-Action Buttons

- **What**: Style "Resume" and "Contact" buttons.
- **Why**: Directs user behavior immediately.
- **How**: Use Tailwind for button styling (e.g., `px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform`).

### Task 3.4: About Me Section

- **What**: Refactor the `about-me` component HTML.
- **Why**: Clean up legacy HTML and replace PrimeNG grids.
- **How**: Use Tailwind `flex` or `grid` for layout, and rounded utilities for images.

### Task 3.5: What I Do (Services) Layout

- **What**: Structure a grid of service cards.
- **Why**: Easy readability for skills offered.
- **How**: Use Tailwind `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.

### Task 3.6: What I Do Card Interactions

- **What**: Add hover effects and styling to service cards.
- **Why**: Makes the UI dynamic and intuitive.
- **How**: Use Tailwind `p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all`.

## Phase 4: Experience & Education (Release 4)

Focus: Building a clean timeline and academic history using Tailwind borders and positioning.

### Task 4.1: Experience Timeline Structure

- **What**: Create an HTML list `<ul>` for jobs.
- **Why**: Semantic structure for timelines.
- **How**: Standard `li` elements with date spans.

### Task 4.2: Timeline Visuals

- **What**: Draw the vertical line and nodes.
- **Why**: Turns a basic list into a professional timeline.
- **How**: Use Tailwind `border-l-2`, `relative`, and absolute positioned dots (`absolute -left-[9px] w-4 h-4 rounded-full bg-primary`).

### Task 4.3: Tech Stack Pills

- **What**: Style the technologies used at each job.
- **Why**: Emphasizes tech background.
- **How**: Use Tailwind `inline-block px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700`.

### Task 4.4: Education Section Refactor

- **What**: Style the education history.
- **Why**: Uniformity with experience.
- **How**: Re-use timeline layout utilities or standard card layouts.

## Phase 5: Skills & Projects (Release 5)

Focus: Visualizing expertise and past work.

### Task 5.1: Skills Data Grouping

- **What**: Refactor Angular component to group skills (Frontend, Backend, etc.).
- **Why**: Improves readability.
- **How**: Update the TypeScript array structure.

### Task 5.2: Skills Visual Badges

- **What**: Style the skills.
- **Why**: Attractive display of capabilities.
- **How**: Combine Font Awesome icons with Tailwind badge styling.

### Task 5.3: Projects Grid Layout

- **What**: Structure the project container.
- **Why**: Displays projects cleanly.
- **How**: Tailwind `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`.

### Task 5.4: Project Cards Base

- **What**: Build the individual project card (Image + Title + Description).
- **Why**: To showcase each project.
- **How**: Tailwind `rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border dark:border-gray-700`.

### Task 5.5: Project Card Overlays

- **What**: Add hover overlay with Links (Github, Live).
- **Why**: Keeps the default view clean but accessible on interaction.
- **How**: Tailwind `absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center`.

## Phase 6: Supplementary Content (Release 6)

Focus: The bottom half of the website.

### Task 6.1: Blog Section Styling

- **What**: Refactor blog list.
- **Why**: Consistency with the new design system.
- **How**: Re-use Tailwind card utility combinations.

### Task 6.2: Certifications Section

- **What**: Refactor certifications list.
- **Why**: Consistency.
- **How**: Grid layout with external link icons (Font Awesome).

### Task 6.3: Footer Layout

- **What**: Build the bottom footer.
- **Why**: Closes out the page professionally.
- **How**: Tailwind `flex flex-col items-center justify-center py-8`.

### Task 6.4: Social Media Icons

- **What**: Style Font Awesome social links.
- **Why**: Easy contact points.
- **How**: Tailwind `text-gray-500 hover:text-blue-500 transition-colors`.

## Phase 7: Polish & Deployment (Release 7)

Focus: Preparing for final, high-quality production release.

### Task 7.1: Image Optimization

- **What**: Add `loading="lazy"` to images and compress assets.
- **Why**: Ensures fast loading times.
- **How**: HTML attributes and local image compression.

### Task 7.2: Accessibility (A11y)

- **What**: Add ARIA labels and ensure contrast.
- **Why**: Best practices and professional standard.
- **How**: Manual HTML review. Tailwind ensures good defaults if semantic colors are chosen well.

### Task 7.3: Code Comments

- **What**: Add "What, Why, How" comments in code.
- **Why**: Adhere to user requirement for clear documentation.
- **How**: Add standard block comments in TS and HTML.

### Task 7.4: Build & Deploy

- **What**: Run production build.
- **Why**: Publish to GitHub Pages.
- **How**: `ng build` and verify output.
