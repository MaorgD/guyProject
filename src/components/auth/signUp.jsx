import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import { useState } from 'react';
import { API_URL, doApiMethodSignUpLogin } from '../../services/servise';
import CircleAnima from '../ui/animation/circleAnima';
// import Box from '@mui/material/Box';
import InputFirstName from '../ui/inputs/inputFirstName ';
import InputLastName from '../ui/inputs/inputLastName';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import InputEmail from '../ui/inputs/inputEmail';
import InputPhone from '../ui/inputs/inputPhone';
import InputDate from '../ui/inputs/inputDate';
import InputPassword from '../ui/inputs/inputPassword';
import InputConfirmPassword from '../ui/inputs/inputConfirmPassword';

// import InputEmailLinked from '../ui/inputs/groupLinked/inputEmailLinked';
// import InputFirstName from '../ui/inputs/groupLinked/inputFirstName';
// import InputLastName from '../ui/inputs/groupLinked/InputLastName';
// import InputPhoneLinked from '../ui/inputs/groupLinked/inputPhoneLinked';
// import InputPasswordLinked from '../ui/inputs/groupLinked/inputPasswordLinked';
// import InputConfirmPassword from '../ui/inputs/groupLinked/inputConfirmPassword';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nav = useNavigate();

    let { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {
        // delete _dataBody.confirmPassword
        setIsSubmitted(true);
        console.log(_dataBody)
        // doApi(_dataBody)
    }

    const doApi = async (_dataBody) => {
        try {
            const url = API_URL + '/users/manager';
            const { data } = await doApiMethodSignUpLogin(url, "POST", _dataBody);
            if (data.email) {
                nav(`/messages/?name=${data.fullName.firstName}`)
            }
        } catch (err) {
            alert(err.response.data.msg || err.response.data[0].message)
            setIsSubmitted(false);
        }
    }
    return (
        <Box sx={{
            backgroundPosition: 'inherit',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'

        }}>

            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircleAnima boxType="signUpBox">
                    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSub)} action="#" method="POST">

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputFirstName label={" First Name"}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLastName label={" Last Name"}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputEmail label={" Email address "}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputPhone label={" Phone Number "}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputDate label={" date of birth "}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputPassword label={" Password "}
                                    show={true}
                                    register={register}
                                    errors={errors} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputConfirmPassword label={"Confirm Password "}
                                    register={register}
                                    getValues={getValues}
                                    show={true}
                                    errors={errors} />
                            </Grid>
                        </Grid>


                        <Button type='submit' >submit</Button>
                    </form>
                    <Button variant="contained" color="secondary" size="large" style={{ marginBottom: 20 }}>
                        <Link style={{ color: "white", textDecoration: 'none' }} to={"/"}>Sign In</Link>
                    </Button>
                    <Link style={{ color: "white", textDecoration: 'none' }} to={"/requestResetPass"}>Forgot Password</Link>
                </CircleAnima>

            </Box>
        </Box>
    )
}

export default SignUp