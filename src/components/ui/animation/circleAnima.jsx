import React from 'react'
import { motion } from "framer-motion";

const CircleAnima = ({ children }) => {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 0,
        repeatDelay: 1
      }}>
      {children}
    </motion.div>
  )
}

export default CircleAnima