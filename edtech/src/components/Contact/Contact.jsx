import { Container, Heading, VStack,Box,Button, FormLabel, Input, Textarea } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {React,useState} from 'react'

const Contact = () => {

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");


  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
          <Heading children="Contact US" />

          <form style={{width:'100%'}}>

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
             <FormLabel htmlFor='message' children="Message"/>
              <Textarea required id='message' value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Enter Your Message..."
              focusBorderColor="yellow.500"
              />
             </Box>
             
             <Button my='4' colorScheme={'yellow'} type='submit'>Send Mail</Button>

            <Box my="4">
                Request for a course ? 
                <Link to="/request">
                    <Button colorScheme={'yellow'} variant="link">Click</Button>
                here
                </Link>
            </Box>
                
          </form>

      </VStack>
    </Container>
  )
}

export default Contact