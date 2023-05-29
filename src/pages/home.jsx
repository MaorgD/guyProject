import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import CircleAnima from '../components/ui/animation/circleAnima';
import LoginForm from '../components/auth/loginForm';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserInfo } from '../redux/featchers/userSlice';
import { TOKEN_NAME } from '../services/servise';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()

  const { user } = useSelector((state) => state.userSlice)
  useEffect(() => {
    if (localStorage.getItem(TOKEN_NAME)) {

      if (user?.msg === 'success') {
          console.log('success')
          nav("/dashboard")
      }
      else if (user?.msg === 'failed') {
          console.log('failed')
          nav('/')
      }
  } else {
      console.log('no token found')
      // nav('/')
  }
  }, [user])
  
  

  return (
    <Box sx={{
      backgroundPosition: 'inherit',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'

    }}>

      <Box display="flex" overflow={'hidden'} justifyContent="center" alignItems="center" height="100vh">
        <CircleAnima boxType="homeBox">
          <LoginForm />

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