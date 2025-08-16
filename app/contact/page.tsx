'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import type { NextPage } from 'next';
import clsx from 'clsx';

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        onSubmit(data);
      }}
      className="space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white">Name</label>
        <input type="text" id="name" name="name" required className="p-2 border border-orange-500 rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white">Email</label>
        <input type="email" id="email" name="email" required className="p-2 border border-orange-500 rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-white">Message</label>
        <textarea id="message" name="message" rows={4} required className="p-2 border border-orange-500 rounded-md"></textarea>
      </div>
      <motion.div
        type="submit"
        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  );
};

const LocationMap: React.FC = () => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        title="luxury LRP cosmetics Location"
        src="https://maps.google.com/maps?q=luxury%20LRP%20cosmetics&t=&z=13&ie=UTF8&iwloc=&output=embed"
        aria-label="luxury LRP cosmetics location on map"
      />
    </div>
  );
};

const BusinessHours: React.FC = () => {
  return (
    <div className="text-white mt-8">
      <h4 className="text-orange-500">Business Hours</h4>
      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      <p>Saturday: 10:00 AM - 4:00 PM</p>
      <p>Sunday: Closed</p>
    </div>
  );
};

const Cosmetic3DModel: React.FC = () => {
  const { nodes } = useGLTF('/path/to/cosmetic-model.glb');
  return (
    <Canvas className="w-full h-96">
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <OrbitControls />
      <mesh geometry={nodes.Cosmetic.geometry} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff8500" />
      </mesh>
    </Canvas>
  );
};

const ContactPage: NextPage = () => {
  const handleFormSubmit = (data: FormData) => {
    // Handle form data
    console.log('Form submitted:', Object.fromEntries(data.entries()));
  };

  return (
    <div className={clsx("min-h-screen", "bg-orange-50", "p-8", "text-center")}>
      <motion.div
        className="text-4xl text-orange-500 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>

      <div className="max-w-xl mx-auto mt-12">
        <ContactForm onSubmit={handleFormSubmit} />
        <LocationMap />
        <BusinessHours />
      </div>

      <div className="mt-16">
        <motion.div
          className="text-3xl text-orange-500 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore Our Collection
        </motion.h2>
        <Cosmetic3DModel />
      </div>
    </div>
  );
};

export default ContactPage;
