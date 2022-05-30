import { Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Spacer,
  StackDivider,
  Icon,
  useColorModeValue, } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query';

import {  Circle,  Box,  } from '@chakra-ui/layout';
import React from 'react'
import Perfil from '../img/Perfil_.png'
import { ReactElement } from 'react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import Card_ from './Card_'

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function Presentacion1() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

  return (
    
     <Container maxW={'7xl'} py={12}>
     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
       
       <Stack spacing={10}>
       {/* <Circle position="absolute" bg="red.100" opacity="0.5" alignSelf="flex-end" /> */}
                 <Flex  alignSelf="flex-start">
                    <Box >
                    <Text fontSize="5xl" fontWeight="semibold">Hola, Soy</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Alejandro Elias</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Programador Web</Text>
                   
                </Box>
                </Flex>
       </Stack>
      
       <Flex>
         <Spacer/>
       
       <Image alignSelf="center" 
                     borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src={Perfil}/>
       </Flex>
     </SimpleGrid>
     <Card_></Card_>
   </Container>
  )
}

export default Presentacion1