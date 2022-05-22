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


function Example() {
  const [value, setValue] = React.useState('Hello world')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder='Welcome' />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
      <Editable placeholder='Paste here'>
        <EditablePreview width='100%' />
        <EditableInput />
      </Editable>
    </>
  )
}

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
            Alejandro<br />
            <Text as={'span'} color={'green.400'}>
              Elias
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Desarrollador Web
          </Text>
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
            <Box>
              <Icon
               
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Openlayers
              </Text>
            </Box>
            <Box>
              <Icon
               
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(20deg)'}>
                Geoserver
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );



}

export default App
