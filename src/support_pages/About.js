import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import Footer from "../main_page/Footer"
import SupportNavBar from "../main_page/SupportNavBar"

export default function App(){
  
  return (
    <>
    <SupportNavBar></SupportNavBar>
    <Flex justify='center' mt='10' mb='10' ml='10' mr='10'>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
      alignItems="center"
    >
      <Flex
      justify='center'
      alignItems="center"
      alignContent='center'
      alignSelf='center'
      ml='15'
      >
        <Box boxSize='md' w="full" alignItems="center">
          <Image
            fit="cover"

            h={{ base: 64, md: "100%" }}
            bg="gray.100"
            loading="lazy"
            rounded="full"
          />
        </Box>
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 10 }}
        w="full"

      >
        <Badge
          color="white"
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          rounded="full"
        >
          Sobre o criador
        </Badge>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
        >
          Olá, Bem-Vindo!
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
          textAlign='justify'
        >
          
        </chakra.p>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
          textAlign='justify'
        >
          Acredito que liberdade é o ativo mais importante que possuímos
          e através das criptomoedas, podemos maximizá-la, mas sem uma boa ferramenta de gestão, fica muito fácil se perder no caminho, já que são milhares de projetos, cada um com
          uma proposta mais inovadora que outra e quanto mais você compra, maior é a necessidade de ter uma maneira eficiente de controlar seus investimentos.
        </chakra.p>
       
      </Flex>
      
    </SimpleGrid>
    </Flex>
    <Footer></Footer>
    </>
  );
};