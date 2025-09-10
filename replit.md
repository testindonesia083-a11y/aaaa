# Overview

This is a full-stack educational application (LifeApp) built with React frontend and Express backend. The application provides an interactive learning platform where users can browse educational modules, continue watching videos, explore course content, and manage their learning preferences. The frontend features a modern tabbed interface with carousels, video players, and settings management, while the backend provides API infrastructure for user management and data storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Component Structure**: Modular component architecture with separate UI components, page components, and data management

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: TSX for development server with hot reloading
- **Build Process**: esbuild for production bundling
- **Storage Interface**: Abstract storage interface with in-memory implementation (MemStorage)
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Vite integration for development mode with HMR support

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with Zod integration for type safety
- **Schema Management**: Centralized schema definitions in shared directory
- **Development Storage**: In-memory storage implementation for development
- **Migration Management**: Drizzle Kit for database migrations

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstract user management methods (getUser, getUserByUsername, createUser)

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Session Store**: connect-pg-simple for PostgreSQL session storage

### UI and Styling
- **Radix UI**: Complete component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel functionality for module browsing

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type safety across frontend and backend
- **Replit Integration**: Cartographer plugin and error overlay for Replit environment

### Data Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with Zod resolvers for validation
- **Date-fns**: Date manipulation utilities

### Validation and Forms
- **Zod**: Schema validation library
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod for type-safe schemas
- **@hookform/resolvers**: React Hook Form integration with validation libraries