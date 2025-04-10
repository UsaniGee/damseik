import { Box } from '@chakra-ui/react'
import React from 'react'
import ServicesHero from './ServicesHero'

const Services = () => {
  return (
    <Box pt={{md: "82px", base: "110px"}} >
         <ServicesHero />
         <Box px={{md: 14, base: 5}}>
          Services
         </Box>
    </Box>
      
  )
}

export default Services
