import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import clsx from 'clsx';

interface AboutSectionProps {}

const LuxuryCosmeticsModel: React.FC = () => {
  const { scene } = useGLTF('/path/to/luxury-cosmetics.glb');
  return <primitive object={scene} dispose={null} />;
};

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="bg-white text-orange-600 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            At <strong>luxury LRP cosmetics</strong>, we have redefined elegance in the cosmetics industry. Our journey began with a vision to blend luxury with innovation, creating products that exude sophistication and timeless beauty. Our passion for excellence drives us to harness the finest ingredients and cutting-edge technology to deliver unparalleled quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission at <strong>luxury LRP cosmetics</strong> is to empower individuals through luxury and self-expression. We are committed to sustainability and ethical practices, ensuring our products not only enhance beauty but also respect the world we live in.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
            <p className="text-lg leading-relaxed">
              Our team of experts, with decades of experience in the cosmetics industry, is dedicated to crafting products that cater to diverse beauty needs. Their expertise and passion are the backbone of <strong>luxury LRP cosmetics</strong>, ensuring that every product stands as a testament to luxury and quality.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <Canvas className="h-96">
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <LuxuryCosmeticsModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
