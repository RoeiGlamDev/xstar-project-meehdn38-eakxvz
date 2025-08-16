'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: 'Exquisite Formulations',
    description: 'Experience the pinnacle of skincare with our exclusive, scientifically advanced formulations.',
  },
  {
    title: 'Luxurious Packaging',
    description: 'Indulge in our elegantly designed packaging that embodies the essence of luxury.',
  },
  {
    title: 'Sustainable Beauty',
    description: 'Commitment to eco-friendly practices while delivering unparalleled beauty results.',
  },
];

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-orange-600 text-lg font-bold">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const HeroSection: React.FC = () => (
  <section className="relative h-screen bg-orange-50 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white opacity-70"></div>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center"
    >
      <h1 className="text-5xl font-extrabold text-orange-600">luxury LRP cosmetics</h1>
      <p className="mt-4 text-lg text-gray-800">Elevate your beauty with our exclusive range of luxury cosmetics.</p>
      <button className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
        Explore Now <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </motion.div>
    <Suspense fallback={null}>
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Preload all />
        {/ 3D Model Example /}
        {/ <Your3DModel /> /}
      </Canvas>
    </Suspense>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-orange-600">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => (
  <main>
    <HeroSection />
    <FeaturesSection />
  </main>
);

export default HomePage;
