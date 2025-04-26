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

## Component Organization

- **Common Components**: Reusable UI components like buttons, inputs, cards, etc.
- **Layout Components**: Components that define the structure of the page (navbar, footer, etc.)
- **Section Components**: Larger components that make up sections of pages

## Styling

The project uses Chakra UI for styling with a custom theme defined in `src/styles/theme.ts`.

## Development

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

1. Build the project: `npm run build`
2. Start the production server: `npm start`

## Code Conventions

- Use TypeScript for all new components
- Add JSDoc comments to components and functions
- Use path aliases for imports (e.g., `@/components/...`)
- Follow the established folder structure for new components
