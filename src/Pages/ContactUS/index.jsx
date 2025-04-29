import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
   <Box pt={{md: "82px", base: "110px"}} >
      <ContactHero />
      <Box p={{md: 24, base: 5}}>
         <Grid gridTemplateColumns={{md: "1fr 1fr 1fr"}} gap={20}>
          <Box display={"grid"} gap={5}>
            <Text fontWeight={600} fontSize={"20px"}>
              Port Harcourt
            </Text>
            <Text>
            Head office located at #10 Second Avenue Federal Housing Estate Rumuemue, mile 4 ,Warehouse Plot 224 lyowuna Drive Trans Amadi Industrial Layout, PH.
            </Text>
            <Text as="a" href="tel:+2348132755766">
            (+234) (0) 813 275 5766
            </Text>
            <Text as="a" color="red.600" href="mailto:inquiries@damseikservices.com">
              inquiries@damseikservices.com
            </Text>
          </Box>
          <Box display={"grid"} gap={5}>
            <Text fontWeight={600} fontSize={"20px"}>
              United Kingdom
            </Text>
            <Text>
            UK Office7 Linley Dell,stopsley Luton Bedfordshire Lu 28 TJUK, fax 01592612068.
            </Text>
            <Text as="a" href="tel:+2348132755766">
            (+234) (0) 813 275 5766
            </Text>
            <Text as="a" color="red.600" href="mailto:inquiries@damseikservices.com">
              inquiries@damseikservices.com
            </Text>
          </Box>
          <Box>
            
          </Box>
          </Grid>      
      </Box>
      <ContactForm />

    </Box>
  )
}

export default Contact
