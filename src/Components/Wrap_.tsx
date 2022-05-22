import React from 'react'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'


function Wrap_() {
  return (
    <Wrap>
  <WrapItem>
    <Center w='1/4' h='80px' bg='red.200'>
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='1/4' h='80px' bg='green.200'>
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='1/4' h='80px' bg='tomato'>
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='1/4' h='80px' bg='blue.200'>
      Box 4
    </Center>
  </WrapItem>
</Wrap>
  )
}

export default Wrap_