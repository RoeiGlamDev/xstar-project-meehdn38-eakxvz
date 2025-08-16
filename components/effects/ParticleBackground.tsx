import { useMemo } from 'react';
import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Particles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useMediaQuery } from 'react-responsive';

interface ParticleBackgroundProps {
  intensity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ intensity = 1000 }) => {
  const { resolvedTheme } = useTheme();
  const isReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });

  const particleSettings = useMemo(() => ({
    color: resolvedTheme === 'dark' ? '#FFA500' : '#FFFFFF',
    size: 0.05,
    count: intensity,
    opacity: 0.8,
  }), [resolvedTheme, intensity]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      <Canvas className="w-full h-full">
        <Suspense fallback={null}>
          <Particles
            color={particleSettings.color}
            size={particleSettings.size}
            count={particleSettings.count}
            opacity={particleSettings.opacity}
            position={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ParticleBackground;
