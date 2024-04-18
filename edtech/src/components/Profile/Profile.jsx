import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { Link, useNavigation } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> 08f216d (complete website)
import { updateProfilePicture } from '../../redux/action/profile'
import { loadUser } from '../../redux/action/user'


const Profile = ({user,loading}) => {

    const dispatch = useDispatch();
 
 
    const removeFromPlaylistHandler = id =>{
        console.log('deleted');
    };

    const {message,error} = useSelector(state=>state.profile);
<<<<<<< HEAD
=======

>>>>>>> 08f216d (complete website)
    const changeImageSubmitHandler = async(e,image)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('file',image);
        await dispatch(updateProfilePicture(myForm));
        dispatch(loadUser())
    };

    const {isOpen,onClose,onOpen} = useDisclosure();

    useEffect(() => {
        if(error){
          toast.error(error);
          dispatch({type:"clearError"})
        }
        if(message){
          
          toast.success(message);
          dispatch({type:"clearMessage"});
        }
      
       }, [dispatch,error,message])
       

  return !loading ? (
    <Container minH={'95vh'} maxW="container" py='8'>
    <Heading children="Profile" m="8" textTransform={"uppercase"}/>

    <Stack
    justifyContent={'flex-start'} 
    direction={['column','row']}
    alignItems={'center'}
    spacing={["8","16"]}
    padding="8"
    >
        <VStack>
            <Avatar boxSize={"48"} src={user.avatar.url}/>
            <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">Change Photo</Button>
        </VStack>

        <VStack/>
        <VStack  spacing={'4'} alignItems={['center','flex-start']} >
        <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
        </HStack>
        <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
        </HStack>
        <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split("T")[0]} />
        </HStack>

        {
        user.role !=="admin" && <HStack>

                <Text children="Subcription" fontWeight={'bold'}/>
                {/* {user.subscription.status === "active" ? (
                    <Button color={"yellow.500"} variant="unstyled">Cancel Subscription</Button>
                ):(
                 <Link to="/subscribe">
                     <Button colorScheme={'yellow'}>Subscribe</Button>
                 </Link>
                )} */}
<<<<<<< HEAD
=======
                <Link to="/subscribe">
                     <Button colorScheme={'yellow'}>Subscribe</Button>
                 </Link>
                 
>>>>>>> 08f216d (complete website)
        </HStack>
        }

        <Stack direction={['column','row']} alignItems={'center'}>
            
            <Link to='/updateprofile'>
                <Button>Update Profile</Button>
            </Link>
            <Link to='/changepassword'>
                <Button>Change Password</Button>
            </Link>
        </Stack>
        </VStack>
    </Stack>

    <Heading children ="Playlist" size={'md'} my="8"/>
    {
        user.playList.length > 0 && (
          <Stack direction={['column','row']} alignItems={'center'} flexWrap="wrap" p="4">
                {
                    user.playList.map((element,index)=>(
                        <VStack w="48" m="2" key={element.course}>
                            <Image boxSize={'full'} objectFit="contain" src={element.poster}/>

                            <HStack>
                                <Link to={`/course/${element.course}`}>
                                    <Button variant={"ghost"} colorScheme="yellow">Watch Now</Button>
                                </Link>

                                <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                    <RiDeleteBin7Fill/>
                                </Button>
                            </HStack>
                        </VStack>
                    ))
                }
          </Stack>  
        )
    }

    <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
</Container>
  )  : <></>
 
}

export default Profile

<<<<<<< HEAD
function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

    const [image,setImage] =useState('');
    const [imagePrev,setImagePrev] =useState('');

    const changeImage = (e) =>{
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend= () =>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const closeHandler =()=>{
        onClose();
        setImagePrev("");
        setImage("");

    }
    return(
        <Modal isOpen={isOpen} onClose={changeImageSubmitHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"}/>
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                            <VStack spacing={"8"}>
                                {
                                  imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>
                              
                                }
                                <Input type={"file"} 
                                // css={{'&::file-selector-button':fileUploadCss}}
                                onChange={changeImage}
                                />
                                <Button w='full' colorScheme={'yellow'} type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>

                <ModalFooter>
                    <Button m='3' onClick={closeHandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
=======
// function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

//     const [image,setImage] =useState('');
//     const [imagePrev,setImagePrev] =useState('');

//     const changeImage = (e) =>{
//         const file = e.target.files[0];

//         const reader = new FileReader();

//         reader.readAsDataURL(file);

//         reader.onloadend= () =>{
//             setImagePrev(reader.result);
//             setImage(file);
//         }
//     }

//     const closeHandler =()=>{
//         onClose();
//         setImagePrev("");
//         setImage("");

//     }
function ChangePhotoBox({
    isOpen,
    onClose,
    changeImageSubmitHandler,
    loading,
  }) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
  
    const changeImage = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    };
  
    const closeHandler = () => {
      onClose();
      setImagePrev('');
      setImage('');
    };
    return(
        // <Modal isOpen={isOpen} onClose={changeImageSubmitHandler}>
        //     <ModalOverlay backdropFilter={"blur(10px)"}/>
        //     <ModalContent>
        //         <ModalHeader>Change Photo</ModalHeader>
        //         <ModalCloseButton/>
        //         <ModalBody>
        //             <Container>
        //                 <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
        //                     <VStack spacing={"8"}>
        //                         {
        //                           imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>
                              
        //                         }
        //                         <Input type={"file"} 
        //                         // css={{'&::file-selector-button':fileUploadCss}}
        //                         onChange={changeImage}
        //                         />
        //                         <Button w='full' colorScheme={'yellow'} type='submit'>Change</Button>
        //                     </VStack>
        //                 </form>
        //             </Container>
        //         </ModalBody>

        //         <ModalFooter>
        //             <Button m='3' onClick={closeHandler}>Cancel</Button>
        //         </ModalFooter>
        //     </ModalContent>
        // </Modal>
        <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                <Input
                  type={'file'}
                //   css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />

                <Button
                  isLoading={loading}
                  w="full"
                  colorScheme={'yellow'}
                  type="submit"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
>>>>>>> 08f216d (complete website)
    )
}