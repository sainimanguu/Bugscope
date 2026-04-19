import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center font-display font-medium tracking-wide transition-all focus:outline-none rounded-sm px-5 py-2.5 text-sm";
  const widthClass = fullWidth ? "w-full" : "";
  
  const variants = {
    primary: "bg-[image:var(--image-gradient-primary)] text-white shadow-lg shadow-primary/20 hover:shadow-primary/40",
    secondary: "ghost-border text-on-surface hover:bg-surface-container-high",
    tertiary: "text-primary hover:underline underline-offset-4 bg-transparent",
    danger: "bg-error/10 text-error ghost-border hover:bg-error/20"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
