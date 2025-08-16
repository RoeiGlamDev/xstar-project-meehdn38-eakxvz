import { useState, useCallback } from 'react';
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import { clsx } from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LuxuryModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center',
        isOpen ? 'block' : 'hidden'
      )}
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md"></div>
      <motion.div
        className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <button
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 id="modal-title" className="text-2xl font-semibold text-orange-500">
          Welcome to luxury LRP cosmetics
        </h2>
        <p className="mt-4 text-gray-700">
          Experience the epitome of elegance and sophistication with our exclusive range of cosmetics, crafted to perfection for the modern connoisseur.
        </p>
        <div className="mt-8">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Suspense fallback={null}>
              <Luxury3DModel />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </div>
  );
};

const Luxury3DModel: React.FC = () => {
  const { scene } = useGLTF('/path/to/your/luxury-model.glb');
  return <primitive object={scene} />;
};

export default LuxuryModal;
