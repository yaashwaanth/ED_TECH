import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
<<<<<<< HEAD
import {React,useState} from 'react'
import introVideo from "../../assets/videos/intro.mp4"
=======
import {React,useEffect,useState} from 'react'
import introVideo from "../../assets/videos/intro.mp4"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/action/course';
>>>>>>> 08f216d (complete website)


const CoursePage = () => {

    const [lectureNumber,setLectureNumber] = useState(0);
<<<<<<< HEAD

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
=======
    const { lectures, loading } = useSelector(state => state.courses);
    console.log(lectures);

    const dispatch = useDispatch();
    const params = useParams();
    // const lectures =[{
    //     _id:"dsdfsdfds",
    //     title:"sample1",
    //     description:"dfjldsakfjkdslfdsa",
    //     video:{
    //         url:'sldfksdklfdd'}
    //     },
    //     {
    //         _id:"dsdfsdfdsds",
    //         title:"sample2",
    //         description:"dfjldsakfjkdslfdsa",
    //         video:{
    //             url:'sldfksdklfffdsdsab'}
    //         },
    //     {
    //         _id:"dsdfsdf43s",
    //         title:"sample3",
    //         description:"dfjldsakfjkdsflfdsa",
    //         video:{
    //             url:'sldfkfsdklfffdsdsab'}
    //         },

    // ];
    useEffect(() => {
        dispatch(getCourseLectures(params.id));
      }, [dispatch, params.id]);
//   return 
//   <Grid minH={'90vh'} templateColumns={['1fr',"3fr 1fr"]}>
//        <Box>
//       <video autoPlay
//          width={'100%'}
//          controls controlsList='nodownload  noremoteplayback' 
//          disablePictureInPicture 
//          disableRemotePlayback
//          src = {lectures[lectureNumber].video.url}
//   >
//   </video>
//    <Heading m='4'>#{lectureNumber+1} {lectures[lectureNumber].title}</Heading>
//   <Heading m='4'>Description</Heading>
//   <Text m="4" children={lectures[lectureNumber].description}/>
//       </Box>

// <VStack>
//     {
//         lectures.map((element,index)=>(
//             <button key={element._id}
//             onClick={()=>{setLectureNumber(index)}}
//             style={{
//                 width:"100%",
//                 padding:"1rem",
//                 textAlign:"center",
//                 margin:0,
//                 border:"1px solid rgba(0,0,0,0.2)"
//             }}
//             >
//                 <Text noOfLines={1}>
//                     #{index+1} {element.title}
//                 </Text>
//             </button>
//         ))
//     }
// </VStack> 
//   </Grid>
// }

return loading ? (
    // <Loader />
    <>
    <h1>Loading</h1>
    </>
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={lectures[lectureNumber].video.url}
            ></video>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading children="No Lectures" />
      )}
    </Grid>
  );
};
>>>>>>> 08f216d (complete website)

export default CoursePage