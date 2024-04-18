import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
<<<<<<< HEAD
import { profileReducer, userReducer } from "./reducers/userReducer";
=======
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReduces";

>>>>>>> 08f216d (complete website)


const store = configureStore({
    reducer:{
       user:userReducer,
       profile:profileReducer,
       courses:courseReducer,
       admin:adminReducer,
<<<<<<< HEAD
    }
});

export default store;
=======
       subscription: subscriptionReducer,
       other: otherReducer
    }
});



export default store;

>>>>>>> 08f216d (complete website)
