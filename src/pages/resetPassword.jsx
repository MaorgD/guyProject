import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import { useState } from 'react';
import { API_URL, doApiMethod } from '../services/servise';
import { Box, Button } from '@mui/material';
import BoxRiseUp from '../components/ui/animation/boxRiseUp';
import InputPassword from '../components/ui/inputs/inputPassword';
import InputConfirmPassword from '../components/ui/inputs/inputConfirmPassword';
// import InputPasswordLinked from '../ui/inputs/groupLinked/inputPasswordLinked';
// import InputConfirmPassword from '../ui/inputs/groupLinked/inputConfirmPassword';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ResetPassword = () => {
    const params = useParams();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nav = useNavigate();
    let { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {
        setIsSubmitted(true);
        delete _dataBody.password2
        doApi(_dataBody)
    }

    const doApi = async (_dataBody) => {
        try {
            if (params.userId && params.uniqueString) {
                _dataBody.userId = params.userId;
                _dataBody.uniqueString = params.uniqueString;
                const url = API_URL + '/users/resetPassword';
                const { data } = await doApiMethod(url, "POST", _dataBody);
                if (data) {
                    nav('/login')
                }
            }

        } catch (err) {
            alert(err.response.data.msg || err.response.data[0].message)
            setIsSubmitted(false);
        }
    }
    return (
        <Box sx={{
            backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")',
            backgroundPosition: 'inherit',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }}>

            <Box overflow={'hidden'} display="flex" justifyContent="center" alignItems="center" height="100vh">
                <BoxRiseUp boxType="resetPasswordBox">
                    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSub)} action="#" method="POST">
                        <InputPassword label={" Password "}
                            show={true}
                            register={register}
                            errors={errors} />
                        <InputConfirmPassword label={"Confirm Password "}
                            register={register}
                            getValues={getValues}
                            show={true}
                            errors={errors} />

                        {!isSubmitted ?
                            <Button type='submit' >submit</Button>
                            :
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="blue"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ 'display': "flex", 'justifyContent': "center" }}
                                wrapperClass=""
                                visible={true}
                            />
                        }

                    </form>


                </BoxRiseUp>

            </Box>
        </Box>

    )
}

export default ResetPassword