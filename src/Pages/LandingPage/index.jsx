import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../../components/HeroSection'
import WhoAreWe from './WhoAreWe'
import WhatWeDo from './WhatWeDo'
import OurRecentProjects from './OurRecentprojects'
import OurClientsCarousel from '../../components/ui'

const LandingPage = () => {
  return (
   <Box pt={14}>
    <HeroSection />
    <WhoAreWe />
    <WhatWeDo />
    <OurRecentProjects />
    <OurClientsCarousel />
   </Box>
  )
}

export default LandingPage
