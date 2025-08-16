import { useMemo } from 'react';
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FaGem, FaFlask, FaLeaf } from 'react-icons/fa';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Exquisite Formulations',
    description: 'Crafted with precision and luxury, our products represent the epitome of high-end cosmetics.',
    icon: <FaGem className="text-orange-500" />,
  },
  {
    title: 'Advanced Skin Science',
    description: 'Utilizing cutting-edge technology to deliver proven skincare results.',
    icon: <FaFlask className="text-orange-500" />,
  },
  {
    title: 'Sustainable Luxury',
    description: 'Committed to preserving nature while delivering luxury skincare solutions.',
    icon: <FaLeaf className="text-orange-500" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          id="features-heading"
          className="text-3xl font-extrabold text-center text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Discover the World of Luxury LRP Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-500">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <Suspense fallback={null}>
          <Canvas className="h-64 mt-16">
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} />
            <Luxury3DModel />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
};

const Luxury3DModel: React.FC = () => {
  const { scene } = useGLTF('/luxury-model.glb');

  return <primitive object={scene} scale={0.5} />;
};

export default FeaturesSection;
