import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../../components/HeroSection'
import WhoAreWe from './WhoAreWe'
import WhatWeDo from './WhatWeDo'
import OurRecentProjects from './OurRecentprojects'
import OurClientsCarousel from '../../components/OurClients'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'

const LandingPage = () => {
  return (
   <Box>
    <HeroSection />
    <WhoAreWe />
    <WhatWeDo />
    <OurRecentProjects />
    <Testimonials />
    <FAQ />
    <OurClientsCarousel />
   </Box>
  )
}

export default LandingPage
