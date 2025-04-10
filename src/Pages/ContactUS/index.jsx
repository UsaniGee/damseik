import { Box } from '@chakra-ui/react'
import React from 'react'
import ContactHero from './ContactHero'

const Contact = () => {
  return (
   <Box pt={{md: "82px", base: "110px"}} >
      <ContactHero />
      <Box px={{md: 14, base: 5}}>
         Contact Us
      </Box>
    </Box>
  )
}

export default Contact
