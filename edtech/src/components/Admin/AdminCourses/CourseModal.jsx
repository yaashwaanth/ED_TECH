import {Stack,Text,Button, Grid, Heading, Modal,Input, ModalBody,Box, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, ModalFooter } from '@chakra-ui/react'
import {React,useState} from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({isOpen,onClose,id,deleteButtonHandler,courseTitle,addLectureHandler,lectures=[],
    loading
}) => {


   const [title,setTitle] = useState("");
   const [description,setDescription]=useState("");
   const [video,setVideo]=useState("");
   const [videoPrev,setVideoPrev]=useState("");

   const changeVideoHandler = e=>{
       const file=e.target.files[0];
       const reader = new FileReader();

       reader.readAsDataURL(file);

       reader.onloadend = () =>{
           setVideoPrev(reader.result);
           setVideo(file);
       }
   }
   const handleClose =()=>{
       setTitle("")
       setDescription("")
       setVideo('');
       setVideoPrev("");
       onClose();
   }
  return <Modal
  isOpen={isOpen} size="full"
  onClose={handleClose}
  scrollBehavior="inside"
  >
      <ModalOverlay/>
      <ModalContent>


          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton/>

          <ModalBody p="16">
              <Grid templateColumns={["1fr","3fr","1fr"]}>
                  <Box px={["0","16"]}>
                      <Box my="5">
                        <Heading children={courseTitle}/>  
                        <Heading children={`#${id}`} size="sm" opacity={0.4}/>  
                      </Box>
                      <Heading children={"Lectures"} size="lg" />
                     
                      {
                          lectures.map((item,i)=>(
                            <VideoCard title={item.title} 
                            description={item.description}
                            key={i}
                            num={i+1}
                            lectureId={item._id}
                            courseId={id}
                            deleteButtonHandle={deleteButtonHandler}
                            isLoading={loading}
                            />
                          ))
                      }
                  </Box>
                  <Box>
                      <form onSubmit={e=>addLectureHandler(e,id,title,description,video)}>
                        <VStack spacing={"4"}>
                            <Heading children="Add Lectures" size={'md'} textTransform="uppercase" />
                            <Input focusBorderColor="purple.300" placeholder="Title"
                            value={title}
                            onChange={e=>setTitle(e.target.value)}
                            />

                            <Input focusBorderColor="purple.300" placeholder="Description"
                            value={description}
                            onChange={e=>setDescription(e.target.value)}
                            />

                            <Input
                            accept='video/mp4'
                            required
                            type={'file'}
                            focusBorderColor="purple.300"
                            css={{
                                '&::file-selector-button':{
                                    // ...fileUploadCss,
                                    color:'purple'
                                }
                            }}
                            onChange={changeVideoHandler}
                            />
                            {
                                videoPrev && (
                                    <video controlsList='nodownload'
                                    controls
                                    src={videoPrev}
                                    ></video>
                                )
                            }
                            <Button w="full" colorScheme={"purple"} type="submit"
                            isLoading={loading}
                            >Upload</Button>
                        </VStack>
                      </form>
                  </Box>
              </Grid>

          </ModalBody>
          <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
      </ModalContent>

  </Modal>
}

export default CourseModal

<<<<<<< HEAD
function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
=======
function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandle}){
>>>>>>> 08f216d (complete website)
    return <Stack direction={["column","row"]} my="8" borderRadius={"lg"} 
    boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
    justifyContent={['flex-start','space-between']}
    p={['4','8']}
    >

   <Box>
       
    <Heading size={"sm"} children={`#${num} ${title}`} />
    <Text children={description}/>
    </Box>
<<<<<<< HEAD
      <Button color={"purple.600"} 
      onClick={()=>deleteButtonHandler(courseId,lectureId)}
=======
    <Button

        color={'purple.600'}
        onClick={() => deleteButtonHandle(courseId, lectureId)}
>>>>>>> 08f216d (complete website)
      >
          <RiDeleteBin7Fill/>
      </Button>
    </Stack>

}