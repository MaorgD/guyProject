import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../redux/featchers/userSlice'
import toggleSlice from '../redux/featchers/toggleSlice'


const myStore = configureStore({
  reducer: {
    userSlice,
    toggleSlice
  }
})

export default myStore;