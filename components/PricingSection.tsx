import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { clsx } from 'clsx';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Radiant Essentials',
    price: '$99',
    features: ['Basic Skincare Consultation', 'Custom Blending Service', 'Free Sample Kit'],
  },
  {
    title: 'Glamorous Glow',
    price: '$199',
    features: ['Advanced Skincare Consultation', 'Personalized Makeup Session', 'Luxury Sample Kit'],
  },
  {
    title: 'Ultimate Elegance',
    price: '$299',
    features: ['Complete Skincare & Makeup Consultation', 'Exclusive Product Discounts', 'VIP Sample Box'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="text-4xl font-extrabold text-orange-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          luxury LRP cosmetics Services Pricing
        </motion.h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.title}
              className={clsx(
                'border border-orange-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300',
                'flex flex-col'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-8 bg-orange-50">
                <h3 className="text-2xl font-bold text-orange-600">{tier.title}</h3>
                <p className="mt-4 text-lg text-gray-700">{tier.price}</p>
              </div>
              <ul className="flex-1 bg-white p-8 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="p-8 bg-orange-50 text-center">
                <button
                  className="px-6 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-colors duration-300"
                  aria-label={Select ${tier.title} plan}
                >
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Canvas className="h-96 mt-12">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <LuxuryCosmeticsModel />
        </Suspense>
      </Canvas>
    </section>
  );
};

const LuxuryCosmeticsModel: React.FC = () => {
  const { nodes } = useGLTF('/3d/luxury-cosmetics.glb');
  return <primitive object={nodes.Scene} />;
};

export default PricingSection;
