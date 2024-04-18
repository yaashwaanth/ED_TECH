import { Grid,Box, TableContainer, TableCaption, Thead, Td,Th,Tr,Heading,Table,Tbody, HStack, Button } from '@chakra-ui/react'
<<<<<<< HEAD
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../Sidebar'
const Users = () => {

  const users = [{
    _id:"dlkfdlskfsdf",
    name:"Yashwanth",
    role:"admin",
    subscription:{
      status:"active"
    },
    email:"yash@gmail.com"
  }];


 const updateHandler = userId =>{
   console.log(userId);
 }
 const deleteButtonHandler = userId =>{
   console.log(userId);
 }

  return (<Grid 
  minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>

   <Box p={["0","16"]} overflowX="auto">
     <Heading textTransform={'uppercase'}
     children="All Users"
     my="16"
     textAlign={['center','left']}
     />

     <TableContainer w={["100vw","full"]}>
       <Table variant={'simple'} size="lg">
         <TableCaption>All available users in the database</TableCaption>
         <Thead>
           <Tr>
             <Th>Id</Th>
             <Th>Name</Th>
             <Th>Email</Th>
             <Th>Role</Th>
             <Th>Subscription</Th>
             <Th isNumeric>Action</Th>
           </Tr>
         </Thead>

   <Tbody>
    {
     users.map(item=>(
       <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
     )) 
    }
   </Tbody>
   </Table>

     </TableContainer>
   </Box>
=======
import React, { useEffect } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers, updateUserRole } from '../../../redux/action/admin'
import toast from 'react-hot-toast'
const Users = () => {

  const {users,error,message,loading} = useSelector(state => state.admin);
  // const users = [{
  //   _id:"dlkfdlskfsdf",
  //   name:"Yashwanth",
  //   role:"admin",
  //   subscription:{
  //     status:"active"
  //   },
  //   email:"yash@gmail.com"
  // }];

  const dispatch = useDispatch()

 const updateHandler = userId =>{
  dispatch(updateUserRole(userId))
 }
 const deleteButtonHandler = userId =>{
  dispatch(deleteUser(userId))
 }

 useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch({type:'clearError'})
  }
  if (message) {
    toast.success(message);
    dispatch({ type: 'clearMessage' });
  }
  dispatch(getAllUsers())
 },[dispatch,error,message])

  return (
  <Grid 
  minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>

<Box p={["0","16"]} overflowX="auto">
    <Heading textTransform={'uppercase'}
    children="All Users"
    my="16"
    textAlign={['center','left']}
    />

    <TableContainer w={["100vw","full"]}>
      <Table variant={'simple'} size="lg">
        <TableCaption>All available users in the database</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Subscription</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>

  <Tbody>
   {
    users && users.map(item=>(
      <Row loading={loading} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
    )) 
   }
  </Tbody>
  </Table>

    </TableContainer>
  </Box>
>>>>>>> 08f216d (complete website)
   <Sidebar/>
  </Grid>
  );
}

export default Users

<<<<<<< HEAD
function Row({item,updateHandler,deleteButtonHandler}){
=======
function Row({item,updateHandler,deleteButtonHandler,loading}){
>>>>>>> 08f216d (complete website)
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
<<<<<<< HEAD
      <Td>{item.subscription.status === 'active' ? 'Active': 'Not Active' }</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
         <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color="purple.500">Change Role</Button>
         <Button onClick={()=> deleteButtonHandler(item._id)} color={'purple.600'} >
=======
      <Td>{item.subscription && item.subscription.status === 'active' ? 'Active': 'Not Active' }</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
         <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color="purple.500">Change Role</Button>
         <Button isLoading={loading} onClick={()=> deleteButtonHandler(item._id)} color={'purple.600'} >
>>>>>>> 08f216d (complete website)
           <RiDeleteBin7Fill/>
         </Button>
        </HStack>
      </Td>
    </Tr>
  )
}