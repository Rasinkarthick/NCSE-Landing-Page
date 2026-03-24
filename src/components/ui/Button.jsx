import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'btn btn-primary',
        secondary: 'btn btn-secondary',
        ghost: 'bg-transparent border border-white/20 text-white hover:bg-white/10'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
