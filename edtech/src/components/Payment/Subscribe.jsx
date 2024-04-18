import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
<<<<<<< HEAD
import React from 'react'

const Subscribe = () => {
=======
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscriptions } from '../../redux/action/user'
import toast from 'react-hot-toast'
import logo from "../../assets/images/logo.png"

const Subscribe = ({user}) => {
  const dispatch = useDispatch()
  const [key,setKey] = useState("")
  const {loading,error,subscriptionId} = useSelector(state=> state.subscription)

  const subscribeHandler = async() => {
    const {data} = await axios.get(`http://localhost:4000/api/v1/razorpaykey`);
    setKey(data.key);
    dispatch(buySubscriptions());

  }

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type: 'clearError'})
    }

    if(subscriptionId){
      const openPopUp = () => {
        const options = {
          key,
          name: "LMS",
          description:"Get access to all premium content",
          image:logo,
          subscription_id: subscriptionId,
          callback_url: 'http://localhost:4000/api/v1/paymentverification',
          prefill:{
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes:{
            address: "LMS"
          },
          theme:{
            color: "#FFC880"
          }

        }

        const razor = new window.Razorpay(options);
        razor.open();
      }
      openPopUp()
    }
  },[dispatch,error,user.name,user.email,key,subscriptionId])

>>>>>>> 08f216d (complete website)
  return <Container h="90vh" p="16">
    <Heading children="Welcome" my="8" textAlign={'center'}/>

    <VStack
    boxShadow={'lg'}
    alignItems="stretch"
    borderRadius={'lg'}
    spacing="0"
    >

  <Box bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
    <Text children={`Pro Pack - RS 299.00`}/>
  </Box>
  <Box  p={"4"} >

  <VStack textAlign={'center'} px="8" mt={'4'} spacing="8" >
  <Text children={`Join Pro Pack and Get access to all content.`} />
  <Heading size="md" children={"Rs 299 only"}  />
  </VStack>

<<<<<<< HEAD
  <Button my="8" w="full" colorScheme={'yellow'}>Buy Now</Button>
=======
  <Button isLoading={loading} onClick={subscribeHandler} my="8" w="full" colorScheme={'yellow'}>Buy Now</Button>
>>>>>>> 08f216d (complete website)
  </Box>

<Box bg="blackAlpha.600" p="4"
css={{borderRadius:'0 0 8px 8px'}}
 >
  <Heading color={"white"} textTransform="uppercase" size="md" children={"100% refund at cancellation"}  />
   <Text fontSize={"xs"} color="white" children={`*Terms & Conditions Apply`} />

 </Box>
    </VStack>
  </Container>
}

export default Subscribe