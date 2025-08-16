import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormInputs) => {
    console.log('Form Data:', data);
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-orange-600 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Get in Touch with luxury LRP cosmetics
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div 
            className="md:w-1/2 mb-8"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
          >
            <form onSubmit={() => handleSubmit(onSubmit)} className="bg-orange-50 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-orange-600 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={clsx("w-full p-3 border rounded-md", errors.name && 'border-red-500')}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-600 mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-orange-600 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={clsx("w-full p-3 border rounded-md", errors.email && 'border-red-500')}
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="reason" className="block text-orange-600 mb-2">Reason for Contact</label>
                <select 
                  id="reason" 
                  className="w-full p-3 border rounded-md"
                  {...register('reason', { required: 'Please select a reason' })}
                >
                  <option value="">Select a reason</option>
                  <option value="productInquiry">Product Inquiry</option>
                  <option value="storeLocation">Store Location</option>
                  <option value="feedback">Feedback</option>
                </select>
                {errors.reason && <p className="text-red-600 mt-1">{errors.reason.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-orange-600 mb-2">Message</label>
                <textarea 
                  id="message" 
                  className={clsx("w-full p-3 border rounded-md", errors.message && 'border-red-500')}
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className="text-red-600 mt-1">{errors.message.message}</p>}
              </div>
              <button 
                type="submit" 
                className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-all"
              >
                Submit
              </button>
              {submitted && <p className="text-green-600 mt-4">Thank you for contacting us!</p>}
            </form>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
          >
            <Suspense fallback={null}>
              <Canvas className="w-full h-64">
                <ambientLight />
                <OrbitControls />
                <LuxuryCosmeticsModel />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-lg">Business Hours: Mon-Fri 9am - 5pm</p>
          <p className="text-lg">Location: 123 Luxury St, Beauty City</p>
        </motion.div>
      </div>
    </section>
  );
};

const LuxuryCosmeticsModel: React.FC = () => {
  const { scene } = useGLTF('/path/to/luxury-cosmetics-model.glb');

  return <primitive object={scene} />;
};

export default ContactSection;
