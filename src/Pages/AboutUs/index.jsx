import { Box } from '@chakra-ui/react'
import React from 'react'
import AboutHero from './AboutHero'

const AboutUs = () => {
  return (
   <Box pt={{md: "82px", base: "110px"}} >
      <AboutHero />
      <Box px={{md: 14, base: 5}}>
        Hello
      </Box>
    </Box>
  )
}

export default AboutUs
