import { Button, Container, Heading,HStack,Input,Stack,Text, VStack,Image } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import {getAllCourses} from "../../redux/action/course";
import { addToPlaylist } from '../../redux/action/user';

<<<<<<< HEAD
const Course =({views,title,imageSrc,id,addToPlaylistHandler,creator,decription,lectureCount})=>{
=======

const Course =({views,title,imageSrc,id,addToPlaylistHandler,creator,decription,lectureCount,loading})=>{
>>>>>>> 08f216d (complete website)
return(
   <VStack className='course' alignItems={["center","flex-start"]}>
     <Image src={imageSrc} boxSize="60" objectFit={'contain'}/>
     <Heading textAlign={['cente','left']} maxW="200px" fontFamily={'sans-serif'} noOfLines={3} 
     children={title} size={'sm'} />
     <Text noOfLines={2} children={decription}/>

     <HStack>
       <Text fontWeight={"bold"} textTransform="uppercase" children={"Creator"}/>
       <Text fontFamily={"body"} textTransform="uppercase" children={creator}/>
     </HStack>

    <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`} 
    textTransform="uppercase"
    />

    <Heading  size="xs" children={`Views - ${views}`} 
    textTransform="uppercase"
    />

    <Stack direction={['column','row']} alignItems="center">
    <Link to={`/course/${id}`}>
      <Button colorScheme={'yellow'}>Watch Now</Button>
    </Link>
<<<<<<< HEAD
    <Button variant={'ghost'} colorScheme={'yellow'}
=======
    <Button 
    isLoading = {loading}
    variant={'ghost'} colorScheme={'yellow'}
>>>>>>> 08f216d (complete website)
    onClick={()=>addToPlaylistHandler(id)}
    >Add to Playlist</Button>

    </Stack>

   </VStack>
)
}
const Courses = () => {
    const dispatch = useDispatch();
    const [keyword,setKeyword]=useState("");
    const [category,setCategory]=useState("");
<<<<<<< HEAD
    const { courses , error,message} = useSelector(state=>state.courses)
=======
    const { courses , error,message,loading} = useSelector(state=>state.courses)
>>>>>>> 08f216d (complete website)

    useEffect(() => {
     dispatch(getAllCourses(category,keyword));
     if(error){
       toast.error(error);
       dispatch({type:'clearError'})
     }
     if(message){
       toast.success(message);
       dispatch({type:'clearError'})
     }
    }, [category,error,keyword,dispatch,message]);
    
    const addToPlaylistHandler = (courseId)=>{
      dispatch(addToPlaylist(courseId))
    }

    const categories = [ "Web Devlopment","Artificial Intelligence","Data Structures and Algorithms","App Devlopment","Data Science","Game Devlopment"];
  return <Container minH={'95vh'} maxW='container.lg' padding={'8'}>
   <Heading children="All Courses" m={'8'}/>
   <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Search a course..." type={'text'}
   focusBorderColor="yellow.500"
   />
   <HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{display:"none"}}}>
     {
      //  categories.map(()=>{
      //    return <Button minW={"60"}>
      //    <Text children="Category1"/>
      //  </Button>

       categories.map((item,index)=>(
         <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
         <Text children={item}/>
       </Button>

       ))
     }
   </HStack>

   <Stack
   direction={["column","row"]}
   flexWrap="wrap"
   justifyContent={["flex-start","space-evenly"]}
   alignItems={["center","flex-start"]}
   >
    {
      courses.length>0 ? courses.map((item)=>(
        <Course 
        key={item._id}
        title={item.title}
        description={item.description}
        views={item.views}
        imageSrc={item.poster.url}
        id={item._id}
        creator={item.createdBy}
        lectureCount={item.numOfVideos}
        addToPlaylistHandler={addToPlaylistHandler}
<<<<<<< HEAD
=======
        loading={loading}
>>>>>>> 08f216d (complete website)
        />
      )): <Heading children="Course Not Found" />
    }
   </Stack>

  </Container>
}

<<<<<<< HEAD
export default Courses
=======
export default Courses

>>>>>>> 08f216d (complete website)
