import React from 'react'
import { motion } from "framer-motion";
import { pageAnimation } from './animation';
const BoxRiseUp = ({ children ,boxType}) => {
  return (
    <motion.div
    className={boxType}
    variants={pageAnimation} initial='hidden' animate='show'  exit='exit'
      >
      {children}
    </motion.div>
    // <motion.div
    
    //   className={boxType}
    //   animate={{
    //     scale: [1, 1.5, 1.5, 1, 1],
    //     rotate: [0, 0, 180, 180, 0],
    //     borderRadius: ["0%", "5%", "50%", "50%", "10%"]
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     repeat: 0,
    //     repeatDelay: 1
    //   }}>
    //   {children}
    // </motion.div>
  )
}

export default BoxRiseUp