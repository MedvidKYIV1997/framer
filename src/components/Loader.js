import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        x: [-20, 20, 20, -20, -20],
        y: [-20, -20, 20, 20, -20],
        transition: {
            x: {
                loop: Infinity,
                duration: 0.7
            },
            y: {
                loop: Infinity,
                duration: 0.7
            }
        }
    }
};

const Loader = () => {
    const [animation, cycleAnimation] = useCycle(
        'animationOne',
        'animationTwo'
    );

    return (
        <>
            <motion.div
                className="loader"
                variants={loaderVariants}
                animate={animation}
            />

            <div onClick={cycleAnimation}>Cycle Loader</div>
        </>
    );
};

export default Loader;
