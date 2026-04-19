import { motion } from 'framer-motion';

export const GlassPanel = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      className={`bg-surface-container-high/80 backdrop-blur-xl border border-outline-variant/15 rounded-sm overflow-hidden ${className}`}
      whileHover={hoverEffect ? { scale: 1.01, backgroundColor: 'rgba(53, 53, 52, 0.9)' } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
