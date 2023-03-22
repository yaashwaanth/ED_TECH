import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";


const store = configureStore({
    reducer:{
       user:userReducer,
       profile:profileReducer,
       courses:courseReducer,
       admin:adminReducer,
    }
});

export default store;