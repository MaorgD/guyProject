import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../services/servise';
import { getUserInfo } from '../../redux/featchers/userSlice';
import { Box, Button } from '@mui/material';
import InputEmail from '../ui/inputs/groupSpace/inputEmail';
import InputPassword from '../ui/inputs/groupSpace/inputPassword';
// import InputPasswordLinked from '../ui/inputs/groupLinked/inputPasswordLinked';
// import InputEmailLinked from '../ui/inputs/groupLinked/inputEmailLinked';
// import InputEmailLinked from '../../ui/inputs/groupLinked/inputEmailLinked';
// import InputPasswordLinked from '/ui/inputs/groupLinked/inputPasswordLinked';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Login = () => {
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

            if (data.token) {
                localStorage.setItem(TOKEN_NAME, data.token);
                if (data.rule.includes("manager")) {
                    nav("/layoutmanger");
                }
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
        <Box sx={{
            backgroundPosition: 'inherit',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'

        }}>

            <Box  display="flex"flexDirection={'column'} justifyContent="center" alignItems="center" height="100vh">
                <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSub)} action="#" method="POST">
                    <InputEmail label={" Email address "}
                        register={register}
                        errors={errors} />
                    <InputPassword label={" Password "}
                        register={register}
                        errors={errors} />
                    <Button type='submit' >submit</Button>
                </form>
                <Button variant="contained" color="secondary" size="small" style={{ marginTop: 20 }}>
                    <Link style={{ color: "white", textDecoration: 'none' }} to={"/signUp"}>Registration</Link>
                </Button>
                <Link href="/login" style={{ color: "black", textDecoration: 'none', fontSize: "14px" }} to={"/requestResetPass"}>Forgot Password</Link>
            </Box>
            </Box>
        // <>
        //     <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        //         <div className="w-full max-w-md space-y-8">
        //             <div>
        //                 <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        //                     Log in
        //                 </h2>
        //             </div>
        // <form onSubmit={handleSubmit(onSub)} className="mt-8 space-y-6" action="#" method="POST">
        //                 <div className="-space-y-px rounded-md shadow-sm">
        //                     {/* <InputEmailLinked
        //                         label={" Email address "}
        //                         register={register}
        //                         errors={errors}
        //                         className={"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}
        //                     />
        //                     <InputPasswordLinked
        //                         label={" Password "}
        //                         register={register}
        //                         errors={errors}
        //                         className={classNames(errors.password ? "relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        //                             :
        //                             "relative block w-full appearance-none  rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm")}
        //                     /> */}

        //                 </div>

        //                 <div className="flex items-center justify-between">
        //                     <div className="flex items-center">
        //                         <input
        //                             id="remember-me"
        //                             name="remember-me"
        //                             type="checkbox"
        //                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        //                         />
        //                         <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        //                             Remember me
        //                         </label>
        //                     </div>

        //                     <div className="text-sm">
        //                         <div className="text-sm">
        //                             <Link to={'/requestResetPass'} className="font-medium text-indigo-600 hover:text-indigo-500">
        //                                 Forgot your password?
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div>

        //                     {!isSubmitted ?
        //                         <button
        //                             type="submit"
        //                             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        //                         >
        //                             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                             </span>
        //                             Log in
        //                         </button>
        //                         :
        //                         <ThreeDots
        //                             height="80"
        //                             width="80"
        //                             radius="9"
        //                             color="blue"
        //                             ariaLabel="three-dots-loading"
        //                             wrapperStyle={{}}
        //                             wrapperClass="flex justify-center"
        //                             visible={true}
        //                         />
        //                     }

        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </>

    )
}

export default Login