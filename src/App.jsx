import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ChakraProvider, theme, Spinner, Box, Center } from '@chakra-ui/react'
import Root from './Layout/Root'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load main pages
const LandingPage = lazy(() => import('./Pages/LandingPage'))
const AboutUs = lazy(() => import('./Pages/AboutUs'))
const Careers = lazy(() => import('./Pages/Careers'))
const Contact = lazy(() => import('./Pages/ContactUS'))
const Media = lazy(() => import('./Pages/Media'))
const Projects = lazy(() => import('./Pages/Projects'))
const Services = lazy(() => import('./Pages/Services'))
const NotFound = lazy(() => import('./Pages/NotFound'))

// Lazy load service pages
const EquipmentLeasing = lazy(() => import('./Pages/Services/EquipmentLeasing'))
const CoatingAndRepair = lazy(() => import('./Pages/Services/CoatingAndRepair'))
const ProcessInstrumentation = lazy(() => import('./Pages/Services/ProcessInstrumentation'))
const QualityControl = lazy(() => import('./Pages/Services/QualityControl'))
const PipelineFacility = lazy(() => import('./Pages/Services/PipelineFacility'))
const ValveServices = lazy(() => import('./Pages/Services/ValveServices'))
const MarineSupport = lazy(() => import('./Pages/Services/MarineSupport'))
const Procurement = lazy(() => import('./Pages/Services/Procurement'))
const WellServices = lazy(() => import('./Pages/Services/WellServices'))
const ProductionChemicalServices = lazy(() => import('./Pages/Services/ProductionChemicalServices'))

// Lazy load project pages
const WaterInjection = lazy(() => import('./Pages/Projects/WaterInjection'))
const WellInterventionProject = lazy(() => import('./Pages/Projects/WellIntervention'))
const HighPressurePumpProject = lazy(() => import('./Pages/Projects/HighPressurePumpProject'))
const NitrogenLiftProject = lazy(() => import('./Pages/Projects/NitrogenLiftProject'))

// Loading fallback component
const PageLoader = () => (
  <Center minH="100vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#D10205"
      size="xl"
    />
  </Center>
)

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
      <Route path='/services/well-service' element={< WellServices />} />
       <Route path='/services/production-chemical-services' element={< ProductionChemicalServices />} />
      <Route path='/projects/water-re-injection-project-umusadege-1-kwale-delta-state' element={< WaterInjection />} />
      <Route path='/projects/well-intervention-rivers-state' element={< WellInterventionProject/>} />
      <Route path='/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state' element={< HighPressurePumpProject />} />
      <Route path='/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp' element={< NitrogenLiftProject />} />
      <Route path='*' element={<NotFound />} />
    </Route>
    )
  )  

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App
