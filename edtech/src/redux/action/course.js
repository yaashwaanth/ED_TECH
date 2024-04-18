import axios from "axios";



<<<<<<< HEAD
export const getAllCourses = (category='',keyword='') => async (dispatch)=>{
    try{
        dispatch({
            type:"allCourseRequest"
        })

        const {data} =await axios.get(`/api/v1/courses?keyword=${keyword}&category=${category}`)

        dispatch({
            type:"allCourseSuccess",
            payload:data.courses
        })
    }catch(error){
        dispatch({
            type:"allCourseFail",
            payload:error.response.data.message
        })
    }
}


export const getCourseLectures = id => async dispatch => {
    try {
      dispatch({ type: 'getCourseRequest' });
  
      const { data } = await axios.get(`/api/v1/course/${id}`, {
        withCredentials: true,
      });
  
      dispatch({ type: 'getCourseSuccess', payload: data.lectures });
    } catch (error) {
      dispatch({
        type: 'getCourseFail',
        payload: error.response.data.message,
      });
    }
  };
=======
// export const getAllCourses = (category='',keyword='') => async (dispatch)=>{
//     try{
//         dispatch({
//             type:"allCourseRequest"
//         })

//         const {data} =await axios.get(`/api/v1/courses?keyword=${keyword}&category=${category}`)

//         dispatch({
//             type:"allCourseSuccess",
//             payload:data.courses
//         })
//     }catch(error){
//         dispatch({
//             type:"allCourseFail",
//             payload:error.response.data.message
//         })
//     }
// }

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(
        `/api/v1/courses?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };


// export const getCourseLectures = id => async dispatch => {
//     try {
//       dispatch({ type: 'getCourseRequest' });
  
//       const { data } = await axios.get(`/api/v1/course/${id}`, {
//         withCredentials: true,
//       });
  
//       dispatch({ type: 'getCourseSuccess', payload: data.lectures });
//     } catch (error) {
//       dispatch({
//         type: 'getCourseFail',
//         payload: error.response.data.message,
//       });
//     }
//   };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCourseRequest' });

    const { data } = await axios.get(`/api/v1/course/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'getCourseSuccess', payload: data.lectures });
  } catch (error) {
    dispatch({
      type: 'getCourseFail',
      payload: error.response.data.message,
    });
  }
};
>>>>>>> 08f216d (complete website)
