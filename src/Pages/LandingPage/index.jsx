import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../../components/HeroSection'
import WhoAreWe from './WhoAreWe'
import WhatWeDo from './WhatWeDo'
import OurRecentProjects from './OurRecentprojects'
import OurClientsCarousel from '../../components/OurClients'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'

const LandingPage = () => {
  return (
   <Box>
    <SEO 
      title="Home"
      description="Dam Seik Services Limited - Leading provider of oil & gas engineering solutions, pipeline services, well services, and marine support in Nigeria. Over 36 years of excellence."
      keywords="oil and gas, energy services, petroleum, offshore drilling, oilfield services, gas exploration, pipeline maintenance, refinery services, energy consulting, fuel supply, oil rig maintenance, upstream services, downstream operations"
    />
    <StructuredData />
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
