import { useState } from 'react'
import React from 'react'
//import { Button, ButtonGroup } from '@chakra-ui/react'
//import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Image,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  useClipboard,
  Input,
  Editable,
  EditablePreview,
  EditableInput
} from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import imagen from './img/icon_gis.png'

function App() {
 
  return (
    <>
      <Container maxW={'3xl'}>
        
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Sistemas de<br />
            <Text as={'span'} color={'green.400'}>
              Información Geográfica
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Desarrollador Web
          </Text>
          <Image
                rounded={'md'}
                alt={'feature image'}
                src={imagen}
                objectFit={'cover'}
              />
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            {/* <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button> */}
            {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button> */}
         
          
          </Stack>
        </Stack>
      </Container>
    </>
  );



}

export default App
