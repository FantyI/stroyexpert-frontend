import { configureStore } from "@reduxjs/toolkit";
import { userRedusers } from "./slice/userSlice";


const store = configureStore({
   reducer: {
      user: userRedusers
   }
})

export default store;