import { Container, FormLabel, Input, VStack ,Heading, Box, Button} from '@chakra-ui/react'
import {React,useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../redux/action/user';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

const Login = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {isAuthenticated,user,message,error}  = useSelector(state=>state.user);


    const [email,setEmail]=useState();
    const [password,setPassword] = useState();
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(login(email,password));

    }

    useEffect(() => {
     if(isAuthenticated){
         navigate('/profile')
     }
    }, [isAuthenticated])
    

  return (<Container h={'95vh'}>
      <VStack h={"full"} justifyContent="center" spacing={'16'}>
          <Heading children={`Welcome to CourseBundler`}/>
          <form style={{width:'100%'}} onSubmit={submitHandler}  >
             <Box my={'4'}>
             <FormLabel htmlFor='email' children="Email Address"/>
              <Input required id='email' value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              type={"email"}
              focusBorderColor="yellow.500"
              />
             </Box>
             
             <Box my={'4'}>
             <FormLabel htmlFor='password' children="Password"/>
              <Input required id='password' value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={"password"}
              focusBorderColor="yellow.500"
              />
             </Box>

             <Box>
                 <Link to='/forgotpassword'>
                     <Button fontSize={'sm'} variant="link">Forgot Password</Button>
                 </Link>
             </Box>

                <Button my='4' colorScheme={'yellow'} type='submit'>Login</Button>

                <Box my={'4'}>
                    New User ? <Link to='/register'>
                        <Button colorScheme={'yellow'} variant="link">Sign Up</Button> here
                    </Link>
                </Box>
          </form>
      </VStack>
  </Container>
)}

export default Login;