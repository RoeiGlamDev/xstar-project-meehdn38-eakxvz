import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            className="mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">luxury LRP cosmetics</h2>
            <p className="mt-2 text-sm">
              Elevate your beauty routine with our luxurious, high-end cosmetics.
            </p>
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="flex space-x-4 mt-6 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-orange-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-orange-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-orange-300"
            >
              <FaTwitter size={20} />
            </a>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
