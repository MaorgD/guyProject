import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import CircleAnima from '../components/ui/animation/circleAnima';
import LoginForm from '../components/auth/loginForm';

const Home = () => {
  return (
    <Box sx={{
      backgroundPosition: 'inherit',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'

    }}>

      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircleAnima  boxType="homeBox">
          <LoginForm/>
          
          <Button variant="contained" color="secondary" size="large" style={{ marginBottom: 20 }}>
            <Link style={{ color: "white", textDecoration: 'none' }} to={"/signUp"}>Sign Up</Link>
          </Button>
          <Link style={{ color: "white", textDecoration: 'none' }} to={"/requestResetPass"}>Forgot Password</Link>
        </CircleAnima>

      </Box>
    </Box>
  )
}

export default Home