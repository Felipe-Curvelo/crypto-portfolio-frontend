import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import {
    chakra,
    Flex,
    HStack,
    useColorModeValue,
    Box,
    useDisclosure,
    Spacer,
    IconButton,
    VStack,
    useColorMode,
    Image,
    Text,
    Button,
    Icon,
  } from "@chakra-ui/react";

import { BiGhost } from "react-icons/bi"
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineCrown } from "react-icons/ai";


import Logo from '../Logo.png';

import { AuthContext } from '../contexts/auth';


const SupportNavBar = () => {
    const bg = useColorModeValue("white", "black");
    const mobileNav = useDisclosure();
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, MdOutlineWbSunny);
    const logoColor = useColorModeValue("linear(to-r, blue.900, blue.800, blue.600, blue.300)", "linear(to-r, purple.300, purple.200, gray.100, white)");

    const { subscription } = useContext(AuthContext);
   
  
    const MobileNavContent = (
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
      </VStack>
    );

  return (
    <React.Fragment>
      <chakra.header 
        h="full" 
        bg={bg} 
        w="full" 
        px={{ base: 2, sm: 4 }} 
        py={4} 
        shadow="md"
      >
        <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          mx="auto"
        >
          <Link to ="/">
            <Image 
              src={Logo} 
              alt="Logo" 
              boxSize='60px' 
            />
          </Link>
          <Link to='/'>
          <Box 
            display={{ base: "none", md: "inline-flex" }}
          >
            <HStack spacing={1}>
              <Box role="group">
                <Text
                  fontWeight="extrabold"
                  fontSize='3xl'
                  bg={bg}
                  alignItems="center"
                  bgGradient={logoColor}
                  bgClip="text"
                >
                  Ghost Portfolio
                </Text>
              </Box>
            </HStack>
          </Box>
          </Link>
          <Spacer />
          
          <HStack 
            spacing={5} 
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
          {subscription === true ?
            <Icon
              as={AiOutlineCrown}
              variant='outline'
              w={8} 
              h={8}
            />

          :
            <Link to="/subscription">
              <Button 
                colorScheme="yellow"
                leftIcon={<BiGhost />}
                onClick={null}
              >
                Assinar
              </Button>
            </Link>  
          }
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
                isRound="true"
            />           
          </HStack>
        </Flex>
        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}

export default SupportNavBar