import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../services/servise';
import { getUserInfo } from '../../redux/featchers/userSlice';
import { Box, Button } from '@mui/material';
import InputEmail from '../ui/inputs/inputEmail';
import InputPassword from '../ui/inputs/inputPassword';


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
const LoginForm = () => {
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false)
    const nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {
        setIsSubmitted(true);
        doApi(_dataBody)
    }

    const doApi = async (_dataBody) => {
        try {
            const url = API_URL + '/users/login';
            const { data } = await doApiMethodSignUpLogin(url, "POST", _dataBody);

            console.log(data);
            if (data) {
                localStorage.setItem(TOKEN_NAME, data);
                    nav("/Cards");
            }
            dispatch(getUserInfo())
        }
        catch (err) {
            setIsSubmitted(false);
            // לשנות alert
            console.log(err);
        }
    }
    return (

        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSub)} action="#" method="POST">
            <InputEmail label={" Email address "}
                register={register}
                errors={errors} />
            <InputPassword label={" Password "}
                show={false}
                register={register}
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

    )
}

export default LoginForm