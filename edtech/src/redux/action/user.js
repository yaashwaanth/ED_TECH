import axios from "axios";


<<<<<<< HEAD
=======

>>>>>>> 08f216d (complete website)
const login = (email,password) => async(dispatch)=>{
    try{
        dispatch({type:"loginRequest"});
        const {data}= await axios.post(`/api/v1/login`,{email,password},{
            headers:{
                'Content-type':'application/json'
            },withCredentials:true,
        })
        dispatch({type:'loginSuccess',payload:data})
    }catch(error){
        dispatch({type:'loginFail',payload:error.response.data.message})
    }
}


// register
export const register = (formdata) => async(dispatch)=>{
    try{
        dispatch({type:"registerRequest"});
        const {data}= await axios.post(`/api/v1/register`,formdata,{
            headers:{
                'Content-type':'multipart/form-data'
            },withCredentials:true,
        })
        dispatch({type:'registerSuccess',payload:data})
    }catch(error){
        dispatch({type:'registerFail',payload:error.response.data.message})
    }
}

// load user
const loadUser = () => async(dispatch)=>{
    try{
        dispatch({type:"loadUserRequest"});
        const {data}= await axios.get(`/api/v1/me`
        ,{
            withCredentials:true,
        })
        dispatch({type:'loadUserSuccess',payload:data.user})
    }catch(error){
        dispatch({type:'loadUserFail',payload:error.response.data.message})
    }
}

// logout user
export const logout = () => async(dispatch)=>{
    try{
        dispatch({type:"logoutRequest"});
        const {data}= await axios.get(`/api/v1/logout`
        ,{
            withCredentials:true,
        })
        dispatch({type:'logoutSuccess',payload:data.message})
    }catch(error){
        dispatch({type:'logoutFail',payload:error.response.data.message})
    }
}






export  {login,loadUser};



export const addToPlaylist = (id) => async dispatch =>{
    try{
        dispatch({
            type:"addToPlaylistRequest",

        })
        const config ={
            headers:{
                'Content-type':'application/json'
            },
            withCredentials:true
        }

        const {data} = await axios.post(`/api/v1/addtoplaylist`,{
            id
        },
        config)
        dispatch({
            type:"addToPlaylistSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"addToPlaylistFail",
            payload:error.response.data.message
        })
    }
}
export const removeFromPlaylist = (id) => async dispatch =>{
    try{
        dispatch({
            type:"addToPlaylistRequest",

        })
        const config ={
            headers:{
                'Content-type':'application/json'
            },
            withCredentials:true
        }

        const {data} = await axios.post(`/api/v1/addtoplaylist`,{
            id
        },
        config)
        dispatch({
            type:"addToPlaylistSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"addToPlaylistFail",
            payload:error.response.data.message
        })
    }
<<<<<<< HEAD
=======
}


// buy subscription
export const buySubscriptions = () => async(dispatch)=>{
    try{
        dispatch({type:"buySubscriptionRequest"});
        const {data}= await axios.get(`/api/v1/subscribe`,{
        withCredentials:true,
        })
        dispatch({type:'buySubscriptionSuccess',payload:data.subscriptionId})
    }catch(error){
        dispatch({type:'buySubscriptionFail',payload:error.response.data.message})
    }
>>>>>>> 08f216d (complete website)
}