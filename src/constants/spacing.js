export const SPACING = {
  xs: 2,     
  sm: 3,      
  md: 4,      
  lg: 6,      
  xl: 8,     
  '2xl': 10, 
  '3xl': 12, 
  '4xl': 16,  
  '5xl': 20,  
  '6xl': 24, 
};

export const PADDING = {
  page: { base: SPACING.md, md: SPACING['3xl'], lg: SPACING['5xl'] },
  section: { base: SPACING['2xl'], md: SPACING['3xl'], lg: SPACING['4xl'] },
  card: SPACING.lg,
  button: { x: SPACING.xl, y: SPACING.md },
};
export const GAP = {
  small: SPACING.sm,
  medium: SPACING.md,
  large: SPACING.lg,
  xlarge: SPACING.xl,
};

