import React from 'react'
import { Link } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import BoxRiseUp from '../components/ui/animation/boxRiseUp';
import SignUpForm from '../components/auth/signUpForm';

const SignUp = () => {

    return (
        <Box sx={{
            backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")',
            backgroundPosition: 'inherit',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }}>
            <Box overflow={'hidden'} display="flex" justifyContent="center" alignItems="center" height="100vh">
                <BoxRiseUp boxType="signUpBox">
                    <SignUpForm />
                    <Button variant="contained" color="secondary" size="large" style={{ marginBottom: 20 }}>
                        <Link style={{ color: "white", textDecoration: 'none' }} to={"/"}>Sign In</Link>
                    </Button>
                    <Link style={{ color: "white", textDecoration: 'none' }} to={"/requestResetPass"}>Forgot Password</Link>
                </BoxRiseUp>

            </Box>
        </Box>
    )
}

export default SignUp