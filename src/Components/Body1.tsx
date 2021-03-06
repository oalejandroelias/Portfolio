import React from 'react'
import Perfil from '../img/Perfil_.png'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
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

function Body1() {
    return (
        <Container maxW={'7xl'} py={12} >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Quien soy...
              </Text>
              <Heading>Programador Web</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Feature
                  icon={
                    <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={'Backend'}
                />
                <Feature
                  icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={'Frontend'}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'Sysadmin'}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={Perfil}
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      );
}

export default Body1
