import {createReducer} from "@reduxjs/toolkit";





<<<<<<< HEAD
export const courseReducer = createReducer({courses:[]},{
    allCourseRequest:(state)=>{
        state.loading=true;
    },
    allCourseSuccess:(state,action)=>{
        state.loading=false;
        state.courses=action.payload;

    },
    allCourseFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    addToPlaylistRequest:(state)=>{
        state.loading=true;
    },
    addToPlaylistSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    },
    addToPlaylistFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})
=======
// export const courseReducer = createReducer({courses:[]},{
//     allCourseRequest:(state)=>{
//         state.loading=true;
//     },
//     allCourseSuccess:(state,action)=>{
//         state.loading=false;
//         state.courses=action.payload;

//     },
//     allCourseFail:(state,action)=>{
//         state.loading=false;
//         state.error=action.payload;
//     },
//     addToPlaylistRequest:(state)=>{
//         state.loading=true;
//     },
//     addToPlaylistSuccess:(state,action)=>{
//         state.loading=false;
//         state.message=action.payload;

//     },
//     addToPlaylistFail:(state,action)=>{
//         state.loading=false;
//         state.error=action.payload;
//     },
//     clearError:(state)=>{
//         state.error=null;
//     },
//     clearMessage:(state)=>{
//         state.message=null;
//     },
// })

export const courseReducer = createReducer(
    { courses: [], lectures: [] },
    {
      allCoursesRequest: state => {
        state.loading = true;
      },
      allCoursesSuccess: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      },
      allCoursesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      getCourseRequest: state => {
        state.loading = true;
      },
      getCourseSuccess: (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      },
      getCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      addToPlaylistRequest: state => {
        state.loading = true;
      },
      addToPlaylistSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addToPlaylistFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
      clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },
    }
  );
>>>>>>> 08f216d (complete website)
