import React,{useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Home from "./components/Home/Home"
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Request from './components/Request/Request';
import Subscribe from './components/Payment/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import PaymentFail from './components/Payment/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast';
import { loadUser } from './redux/action/user';
import {ProtectedRoute} from "protected-route-react";
function App() {

  const dispatch = useDispatch();
  const {isAuthenticated,user,message,error,loading}  = useSelector(state=>state.user);
  
  useEffect(() => {
   if(error){
     toast.error(error);
      dispatch({type:"clearError"})
   }
   if(message){
    toast.success(message);
     dispatch({type:"clearMessage"})
  }

    
  }, [dispatch,message,error]);
  

  useEffect(() => {
    dispatch(loadUser());
  
   
  }, [dispatch])
  

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return <Router>
    <Header isAuthenticated={isAuthenticated} user={user}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      {

      <Route path='/login' element={<Login/>} />

      }
      <Route path='/courses' element={<Courses/>} />
      <Route path='/course/:id' element={<CoursePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
     
     {
     
      !loading ?  <Route path='/profile' element={<Profile loading={loading} user={user}/>}/> : (<></>)
     }

     
      <Route path='/changePassword' element={<ChangePassword/>} />
      {
        !loading ? <Route path='/updateProfile' element={<UpdateProfile user={user}  />} /> : (<></>)
      }
      
      <Route path='/login' element={

        <Login/>

      } />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgotpassword' element={<ForgetPassword/>} />
      <Route path='/resetpassword/:token' element={<ResetPassword/>} />
      <Route path='/request' element={<Request/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>

      {/* Admin Routes */}
      
        user.role==="admin" ?
        <Route path='/admin/dasboard' element={<Dashboard/>}/>
        <Route path='/admin/createcourse' element={<CreateCourse/>}/>
        <Route path='/admin/courses' element={<AdminCourses/>}/>
        <Route path='/admin/users' element={<Users/>}/>
      
     


    </Routes>
    <Footer/>
    <Toaster/>
  </Router>

}
export default App;
