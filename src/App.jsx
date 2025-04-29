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
import EquipmentLeasing from './Pages/Services/EquipmentLeasing'
import CoatingAndRepair from './Pages/Services/CoatingAndRepair'
import ProcessInstrumentation from './Pages/Services/ProcessInstrumentation'
import QualityControl from './Pages/Services/QualityControl'
import PipelineFacility from './Pages/Services/PipelineFacility'
import ValveServices from './Pages/Services/ValveServices' 
import MarineSupport from './Pages/Services/MarineSupport' 
import Procurement from './Pages/Services/Procurement'



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
      <Route path='/services/equipment-leasing' element={<EquipmentLeasing />} />
      <Route path='/services/coating-and-repair-products' element={ <CoatingAndRepair />} />
      <Route path='/services/process-instrumentation' element={<ProcessInstrumentation />} />
      <Route path='/services/quality-control-services' element={< QualityControl />} />
      <Route path='/services/pipeline-facility-production-maintenace' element={< PipelineFacility />} />
      <Route path='/services/valve-services' element={< ValveServices />} />
      <Route path='/services/marine-support-services' element={< MarineSupport/>} />
      <Route path='/services/procurement' element={< Procurement />} />
    </Route>
    )
  )  

  return (
    <ChakraProvider theme={theme  }>
    <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
