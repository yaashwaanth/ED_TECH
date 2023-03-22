import { Avatar, Container, Stack, VStack,Heading, Text, Button,Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/videos/intro.mp4"
import termsAndConditions from "../../assets/docs/termsAndCondition"

const Founder = ()=>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack>
            <Avatar boxSize={['40','48']}/>
            <Text children='Co-Founder' opacity={0.7}/>
        </VStack>

        <VStack justifyContent={"center"} align={['center','flex-start']}>
            <Heading children="G Yashwanth Sharma" size={['md','xl']}/>
            <Text textAlign={['center','left']} children= {'Hi, I am a full-stack developer and a teacher our misson is to provide quality content at resonable price'}/>
        </VStack>
    </Stack>
)

const VideoPlayer = () =>(
    <Box>
         <video autoPlay
  controls controlsList='nodownload nofullscreen noremoteplayback' 
  disablePictureInPicture 
  disableRemotePlayback
  src = {introVideo}
  />
    </Box>
)

const TandC =({termsAndConditions})=>(
    <Box>
        <Heading size={'md'} children="Terms And Condtion" textAlign={['center','left']}
        my='4'
        />
        <Box h={'sm'} p="4" overflowY={'scroll'}>
            <Text fontFamily={'heading'} letterSpacing={'widest'} textAlign={['center','left']}>{termsAndConditions}</Text>
            <Heading my={'4'} size={'xs'} children="Refund only applicable for cancellation within 7 days."/>
        </Box>
    </Box>
)


const About = () => {
  return <Container maxW={"container.lg"} paddin='16' boxShadow={'lg'}>
        <Heading children="About US" textAlign={['center','left']}/>
        <Founder/>
        <Stack m="8" direction={['column','row']} alignItems="center">
            <Text fontFamily={"cursive"} m="8" textAlign={['center','left']}>
                We are a video streaming platform with some premium courses available only for premium users
            </Text>

            <Link to="/subscribe">
                <Button variant={"ghost"} colorScheme="yellow">
                    Checkout Our Plans
                </Button>
            </Link>
        </Stack>

        <VideoPlayer/>

        <TandC termsAndConditions={termsAndConditions}/>
    <HStack my="4" p={'4'}>
        <RiSecurePaymentFill/>
        <Heading size={"xs"} fontFamily="sans-serif" textTransform={'uppercase'} children={"Payment is secured by RazorPay"}/>
    </HStack>

  </Container>
}

export default About