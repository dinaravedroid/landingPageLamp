import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageAnimator = ({ key, src, alt }) => {
    return (
        <AnimatePresence>
            <motion.img
                key={key}
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
            />
        </AnimatePresence>
    );
};

export default ImageAnimator;

