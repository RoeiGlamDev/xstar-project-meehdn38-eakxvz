// lib/constants.ts

/
 * Constants and configuration for luxury LRP cosmetics application.
 * This file contains branding constants and application-wide settings
 * tailored for the luxury cosmetics market.
 */

export const BRAND = {
  NAME: "luxury LRP cosmetics",
  COLORS: {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
  },
  STYLE: "luxury",
  INDUSTRY: "cosmetics",
};

export const CONFIG = {
  MOTION: {
    REDUCE_MOTION: '(prefers-reduced-motion: reduce)',
  },
  PERFORMANCE: {
    OPTIMIZATION_STRATEGIES: {
      MEMOIZATION: true,
      LAZY_LOADING: true,
      AVOID_HEAVY_RENDERS: true,
    },
  },
  ACCESSIBILITY: {
    USE_SEMANTIC_HTML: true,
    KEYBOARD_NAVIGATION: true,
    ENSURE_COLOR_CONTRAST: true,
  },
  DESIGN: {
    UI_FRAMEWORK: "TailwindCSS",
    MOTION_LIBRARY: "Framer Motion",
    THREE_D: {
      ENABLED: true,
      LIBRARIES: ["three", "@react-three/fiber", "@react-three/drei"],
    },
  },
};

/
 * Types and interfaces specific to luxury LRP cosmetics.
 */
export interface CosmeticProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  altText: string;
}

/
 * Sample business logic related to cosmetics.
 */
export const calculateDiscountedPrice = (price: number, discountRate: number): number => {
  return price - (price * discountRate) / 100;
};

/
 * Feature flag for enabling/disabling 3D effects.
 * This ensures that the luxury design elements are controlled.
 */
export const FEATURES = {
  ENABLE_3D_EFFECTS: true,
};
