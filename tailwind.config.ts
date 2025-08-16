// tailwind.config.ts

import { defineConfig } from 'tailwindcss/helpers';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const colors = require('tailwindcss/colors');

export default defineConfig({
  content: ['./src//*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette for luxury LRP cosmetics
        orange: {
          light: '#FFA726',
          DEFAULT: '#FF9800',
          dark: '#FB8C00',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['"Lora"', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
// src/components/LuxuryBanner.tsx

import React from 'react';
import { motion } from 'framer-motion';

/
 * LuxuryBanner component
 * Displays a high-end banner for luxury LRP cosmetics
 * using orange and white colors.
 */
const LuxuryBanner: React.FC = () => {
  return (
    <motion.div
      className="bg-orange text-white p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to luxury LRP cosmetics</h1>
      <p className="mt-4 text-lg">
        Discover the epitome of elegance and sophistication in our exclusive line of cosmetics.
      </p>
    </motion.div>
  );
};

export default LuxuryBanner;
// src/components/3DModelViewer.tsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

/
 * 3DModelViewer component
 * Showcases luxury LRP cosmetics products in 3D.
 */
const Model: React.FC = () => {
  const { scene } = useGLTF('/models/luxury-product.glb');
  return <primitive object={scene} />;
};

const 3DModelViewer: React.FC = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default 3DModelViewer;
// src/pages/index.tsx

import React from 'react';
import LuxuryBanner from '../components/LuxuryBanner';
import 3DModelViewer from '../components/3DModelViewer';

/
 * Home page for luxury LRP cosmetics website.
 * Combines luxury design elements with 3D product visualization.
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <LuxuryBanner />
      <section className="p-10">
        <h2 className="text-3xl font-semibold text-orange">Explore Our Collection</h2>
        <3DModelViewer />
      </section>
    </div>
  );
};

export default HomePage;
// src/types/cosmetics.ts

/
 * Types and interfaces related to luxury LRP cosmetics.
 * Defines the structure of our cosmetics data and interactions.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface Pricing {
  basePrice: number;
  currency: Currency;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cart: CartItem[];
}
// src/utils/currencyFormatter.ts

/
 * Utility function to format currency
 * for luxury LRP cosmetics pricing display.
 * @param amount - The amount to be formatted.
 * @param currency - The currency type.
 * @returns Formatted currency string.
 */
export const formatCurrency = (amount: number, currency: Currency): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
// src/app.tsx

import React from 'react';
import HomePage from './pages/index';

/
 * Main application component for luxury LRP cosmetics.
 */
const App: React.FC = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
