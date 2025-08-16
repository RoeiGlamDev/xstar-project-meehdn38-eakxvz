import { motion } from 'framer-motion';
import { FC } from 'react';
import { useMemo } from 'react';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  }), [delay]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
