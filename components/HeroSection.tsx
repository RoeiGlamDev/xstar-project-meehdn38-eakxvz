import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-white text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <Sphere visible args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#ff7f50"
                attach="material"
                distort={0.6}
                speed={1.5}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to luxury LRP cosmetics</h1>
        <p className="text-lg mb-8">
          Discover the epitome of elegance in beauty with our premium cosmetics line. Elevate your routine with luxury LRP cosmetics.
        </p>
        <motion.div
          className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Collection
        </motion.button>
        <motion.div
          className="mt-4 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Contact Our Experts
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
