# SELS - Project Documentation

## Project Overview
SELS is a fantasy management simulation game featuring Gacha mechanics. Built with **Svelte 5** and **SvelteKit**, it utilizes a modern tech stack for both frontend and backend development.

### Main Technologies
- **Framework:** [SvelteKit](https://kit.svelte.dev/) (using Svelte 5 snippets and runes)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** MySQL / MariaDB
- **Authentication:** Custom session-based authentication using `argon2` and `oslojs/crypto`.

## Architecture
The project follows a standard SvelteKit directory structure:
- `src/routes/`: Contains the application's pages and API endpoints. Key areas include:
    - `sels/`: Core game routes (profile, gacha, trade, newbie).
    - `admin/` & `dev/`: Administrative and developer-specific tools.
    - `signin/`, `signup/`, `signout/`: Authentication routes.
- `src/lib/server/`: Server-side only logic.
    - `database/`: Data access layer with Prisma-based utility functions (e.g., `account.ts`, `sel.ts`).
    - `auth/`: Authentication and session management.
- `src/lib/sprites/`: Visual assets for the game's creatures ("Sels") and UI.
- `prisma/`: Prisma schema definition and migrations.

## Data Model
The database schema revolves around several core entities:
- **account:** User profiles, including currency and roles.
- **paradise:** User-owned areas for their Sels.
- **sel:** The primary game entities (creatures) with attributes like type, colour, sex, and rarity (tier).
- **gacha:** Configuration for gacha mechanics.
- **session:** Manages user authentication sessions.

## Key Commands

### Development
- `npm run dev`: Starts the Vite development server.
- `npm run check`: Runs Svelte-check and TypeScript validation.

### Database Management
- `npm run resetdb`: Drops the local `sels` database and re-pushes the Prisma schema.
- `npm run genprisma`: Synchronizes the Prisma client with the database schema.
- `npm run dbpush`: Dumps the current database state to `sels.sql`.
- `npm run dbpull`: Resets the database and populates it from `sels.sql`.

### Quality Control
- `npm run lint`: Checks code formatting (Prettier) and runs ESLint.
- `npm run format`: Automatically formats the codebase using Prettier.

### Build
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.

## Development Conventions
- **Svelte 5:** Use Svelte 5 features like `$state`, `$props`, and snippets where appropriate.
- **Database Access:** Prefer using the utility functions in `src/lib/server/database/` rather than calling Prisma directly in routes to maintain a clean separation of concerns.
- **Authentication:** Check `event.locals.account` in server-side `load` functions or actions to verify user status.
- **Styling:** Use Tailwind CSS utility classes for styling. Custom CSS should be minimal and scoped to Svelte components or defined in `src/app.css`.
