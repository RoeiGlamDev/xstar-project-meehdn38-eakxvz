import React, { Suspense, memo } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import clsx from 'clsx';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-white/30 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">{title}</h2>
        <p className="text-white text-sm mb-4">{description}</p>
        <div className="w-full h-48">
          <Suspense fallback={null}>
            <Canvas shadows>
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} />
              <Model imageUrl={imageUrl} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

const Model: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const { nodes } = useGLTF(imageUrl);
  return (
    <mesh geometry={nodes.default.geometry}>
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
};

export default memo