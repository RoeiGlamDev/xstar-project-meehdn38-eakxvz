import { useState } from 'react';
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import clsx from 'clsx';

interface NewsletterSectionProps {}

const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle email capture logic here
    console.log(Email submitted: ${email});
  };

  return (
    <section className="bg-white py-12" aria-labelledby="newsletter-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 id="newsletter-heading" className="text-4xl font-extrabold text-orange-600">
            Stay Updated with luxury LRP cosmetics
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Join our newsletter to receive the latest news and exclusive offers from luxury LRP cosmetics.
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <form onSubmit={handleSubmit} className="sm:flex">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button
              type="submit"
              className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto flex-shrink-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <Canvas>
          <Suspense fallback={null}>
            <LuxuryCosmetic3DModel />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

const LuxuryCosmetic3DModel: React.FC = () => {
  const { nodes, materials } = useGLTF('/path/to/3d-model.glb') as any;

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={materials['Material.001']}
      />
      <Html position={[0, 0, 0]}>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-semibold text-orange-600">Luxury at its finest</h3>
          <p className="text-gray-500">Experience the opulence with luxury LRP cosmetics.</p>
        </div>
      </Html>
    </group>
  );
};

export default NewsletterSection;
