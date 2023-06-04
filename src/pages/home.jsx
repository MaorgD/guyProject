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

  const userData  = useSelector((state) => state.userSlice)
  useEffect(() => {
    console.log("home userData")
    console.log(userData)
    
    if (localStorage.getItem(TOKEN_NAME)) {
  // console.log(userData.status=='loading')
      if (userData.status=='success') {
          console.log('success')
          console.log(userData.status)
          nav('/dashboard')
      }
      else if (userData.status=='loading') {
          console.log('loading')
      }
      else if(userData.status=='failed'){
        console.log('failed')
      }
  } else {
      console.log('no token found')
  }
  }, [userData])
  

  return (
    <Box sx={{
      backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")',
      backgroundPosition: 'inherit',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

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