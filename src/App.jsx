import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Layout/Root'
import LandingPage from './Pages/LandingPage'
import AboutUs from './Pages/AboutUs'
import Careers from './Pages/Careers'
import Contact from './Pages/ContactUS'
import Media from './Pages/Media'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import { ChakraProvider, theme } from '@chakra-ui/react'


const App = () => {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/media' element={<Media />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/services' element={<Services />} />
    </Route>
    )
  )
 
  return (
    <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
