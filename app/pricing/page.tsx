// app/pricing/page.tsx

import React, { Suspense, memo } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaQuestionCircle } from 'lucide-react';
import clsx from 'clsx';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$50",
    features: ["Lipstick", "Foundation", "Mascara"],
  },
  {
    title: "Premium",
    price: "$150",
    features: ["All Basic items", "Serum", "Anti-Aging Cream"],
  },
  {
    title: "Luxury",
    price: "$300",
    features: ["All Premium items", "Personalized Consultation", "Exclusive Access to New Lines"],
  },
];

const FAQ = memo(() => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold text-orange-600">Frequently Asked Questions</h2>
    <div className="mt-6">
      <div className="flex items-start mt-4">
        <FaQuestionCircle className="text-orange-600 mr-2" />
        <div>
          <h3 className="font-semibold">What is the return policy?</h3>
          <p className="text-sm">Our return policy lasts 30 days...</p>
        </div>
      </div>
      <div className="flex items-start mt-4">
        <FaQuestionCircle className="text-orange-600 mr-2" />
        <div>
          <h3 className="font-semibold">Do you ship internationally?</h3>
          <p className="text-sm">Yes, we offer worldwide shipping...</p>
        </div>
      </div>
    </div>
  </div>
));

const PricingTable = memo(() => (
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    {pricingPlans.map((plan, index) => (
      <motion.div
        key={index}
        className="border rounded-lg p-6 bg-white shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-bold text-orange-600">{plan.title}</h3>
        <p className="mt-4 text-lg">{plan.price}</p>
        <ul className="mt-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="text-sm">{feature}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
));

const PricingPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-8">
    <header className="text-center">
      <h1 className="text-4xl font-extrabold text-orange-700">luxury LRP cosmetics Pricing</h1>
      <p className="mt-4 text-lg text-gray-700">Choose a plan that suits your luxury needs</p>
    </header>
    <PricingTable />
    <FAQ />
    <Suspense fallback={<div>Loading 3D View...</div>}>
      <Canvas className="h-64 mt-12">
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls autoRotate enableZoom={false} />
        {/ Add 3D cosmetic product models here /}
      </Canvas>
    </Suspense>
  </div>
);

export default PricingPage;
