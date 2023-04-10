import React from 'react'
import Box from '@mui/material/Box';
import { Button, Link } from '@mui/material';
import { motion } from "framer-motion";
import { Link as ReactLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ 
      backgroundPosition: 'inherit',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
      backgroundImage:'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'
       
      }}>

    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    
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
      }}
    >
      
      <Button variant="contained" color="primary" size="large" style={{ marginBottom: 20 }}>
        <ReactLink style={{color:"white",textDecoration:'none'}} to={"/login"}>LOGIN</ReactLink>
      </Button>
      <Button variant="contained" color="secondary" size="large" style={{ marginBottom: 20 }}>
      <ReactLink style={{color:"white",textDecoration:'none'}} to={"/signUp"}>Registration</ReactLink>
      </Button>
      <ReactLink href="/login" style={{color:"white",textDecoration:'none'}} to={"/requestResetPass"}>Forgot Password</ReactLink>
    </motion.div>
  </Box>
    </Box>
  )
}

export default Home