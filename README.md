# Data Vista

React + TypeScript app showcasing modern frontend architecture, API consumption, and best practices (FSD + Clean Architecture).

## Demo
Project demo: <a href="https://d4tavista.netlify.app" target="_blank"></a>
## Stack
- React 18 + TypeScript
- Vite
- Redux Toolkit + RTK Query
- MSW for test mocking
- Jest + Testing Library
- Sass for styles

## Architecture (quick view)

The project follows Feature-Sliced Design with clear separation of concerns:
```
src
├─ app/           # store, router
├─ entities/      # models and API calls (RTK Query)
├─ features/      # reusable logic (e.g., user filter)
├─ widgets/       # UI blocks (DashboardLayout, UsersTable, UserPosts)
├─ pages/         # views (Home, UsersPage)
├─ shared/        # i18n config, common styles, utilities
└─ test/          # MSW server and testing helpers
```

## Technical decisions
- **RTK Query** for typed fetching and caching of users/posts.
- **i18n with i18next**: Spanish default, English fallback; floating switch to change language.
- **Composable layout** (`DashboardLayout`) to keep consistency across pages.
- **Modular Sass** per component; variables and theming in `src/index.scss` (dark palette).
- **Page vs widget separation**: pages orchestrate data, widgets are presentational and reusable.
- **Testing** with Jest/RTL and MSW to isolate the network layer.
- **Accessibility**: loading/error states, `aria-*` in tables and buttons, skeleton loaders.

## How to run
```bash
npm install
npm run dev       # local environment
npm run build     # production build
npm test          # run tests
```

## What the project demonstrates
- REST API consumption with RTK Query plus loading/error/cache handling.
- User filtering as a pure function + controlled search via Redux.
- Responsive tables/lists with empty states and skeletons.
- Runtime internationalization with language selector.
- Dark-themed UI with reusable layout and Sass-styled components.
- Ability to design scalable, maintainable frontend projects beyond the UI layer.
