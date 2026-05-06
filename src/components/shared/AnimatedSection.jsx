import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.25, 0, 1],
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;