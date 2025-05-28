export const COLORS = {
  primary: {
    blue: '#3366FF',
    teal: '#00CCCC',
    purple: '#6B46C1',
    indigo: '#4F46E5',
  },
  accent: {
    orange: '#FF9900',
    pink: '#EC4899',
    yellow: '#F59E0B',
    green: '#10B981',
  },
  neutral: {
    lightGray: '#F5F5F5',
    white: '#FFFFFF',
    darkGray: '#333333',
    gray: '#6B7280',
    
  },
  gradient: {
    primary: ['#3366FF', '#4F46E5'],
    accent: ['#FF9900', '#EC4899'],
    success: ['#10B981', '#059669'],
    warning: ['#F59E0B', '#D97706'],
  },
  background: {
    light: '#F9FAFB',
    dark: '#1F2937',
  },
  text: {
    primary: '#1F2937',
    secondary: '#4B5563',
    light: '#9CA3AF',
  },
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export const SIZES = {
  // Global sizes
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,

  // Font sizes
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 16,
  body2: 14,
  body3: 12,

  // App dimensions
  width: '100%',
  height: '100%',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.neutral.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.neutral.darkGray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  dark: {
    shadowColor: COLORS.neutral.darkGray,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6.27,
    elevation: 8,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
}; 