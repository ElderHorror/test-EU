# EU Study Assist Website

This is the codebase for the EU Study Assist website, built with Next.js and Chakra UI.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/                # API routes
│   ├── (routes)/           # All page routes
│   └── layout.tsx          # Root layout
├── components/             # All components
│   ├── common/             # Reusable UI components (buttons, inputs, etc.)
│   ├── layout/             # Layout components (navbar, footer, etc.)
│   └── sections/           # Page sections organized by feature
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and libraries
├── styles/                 # Global styles and theme
└── types/                  # TypeScript type definitions
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

- **Modern React with Next.js**: Built with the latest Next.js features
- **TypeScript**: Type-safe code for better developer experience
- **Chakra UI**: Accessible and customizable component library
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Performance Optimized**: Fast loading times and optimized assets

## Component System

The project uses a component-based architecture with reusable components:

- **Layout Components**: Navbar, Footer, Section
- **Common Components**: Button, Card, OptimizedImage
- **Section Components**: Hero, Testimonials, FAQ, Contact

## Styling

The project uses Chakra UI for styling with a custom theme defined in `src/styles/theme.ts`.

## Development Guidelines

1. **Component Organization**:

   - Place reusable UI components in `src/components/common/`
   - Place layout components in `src/components/layout/`
   - Place page sections in `src/components/sections/`

2. **Naming Conventions**:

   - Use PascalCase for component files and folders
   - Use camelCase for utility functions and variables

3. **Code Style**:

   - Add JSDoc comments to components and functions
   - Use TypeScript interfaces for props
   - Follow the established folder structure

4. **Performance**:
   - Use Next.js Image component for images
   - Implement code splitting where appropriate
   - Optimize font loading

## Deployment

The site is deployed on Vercel. Changes to the main branch are automatically deployed.

