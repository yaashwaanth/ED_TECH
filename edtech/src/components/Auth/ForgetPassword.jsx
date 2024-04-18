import { Button, Container,Heading, Input, VStack } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const {isAuthenticated} = useSelector(state=>state.user);
    const navigate = useNavigate();
    const [email,setEmail] =useState();

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/login")
        }
        }, [isAuthenticated])

  return <Container py={"16"} h="90vh">
      <form>
          <Heading 
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign = {['center','left']}
          />

          <VStack spacing={'8'}>
              <Input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              type={'email'}
              focusBorderColor='yellow.500'
              />
              <Button type='submit' w={'full' } colorScheme="yellow">Send Reset Link</Button>
          </VStack>
      </form>
  </Container>
}

export default ForgetPassword