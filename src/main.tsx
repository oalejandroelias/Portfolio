import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import Footer from './Components/Footer'
import Table_ from './Components/Table_'
import Wrap_ from './Components/Wrap_'
import NavBar from './Components/NavBar'
import Body1 from './Components/Body1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider 
    theme={theme}>
      <ColorModeScript initialColorMode='dark'></ColorModeScript>
      <NavBar></NavBar>
      <Body1></Body1>
      <App />
      {/* <Wrap_></Wrap_> */}
      
      <Footer></Footer>
    </ChakraProvider>
  </React.StrictMode>
)