import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html, useGLTF } from '@react-three/drei';

interface CTASectionProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  headline,
  subheadline,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-white text-orange-900 py-16 px-4 md:px-8 relative overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{headline}</h1>
        <p className="text-lg md:text-xl mb-8">{subheadline}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform"
        >
          {buttonText}
        </motion.button>
      </motion.div>
      <Canvas className="absolute inset-0 w-full h-full pointer-events-none">
        <Suspense fallback={null}>
          <Luxury3DModel />
        </Suspense>
      </Canvas>
    </section>
  );
};

const Luxury3DModel = () => {
  const { nodes } = useGLTF('/path-to-your-3d-model.gltf') as any; // Adjust path and types as necessary

  return (
    <group>
      <mesh geometry={nodes.luxuryModel.geometry}>
        <meshStandardMaterial color="#FFA500" /> {/ Orange Color /}
      </mesh>
    </group>
  );
};

export default CTASection;
