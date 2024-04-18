import React from 'react'
import {ColorModeSwitcher} from "../../../ColorModeSwitcher"
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/action/user';
import { useSelector } from 'react-redux';

const LinkButton = ({url="/",title="Home",onClose}) =>(
  <Link onClick={onClose} to={url}>
  <Button variant={'ghost'}>{title}</Button>
</Link>
)

const Header = ({isAuthenticated=false,user}) => {



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isOpen,onOpen,onClose} = useDisclosure()

  const logoutHandler = () =>{

    onClose();

    dispatch(logout());
    navigate('/')

  }

  return(
   <>
  <ColorModeSwitcher/>
  <Button colorScheme={"yellow"} width="12" height={'12'} rounded="full" position={"fixed"} top="6"
  left={"5"}
  onClick={onOpen}
  zIndex={'overlay'}
  >
    <RiMenu5Fill/>
  </Button>

  <Drawer placement='left'onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
    <DrawerHeader borderBottomWidth={"1px"}>Course Bundler</DrawerHeader>

    <DrawerBody>
      <VStack spacing={"4"} alignItems="flex-start">
        <LinkButton onClose={onClose} url='/' title='Home' />
        <LinkButton onClose={onClose} url='/courses' title='Courses' />
        <LinkButton onClose={onClose} url='/request' title='Request A Course' />
        <LinkButton onClose={onClose} url='/contact' title='Contact Us' />
        <LinkButton onClose={onClose} url='/about' title='About' />

        <HStack justifyContent={'space-evenly'} position="absolute" bottom={"2rem"} width="80%">
          {isAuthenticated?(
          <>
          <VStack>
            <HStack>
              <Link onClick={onClose} to='/profile'>
                <Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button>
              </Link>
              <Button variant={'ghost'} onClick={logoutHandler} >
                <RiLogoutBoxLine/>
                Logout</Button>
            </HStack>

            {
              (user && user.role === "admin") ?( <Link onClick={onClose} to="/admin/dasboard">
                <Button colorScheme={'purple'} variant='ghost'>
                  <RiDashboardFill style={{margin:"4px"}}/>
                  Dasboard
                </Button>
              </Link>):(<></>)
            }
          </VStack>
           </>)
          
          :
          (
          <>
          <Link onClick={onClose} to="/login">
          <Button colorScheme={'yellow'}>Login</Button>
          </Link>

          <p>OR</p>

          <Link  onClick={onClose} to="/register">
            <Button colorScheme={'yellow'}>Sign Up</Button>
          </Link>
          </>)}
        </HStack>
      </VStack>
    </DrawerBody>

    </DrawerContent>
  </Drawer>
  </>
  )
}

export default Header


