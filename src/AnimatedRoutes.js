import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const Home = React.lazy(() => import('./pages/home'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Layout = React.lazy(() => import('./layout/layout'));
const Logout = React.lazy(() => import('./components/auth/logout'));
const RequestResetPass = React.lazy(() => import('./pages/requestResetPass'));
const ResetPassword = React.lazy(() => import('./pages/resetPassword'));
const SignUp = React.lazy(() => import('./pages/signUp'));
const NotFound = React.lazy(() => import('./components/notFound'));
const Messages = React.lazy(() => import('./pages/messages'));

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
                        <Route path='/dashboard' element={<Dashboard />} />
                        {/* <Route path='/Cards' element={<Cards />} /> */}


                    </Route>




                    {/*   (*) => Rest of routes!?!?  */}
                    <Route path='*' element={<NotFound />} />

                </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;