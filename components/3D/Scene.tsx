import { useMemo } from 'react';
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SceneProps {
  modelPath: string;
}

const Scene: React.FC<SceneProps> = ({ modelPath }) => {
  const { nodes, materials } = useGLTF(modelPath) as any;

  const modelMemo = useMemo(() => {
    return (
      <group dispose={null}>
        <mesh geometry={nodes.Cosmetic.geometry} material={materials['Material.001']} />
      </group>
    );
  }, [nodes, materials]);

  return (
    <div className={clsx('relative', 'w-full', 'h-screen', 'bg-white')}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            {modelMemo}
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>
      <div
        className={clsx(
          'absolute',
          'bottom-10',
          'left-1/2',
          'transform',
          '-translate-x-1/2',
          'text-center',
          'text-orange-500',
          'text-xl',
          'font-bold'
        )}
      >
        <h1>Welcome to luxury LRP cosmetics</h1>
        <p className="text-white">
          Experience the epitome of elegance in the world of cosmetics.
        </p>
      </div>
    </div>
  );
};

export default Scene;
