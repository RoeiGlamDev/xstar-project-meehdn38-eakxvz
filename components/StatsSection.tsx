import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import clsx from 'clsx';

interface StatProps {
  label: string;
  value: number;
  unit?: string;
}

const StatItem: React.FC<StatProps> = ({ label, value, unit }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="text-4xl font-bold text-orange-600"
        whileHover={{ scale: 1.1 }}
      >
        {value}
        {unit}
      </motion.span>
      <span className="text-white">{label}</span>
    </motion.div>
  );
};

const Luxury3DModel: React.FC = () => {
  const { nodes } = useGLTF('/path-to-3d-model.glb'); // Ensure you replace with actual path
  return (
    <primitive object={nodes.scene} dispose={null} />
  );
};

const StatsSection: React.FC = () => {
  const stats: StatProps[] = [
    { label: 'Awards Won', value: 15 },
    { label: 'Years in Luxury', value: 10 },
    { label: 'Exclusive Products', value: 50 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-orange-600 text-center mb-8">
          Achievements of luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
        <div className="w-full h-96 relative">
          <Canvas className="bg-orange-500 rounded-lg shadow-lg">
            <Suspense fallback={<Html>Loading...</Html>}>
              <Luxury3DModel />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
