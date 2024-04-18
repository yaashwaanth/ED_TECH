import { Button, Container, Heading, Input, Toast, VStack } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/action/profile';
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {

    // const dispatch = useDispatch();
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submitHandler =(e)=>{
     e.preventDefault();
     dispatch(changePassword(oldPassword,newPassword));
 
 }
   const {loading,message,error} = useSelector(state=>state.profile)
<<<<<<< HEAD
=======

>>>>>>> 08f216d (complete website)
 useEffect(() => {
  if(error){
    toast.error(error);
    dispatch({type:"clearError"})
  }
  if(message){
    
    toast.success(message);
    navigate('/profile');
    dispatch({type:"clearMessage"});
  }

 }, [dispatch,error,message])
 


  return <Container
  py="16"
  minH={"90vh"}
  >
<form onSubmit={submitHandler}>
    <Heading my="16" textAlign={['center','left']}>Change Password</Heading>
    <VStack spacing={"8"}>
        <Input
        required
        value={oldPassword}
        onChange={e=>setOldPassword(e.target.value)}
        placeholder="Old password"
        type={'password'}
        focusBorderColor="yellow.500"
        />
        <Input
        required
        value={newPassword}
        onChange={e=>setNewPassword(e.target.value)}
        placeholder="New password"
        type={'password'}
        focusBorderColor="yellow.500"
        />
<<<<<<< HEAD
        <Button w="full" colorScheme={'yellow'} type="submit">Change</Button>
=======
        <Button isLoading={loading} w="full" colorScheme={'yellow'} type="submit">Change</Button>
>>>>>>> 08f216d (complete website)
    </VStack>
</form>
  </Container>
}

export default ChangePassword