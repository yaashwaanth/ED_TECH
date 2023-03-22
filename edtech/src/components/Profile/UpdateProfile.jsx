import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/action/profile';
import { loadUser } from '../../redux/action/user';

const UpdateProfile = ({user}) => {
   
   const [name,setName]=useState(user.name);
   const [email,setEmail]=useState(user.email);
   const {isAuthenticated} = useSelector(state=>state.user);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {message,loading} = useSelector(state=>state.profile);



   const submitHandler =async(e)=>{
    e.preventDefault();
   await dispatch(updateProfile(name,email));
   dispatch(loadUser());


}

   useEffect(() => {
       if(!isAuthenticated){
           navigate("/login")
       }
       if(message){
           toast.success(message)

           dispatch({type:"clearMessage"})

           navigate("/profile")
       }
 
       }, [dispatch,message,isAuthenticated])

  return <Container
  py="16"
  minH={"90vh"}
  >
   {
    !loading ?(
        <form onSubmit={submitHandler}>
    <Heading my="16" textAlign={['center','left']}>Update Profile</Heading>
    <VStack spacing={"8"}>
        <Input
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder="Name"
        type={'text'}
        focusBorderColor="yellow.500"
        />
         <Input
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Email"
        type={'email'}
        focusBorderColor="yellow.500"
        />
        <Button w="full" colorScheme={'yellow'} type="submit">Update</Button>
    </VStack>
</form>
    ) : (<></>)
   }
  </Container>
}

export default UpdateProfile