import React from 'react'
import { ChakraProvider, ColorModeScript, Link } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import Footer from './Components/Footer'
import Table_ from './Components/Table_'
import Wrap_ from './Components/Wrap_'
import NavBar from './Components/NavBar'
import Body1 from './Components/Body1'
import {createRoot} from 'react-dom/client';
import Carousel_ from './Components/Carousel_'
import Presentacion1 from './Components/Presentacion1'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ChakraProvider 
    theme={theme}>
      <ColorModeScript initialColorMode='dark'></ColorModeScript>
      <NavBar></NavBar>
      <Presentacion1></Presentacion1>
      {/* <Body1></Body1> */}
      {/* <Carousel_></Carousel_> */}
      <App />
      {/* <Wrap_></Wrap_> */}
      
      <Footer></Footer>
    </ChakraProvider>
  </React.StrictMode>
)
