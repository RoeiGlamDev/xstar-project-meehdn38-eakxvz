import { useMemo } from 'react';
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { classNames } from 'clsx';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
  const model = useGLTF('/path-to-your-glb/luxury-lrp-cosmetics.glb');

  const floatingAnimation = useMemo(() => ({
    y: [-0.5, 0.5],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
    },
  }), []);

  return (
    <div className={classNames("relative w-full h-full", className)}>
      <Suspense fallback={<div className="text-orange-500">Loading...</div>}>
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <motion.div animate={floatingAnimation}>
            <primitive object={model.scene} scale={1.5} />
          </motion.group>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
        <h1 className="text-xl text-orange-500 font-bold">Experience the Luxury of LRP Cosmetics</h1>
        <p className="text-sm text-gray-700">
          Discover the exquisite range of beauty products that define elegance and sophistication.
        </p>
      </div>
    </div>
  );
};

export default FloatingElements;
