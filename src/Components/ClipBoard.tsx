import { useClipboard, Flex } from '@chakra-ui/react'
import React from 'react'


function Example() {
    const [value, setValue] = React.useState('Hello world')
    const { hasCopied, onCopy } = useClipboard(value)
  
    return (
      <di>
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
      </di>
    )
  }