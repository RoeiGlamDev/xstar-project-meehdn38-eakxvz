import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import clsx from 'clsx';

interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Glam',
    photo: '/images/testimonials/sophia.jpg',
    rating: 5,
    review: 'Luxury LRP cosmetics transformed my skincare routine. My skin feels rejuvenated and looks radiant.',
  },
  {
    name: 'Chloe Elegance',
    photo: '/images/testimonials/chloe.jpg',
    rating: 5,
    review: 'The products are divine! The scents, the textures, everything speaks luxury.',
  },
  {
    name: 'Isabella Chic',
    photo: '/images/testimonials/isabella.jpg',
    rating: 4,
    review: 'A luxurious experience in every sense. I love the results!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 sm:px-16 md:px-32 lg:px-48">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mt-4">Hear from those who have experienced the luxury of luxury LRP cosmetics.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-orange-100 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <img
                src={testimonial.photo}
                alt={${testimonial.name}'s photo}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-orange-600 mt-4">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <div className="flex justify-center">
              {[...Array(5)].map((star, i) => (
                <span key={i} className={clsx('text-orange-400', { 'opacity-50': i >= testimonial.rating })}>
                  &#9733;
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-16">
        <Canvas className="h-64">
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default TestimonialsSection;
