import { motion } from 'framer-motion';

const AnimatedText = ({ children, x, y}) => {
    return (
        <motion.div
            initial={{ x: x, y: y, opacity: 0, height: '100%' }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedText