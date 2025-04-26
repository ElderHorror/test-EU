/**
 * Animation utility functions and configurations
 */

/**
 * Framer Motion variants for fade-in animation
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

/**
 * Framer Motion variants for slide-up animation
 */
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion variants for slide-in-left animation
 */
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion variants for slide-in-right animation
 */
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion variants for scale animation
 */
export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion variants for staggered children animation
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Framer Motion variants for staggered child items
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Framer Motion variants for page transitions
 */
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

/**
 * Framer Motion variants for button hover animation
 */
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
};

/**
 * Framer Motion variants for card hover animation
 */
export const cardHover = {
  rest: { 
    y: 0,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    y: -8,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion variants for text reveal animation
 */
export const textReveal = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

/**
 * Framer Motion variants for hero section background animation
 */
export const heroBackground = {
  hidden: { scale: 1.1, opacity: 0.8 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 1.5,
      ease: "easeOut"
    }
  }
};
