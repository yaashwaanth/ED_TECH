import { Container, Heading, VStack,Box,Button, FormLabel, Input, Textarea } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import {React,useState} from 'react'

const Request = () => {

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");

=======
import {React,useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../../redux/action/others';
import toast from "react-hot-toast";

const Request = () => {
  const dispatch = useDispatch()
    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");
    const {loading,error,message:stateMessage} = useSelector(state=> state.other)

    const submitHandler = (e) =>{
      e.preventDefault()

      dispatch(courseRequest(name,email,course))
    }

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'})
      }

      if(stateMessage){
        toast.success(stateMessage);
        dispatch({type: 'clearMessage'})

        setName("")
        setEmail("")
        setCourse("")
      }


    },[dispatch,error,stateMessage])
  
>>>>>>> 08f216d (complete website)
    return (
        <Container h="92vh">
          <VStack h="full" justifyContent={'center'} spacing="16">
              <Heading children="Request New Course"/>
    
<<<<<<< HEAD
              <form style={{width:'100%'}}>
=======
              <form onSubmit={submitHandler} style={{width:'100%'}}>
>>>>>>> 08f216d (complete website)
    
                 <Box my={'4'}>
                 <FormLabel htmlFor='name' children="Name"/>
                  <Input required id='name' value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  type={"text"}
                  focusBorderColor="yellow.500"
                  />
                 </Box>
                 
                 <Box my={'4'}>
                 <FormLabel htmlFor='email' children="Email"/>
                  <Input required id='email' value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type={"email"}
                  focusBorderColor="yellow.500"
                  />
                 </Box>
                 
                 <Box my={'4'}>
                 <FormLabel htmlFor='course' children="Course"/>
                  <Textarea required id='course' value={course}
                  onChange={e => setCourse(e.target.value)}
                  placeholder="Explain the course..."
                  focusBorderColor="yellow.500"
                  />
                 </Box>
                 
<<<<<<< HEAD
                 <Button my='4' colorScheme={'yellow'} type='submit'>Send Mail</Button>
=======
                 <Button isLoading={loading} my='4' colorScheme={'yellow'} type='submit'>Send Mail</Button>
>>>>>>> 08f216d (complete website)
    
                <Box my="4">
                    See available courses
                    <Link to="/courses">
                        <Button colorScheme={'yellow'} variant="link">click</Button>
                    here
                    </Link>
                </Box>
                    
              </form>
    
          </VStack>
        </Container>
      )
    }

export default Request