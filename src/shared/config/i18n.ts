import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      dashboard: {
        badge: "Panel de datos",
        status: "Activo",
      },
      usersPage: {
        title: "Usuarios",
        description: "Gestiona la base de usuarios con una vista ligera y clara.",
        highlights: {
          realtime: "Seguimiento en tiempo real",
          smartFilters: "Filtros inteligentes",
        },
        summaryTitle: "UX",
        summary: {
          total: "Usuarios totales: {{count}}",
          filtered: "Filtrados: {{count}}",
        },
        filters: {
          title: "Filtros",
          description: "Refina la búsqueda por nombre, usuario o correo.",
        },
      },
      usersSearch: {
        label: "Buscar usuario",
        placeholder: "Escribe un nombre, usuario o email.",
        clear: "Limpiar",
      },
      usersTable: {
        heading: "Usuarios",
        subheading: "Listado de cuentas y correos",
        loading: "Cargando usuarios...",
        error: "Ocurrio un error al cargar usuarios.",
        empty: "No se encontraron usuarios.",
        emptySearch: 'Sin resultados para: "{{query}}"',
        filter: 'Filtro: "{{query}}"',
        badge: "Users",
        badgeShort: "US",
        columns: {
          name: "Nombre",
          username: "Usuario",
          email: "Email",
        },
      },
      userPosts: {
        selectPrompt: "Seleccioná un usuario para ver sus posts.",
        loading: "Cargando posts…",
        error: "Error al cargar los posts.",
        empty: "Este usuario no tiene posts.",
        title: "Posts del usuario #{{id}}",
      },
      home: {
        badge: "Data Vista",
        title: "Bienvenido a tu panel de insights",
        subtitle:
          "Explora, filtra y monitorea datos de usuarios y posts en un mismo lugar.",
        cta: "Ir al dashboard",
        highlights: {
          fast: "Cargas rápidas",
          filters: "Filtros inteligentes",
          updates: "Datos siempre al día",
        },
      },
    },
  },
  en: {
    translation: {
      dashboard: {
        badge: "Data panel",
        status: "Active",
      },
      usersPage: {
        title: "Users",
        description: "Manage the user base with a clear, lightweight view.",
        highlights: {
          realtime: "Live monitoring",
          smartFilters: "Smart filters",
        },
        summaryTitle: "UX",
        summary: {
          total: "Total users: {{count}}",
          filtered: "Filtered: {{count}}",
        },
        filters: {
          title: "Filters",
          description: "Refine by name, username or email.",
        },
      },
      usersSearch: {
        label: "Search user",
        placeholder: "Type a name, username or email.",
        clear: "Clear",
      },
      usersTable: {
        heading: "Users",
        subheading: "List of accounts and emails",
        loading: "Loading users...",
        error: "An error occurred while loading users.",
        empty: "No users found.",
        emptySearch: 'No results for: "{{query}}"',
        filter: 'Filter: "{{query}}"',
        badge: "Users",
        badgeShort: "US",
        columns: {
          name: "Name",
          username: "Username",
          email: "Email",
        },
      },
      userPosts: {
        selectPrompt: "Select a user to see posts.",
        loading: "Loading posts…",
        error: "Error loading posts.",
        empty: "This user has no posts.",
        title: "User #{{id}} posts",
      },
      home: {
        badge: "Data Vista",
        title: "Welcome to your insights hub",
        subtitle:
          "Explore, filter and monitor user and post data all in one place.",
        cta: "Go to dashboard",
        highlights: {
          fast: "Fast loads",
          filters: "Smart filters",
          updates: "Always up to date",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
