export const themeConfig = {
  // Color palette
  colors: {
    primary: {
      50: '#f6f7f6',
      100: '#e3e7e3',
      200: '#c7d0c7',
      300: '#a3b2a3',
      400: '#84a584',
      500: '#6b8e6b',
      600: '#547154',
      700: '#445a44',
      800: '#394a39',
      900: '#2f3e2f',
    },
    secondary: {
      50: '#fdfcf8',
      100: '#f8f4e6',
      200: '#f0e7c7',
      300: '#e6d5a3',
      400: '#dcc284',
      500: '#d1ae6b',
      600: '#c49a54',
      700: '#a37f44',
      800: '#846539',
      900: '#6b522f',
    }
  },

  // Border radius values
  borderRadius: {
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
    full: '9999px'
  },

  // Spacing system (8px base)
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px
  },

  // Typography
  typography: {
    fontFamily: {
      primary: ['Inter', 'system-ui', 'sans-serif'],
      secondary: ['Inter', 'system-ui', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75'
    }
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Animation durations
  animation: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms'
  },

  // Component-specific settings
  components: {
    button: {
      borderRadius: '2rem', // Fully rounded buttons
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem'
      }
    },
    card: {
      borderRadius: '3rem', // Very rounded cards
      padding: '2rem',
      shadow: 'lg'
    },
    input: {
      borderRadius: '2rem',
      padding: '0.75rem 1rem'
    }
  }
};

// Helper function to get theme values
export const getThemeValue = (path: string) => {
  const keys = path.split('.');
  let value: any = themeConfig;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value;
};

// CSS custom properties for dynamic theming
export const generateCSSVariables = () => {
  return `
    :root {
      --color-primary-50: ${themeConfig.colors.primary[50]};
      --color-primary-100: ${themeConfig.colors.primary[100]};
      --color-primary-200: ${themeConfig.colors.primary[200]};
      --color-primary-300: ${themeConfig.colors.primary[300]};
      --color-primary-400: ${themeConfig.colors.primary[400]};
      --color-primary-500: ${themeConfig.colors.primary[500]};
      --color-primary-600: ${themeConfig.colors.primary[600]};
      --color-primary-700: ${themeConfig.colors.primary[700]};
      --color-primary-800: ${themeConfig.colors.primary[800]};
      --color-primary-900: ${themeConfig.colors.primary[900]};
      
      --color-secondary-50: ${themeConfig.colors.secondary[50]};
      --color-secondary-100: ${themeConfig.colors.secondary[100]};
      --color-secondary-200: ${themeConfig.colors.secondary[200]};
      --color-secondary-300: ${themeConfig.colors.secondary[300]};
      --color-secondary-400: ${themeConfig.colors.secondary[400]};
      --color-secondary-500: ${themeConfig.colors.secondary[500]};
      --color-secondary-600: ${themeConfig.colors.secondary[600]};
      --color-secondary-700: ${themeConfig.colors.secondary[700]};
      --color-secondary-800: ${themeConfig.colors.secondary[800]};
      --color-secondary-900: ${themeConfig.colors.secondary[900]};
      
      --border-radius-sm: ${themeConfig.borderRadius.sm};
      --border-radius-md: ${themeConfig.borderRadius.md};
      --border-radius-lg: ${themeConfig.borderRadius.lg};
      --border-radius-xl: ${themeConfig.borderRadius.xl};
      --border-radius-2xl: ${themeConfig.borderRadius['2xl']};
      --border-radius-3xl: ${themeConfig.borderRadius['3xl']};
      
      --spacing-xs: ${themeConfig.spacing.xs};
      --spacing-sm: ${themeConfig.spacing.sm};
      --spacing-md: ${themeConfig.spacing.md};
      --spacing-lg: ${themeConfig.spacing.lg};
      --spacing-xl: ${themeConfig.spacing.xl};
      --spacing-2xl: ${themeConfig.spacing['2xl']};
      --spacing-3xl: ${themeConfig.spacing['3xl']};
      --spacing-4xl: ${themeConfig.spacing['4xl']};
    }
  `;
};