import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const Home = React.lazy(() => import('./components/auth/home'));
const Layout = React.lazy(() => import('./layout/layout'));
const Logout = React.lazy(() => import('./components/auth/logout'));
const RequestResetPass = React.lazy(() => import('./components/auth/requestResetPass'));
const ResetPassword = React.lazy(() => import('./components/auth/resetPassword'));
const SignUp = React.lazy(() => import('./components/auth/signUp'));
const NotFound = React.lazy(() => import('./components/notFound'));
const Messages = React.lazy(() => import('./components/messages'));

function AnimatedRoutes() {
    const location = useLocation();
    console.log(location)
    return (
        <AnimatePresence mode="wait">
             <Routes key={location.pathname} location={location}>
                    {/* login */}
                    <Route path='/' element={<Home />} />
                    <Route path='/signUp' element={<SignUp />} />
                    
                    <Route path='/requestResetPass' element={<RequestResetPass />} />
                    <Route path='/resetPassword/:userId/:uniqueString' element={<ResetPassword />} />
                    
                    <Route path='/messages/' element={<Messages />} />
                    <Route path='/logout/' element={<Logout />} />

                    {/*  Layout */}
                    <Route path='/' element={<Layout />}>
                        {/* Outlet */}


                    </Route>




                    {/*   (*) => Rest of routes!?!?  */}
                    <Route path='*' element={<NotFound />} />

                </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;