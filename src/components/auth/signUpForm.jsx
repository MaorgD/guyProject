import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner'
import InputConfirmPassword from '../ui/inputs/inputConfirmPassword'
import InputDate from '../ui/inputs/inputDate'
import InputEmail from '../ui/inputs/inputEmail'
import InputFirstName from '../ui/inputs/inputFirstName '
import InputLastName from '../ui/inputs/inputLastName'
import InputPassword from '../ui/inputs/inputPassword'
import InputPhone from '../ui/inputs/inputPhone'
import { Button, Grid } from '@mui/material';
import { API_URL, doApiMethodSignUpLogin } from '../../services/servise';

const SignUpForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nav = useNavigate();

    let { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {
        _dataBody.fullName = { firstName: _dataBody.firstName, lastName: _dataBody.lastName }
        delete _dataBody.confirmPassword
        delete _dataBody.firstName
        delete _dataBody.lastName
        setIsSubmitted(true);
        console.log(_dataBody)
        doApi(_dataBody)
    }
    const doApi = async (_dataBody) => {
        try {
            const url = API_URL + '/users';
            const { data } = await doApiMethodSignUpLogin(url, "POST", _dataBody);
            console.log(data)
            if (data.email) {
                nav(`/messages/?name=${data.fullName.firstName}`)
            }
        } catch (err) {
            console.log(err.response.data.msg || err.response.data[0].message)
            setIsSubmitted(false);
        }
    }
    return (
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

export default SignUpForm