# PepeCoinz - Next.js Project Documentation

## Project Setup and Structure

### 1. Initial Setup
```bash
# Create new Next.js project with TypeScript and Tailwind
npx create-next-app@latest .
```

Selected options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Customize import alias: Yes (@/*)

### 2. Project Structure
We implemented a domain-driven design (DDD) approach with the following structure:
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── wallet/            # Feature routes
│       └── page.tsx
│
├── features/              # Domain-specific features
│   ├── home/
│   │   └── components/    # Home-specific components
│   └── wallet/
│       ├── components/    # Feature-specific components
│       ├── api/          # API integration
│       ├── hooks/        # Custom hooks
│       └── types/        # TypeScript types
│
└── shared/               # Shared components
    └── components/
        ├── Header/
        └── Footer/
```

### 3. Configuration Files

#### a. TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    },
    "baseUrl": "."
  }
}
```

#### b. Tailwind Configuration (tailwind.config.ts)
```typescript
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    }
  }
}
```

### 4. Layout Implementation

#### a. Root Layout (src/app/layout.tsx)
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

#### b. Shared Components

Header Component (src/shared/components/Header/Header.tsx):
```tsx
export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        {/* Navigation content */}
      </nav>
    </header>
  );
}
```

Footer Component (src/shared/components/Footer/Footer.tsx):
```tsx
export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-gray-800 text-white z-100">
      <div className="container mx-auto h-16 flex items-center justify-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} PepeCoinz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

### 5. Key Learnings and Solutions

#### Layout Challenges Solved:
1. **Footer Positioning**: 
   - Initial attempt with `text-center` wasn't sufficient
   - Tried flex layout but had inconsistencies
   - Final solution uses fixed positioning with proper z-index

2. **Path Aliases**:
   - Set up `@/*` alias in tsconfig.json
   - Enables clean imports like `@/shared/components/Header`

3. **Tailwind Configuration**:
   - Updated content paths to include all source directories
   - Added custom z-index for proper layering
   - Ensures styles are properly processed

#### Best Practices Implemented:
1. **Component Organization**:
   - Feature-specific components in respective feature directories
   - Shared components in shared directory
   - Clear separation of concerns

2. **Type Safety**:
   - Proper TypeScript configurations
   - Type definitions for components and props

3. **Responsive Design**:
   - Mobile-first approach with Tailwind
   - Flexible layouts that work across devices

### 6. Running the Project

Development:
```bash
npm run dev
```

Build:
```bash
npm run build
```

### 7. Next Steps and Recommendations

1. **State Management**:
   - Consider adding Redux or Context API for global state
   - Implement user authentication

2. **Component Enhancement**:
   - Add animations
   - Implement dark mode
   - Add responsive variations

3. **Testing**:
   - Set up Jest for unit testing
   - Add E2E testing with Cypress

4. **Performance**:
   - Implement image optimization
   - Add loading states
   - Configure caching strategies

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment

This project is configured to deploy to GitHub Pages automatically when changes are pushed to the main branch.
