'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import clsx from 'clsx';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface HistoryEvent {
  year: number;
  description: string;
}

const team: TeamMember[] = [
  { name: 'Anna Lux', role: 'Founder & CEO', bio: 'Pioneer in luxury cosmetics with over 20 years of experience.' },
  { name: 'John Doe', role: 'Chief Chemist', bio: 'Expert in innovative formulations and product development.' },
  { name: 'Emily Stone', role: 'Creative Director', bio: 'Visionary in luxury branding and design.' },
];

const history: HistoryEvent[] = [
  { year: 2005, description: 'Founded luxury LRP cosmetics with a vision to redefine luxury beauty.' },
  { year: 2010, description: 'Launched our groundbreaking anti-aging serum.' },
  { year: 2020, description: 'Expanded globally with a presence in over 50 countries.' },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">About luxury LRP cosmetics</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our History</h2>
        <div className="space-y-4">
          {history.map((event) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pl-4 border-l-4 border-orange-600"
            >
              <h3 className="text-xl font-medium">{event.year}</h3>
              <p>{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-100 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-lg font-medium">{member.role}</p>
              <p className="mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Values</h2>
        <p className="leading-relaxed">
          At luxury LRP cosmetics, we are committed to excellence, innovation, and sustainability. Our products are crafted with the finest ingredients to provide a luxurious experience while maintaining a strong focus on environmental responsibility.
        </p>
        <Canvas className="mt-8 h-64">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <animated.mesh>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
          </animated.mesh>
        </Canvas>
      </section>
    </div>
  );
};

export default About;
