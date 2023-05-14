import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { TOKEN_NAME } from './services/servise'
import { getUserInfo } from './redux/featchers/userSlice'
import Loader from './components/ui/loader/loader'
import AnimatedRoutes from './AnimatedRoutes'

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
            </div> }
            >

            <Router>
               <AnimatedRoutes/>
            </Router>
        </Suspense>
    )
}

export default AppRoutes;