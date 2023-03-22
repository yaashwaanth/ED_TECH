import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import {React,useState} from 'react'
import introVideo from "../../assets/videos/intro.mp4"


const CoursePage = () => {

    const [lectureNumber,setLectureNumber] = useState(0);

    const lectures =[{
        _id:"dsdfsdfds",
        title:"sample1",
        description:"dfjldsakfjkdslfdsa",
        video:{
            url:'sldfksdklfdd'}
        },
        {
            _id:"dsdfsdfdsds",
            title:"sample2",
            description:"dfjldsakfjkdslfdsa",
            video:{
                url:'sldfksdklfffdsdsab'}
            },
        {
            _id:"dsdfsdf43s",
            title:"sample3",
            description:"dfjldsakfjkdsflfdsa",
            video:{
                url:'sldfkfsdklfffdsdsab'}
            },

    ];
  return <Grid minH={'90vh'} templateColumns={['1fr',"3fr 1fr"]}>
      <Box>
      <video autoPlay
         width={'100%'}
         controls controlsList='nodownload  noremoteplayback' 
         disablePictureInPicture 
         disableRemotePlayback
         src = {introVideo}
  >
  </video>
   <Heading m='4'>#{lectureNumber+1} {lectures[lectureNumber].title}</Heading>
  <Heading m='4'>Description</Heading>
  <Text m="4" children={lectures[lectureNumber].description}/>
      </Box>

<VStack>
    {
        lectures.map((element,index)=>(
            <button key={element._id}
            onClick={()=>{setLectureNumber(index)}}
            style={{
                width:"100%",
                padding:"1rem",
                textAlign:"center",
                margin:0,
                border:"1px solid rgba(0,0,0,0.2)"
            }}
            >
                <Text noOfLines={1}>
                    #{index+1} {element.title}
                </Text>
            </button>
        ))
    }
</VStack>
  </Grid>
}

export default CoursePage