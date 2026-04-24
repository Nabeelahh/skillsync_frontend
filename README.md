# SkillSync - Mentorship Platform

A modern mentorship platform built with Next.js App Router and Tailwind CSS that connects mentors with mentees for meaningful learning experiences.

## Tech Stack

- **Next.js** (App Router) - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Project Structure

```
app/
├─ (public)/
│ ├─ layout.tsx          # Public layout
│ └─ page.tsx            # Public landing page
│
├─ (mentor)/
│ ├─ layout.tsx          # Mentor layout
│ └─ mentor/page.tsx     # Mentor dashboard
│
├─ (mentee)/
│ ├─ layout.tsx          # Mentee layout
│ └─ mentee/page.tsx     # Mentee dashboard
│
├─ (admin)/
│ ├─ layout.tsx          # Admin layout
│ └─ admin/page.tsx      # Admin dashboard
│
├─ layout.tsx            # Root layout
├─ page.tsx              # Home page with portal links
└─ globals.css           # Global styles

components/              # Shared React components
lib/                     # Utility functions and configurations
```

## Route Groups

The application uses Next.js route groups to organize different user experiences:

- **(public)** - Public pages accessible to all users
- **(mentor)** - Mentor-specific pages and dashboard
- **(mentee)** - Mentee-specific pages and dashboard  
- **(admin)** - Admin portal for platform management

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Path Aliases

The project is configured with the following path aliases:

- `@/*` - Root directory
- `@/components/*` - Components directory
- `@/lib/*` - Library/utility directory
- `@/styles/*` - Styles directory

## Features

- ✅ Next.js App Router with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Route-based layouts
- ✅ Responsive design
- ✅ Clean, scalable folder structure

## Next Steps

This scaffold provides the foundation for building out:

- Authentication system
- User profiles and matching
- Session scheduling
- Messaging system
- Progress tracking
- Admin analytics

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
