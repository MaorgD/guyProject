import React, { useEffect, Suspense } from 'react'
// import Layout from './layout/layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { TOKEN_NAME } from './services/servise'
import { getUserInfo } from './redux/featchers/userSlice'
import Loader from './components/ui/loader/loader'
import Home from './components/auth/home'
import Logout from './components/auth/logout'
import Layout from './layout/layout'
import ResponsiveAppBar from './layout/header/navForHome'
// import Logout from './components/auth/logout'


// "@reduxjs/toolkit": "^1.9.3",
// "heroicons": "^2.0.17",
// "react-hook-form": "^7.43.9",
// "react-loader-spinner": "^5.3.4",
// "react-redux": "^8.0.5",
// "react-router-dom": "^6.10.0"

const RequestResetPass = React.lazy(() => import('./components/auth/requestResetPass'));
const ResetPassword = React.lazy(() => import('./components/auth/resetPassword'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/signUp'));
const NotFound = React.lazy(() => import('./components/notFound'));
const Messages = React.lazy(() => import('./components/messages'));


const AppRoutes = () => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        if (localStorage.getItem(TOKEN_NAME)) {
            dispatch(getUserInfo())
        }
    }, [])

    return (
        <Suspense fallback={
            <div className='w-full flex justify-center h-screen items-center'>

                <Loader />
            </div>
        }
        >

            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/messages/' element={<Messages />} />
                    <Route path='/logout/' element={<Logout />} />

                    <Route path='/requestResetPass' element={<RequestResetPass />} />
                    <Route path='/resetPassword/:userId/:uniqueString' element={<ResetPassword />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/nav' element={<ResponsiveAppBar />} />

                    {/*  Layout */}
                    <Route path='/user' element={<Layout />}>
                        {/* Outlet */}


                    </Route>




                    {/*   (*) => Rest of routes!?!?  */}
                    <Route path='*' element={<NotFound />} />

                </Routes>
                {/* {showiteminfo ? <FullItemMenu key={item._id} item={item} /> : null}
                {showorderiteminfo ? <FullItemOrder key={item._id} item={item} /> : null}
                {showadditem ? <AddItemMenu /> : null}
                {showEditItem ? <EditItemMenu item={item} /> : null}
                {showTableItem ? <FullTableItem item={TableItem} /> : null} */}
            </Router>
        </Suspense>
    )
}

export default AppRoutes;